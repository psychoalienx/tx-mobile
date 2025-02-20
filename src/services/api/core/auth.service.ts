import { HttpsService } from './https.service'
import { BehaviorSubject, firstValueFrom, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { apiConfig } from '@enviroments/environment';
import { IAPIUserInformationDef } from '@interfaces/api_interfaces/user';
// https://blog.bitsrc.io/sharing-data-between-react-components-using-rxjs-922a46c13dbf
let _loggedOutUserInfo: any = { user: { id: 0 } };
let _authToken$ = new BehaviorSubject('');
let _userInformation$: BehaviorSubject<IAPIUserInformationDef> = new BehaviorSubject<IAPIUserInformationDef>(_loggedOutUserInfo);
let _initialized$ = new BehaviorSubject(false);
const _storage = StorageService;
const loadAuthToken = () => {
  _storage.get('authToken').then((storedToken: any) => {
    if (storedToken) {
      _authToken$.next(storedToken);
    }
    _authToken$.subscribe({ next: (token) => _storage.set('authToken', token) });
    loadUserInfo();
  });
};

const loadUserInfo = () => {
  _storage.get('userInfo').then((storedUserInfo: any) => {
    if (storedUserInfo) {
      _userInformation$.next(storedUserInfo);
    }
    _userInformation$.subscribe({
      next: (userInfo) => {
        _storage.set('userInfo', userInfo);
      }
    });
    _initialized$.next(true);
  });
};

if (apiConfig.IS_APP) {
  loadAuthToken();
} else {
  loadUserInfo();
}

const _http = HttpsService;

const signAndSecureRequest = (
  callback: any,
  endPoint: any,
  data: any,
  options: any) => {
  options = options || {};
  options.headers = Object.assign({}, options.headers || {}, {
    //'Content-Type': (options.headers || {})['Content-Type'] || (apiConfig.DEFAULT_CONTENT_TYPE || 'multipart/form-data')
  });
  options.responseType = options.responseType || (apiConfig.DEFAULT_RESPONSE_TYPE || 'json');
  let suscription: any;
  return new Observable((subscriber) => {
    suscription = _initialized$.subscribe({
      next: (value) => {
        if (value === true) {
          setTimeout(() => suscription.unsubscribe(), 10);
          if (apiConfig.IS_APP) {
            options.headers = Object.assign({}, options.headers || {}, { 'apiaf': 'app' });
            if (_authToken$.value.length > 0) {
              options.headers = Object.assign({}, options.headers || {}, { 'Authorization': 'Bearer ' + _authToken$.value });
            }
          }
          // here call callback
          callback(endPoint, data, options)
            .pipe(
              map((response: any) => {
                if (endPoint === 'account/login.json' || endPoint === 'account/check_login.json' || endPoint === 'account/signup.json') {
                  if (response.app_tokens) {
                    _authToken$.next(response.app_tokens.oauth_token);
                    delete response.app_tokens;
                  }
                  _userInformation$.next(response);
                }
                return response;
              }),
              catchError((error) => {
                if (error instanceof Error && error.message === 'YOU_ARE_NOT_LOGGED_IN') {
                  AuthService._resetAuthState();
                }
                return throwError(error);
              })
            )
            .toPromise()
            .then((result: any) => {
              subscriber.next(result);
            })
            .catch((error: any) => {
              subscriber.error(error);
            })
            .finally(() => {
              subscriber.complete();
            });
        }
      }
    });
  });
};

export const AuthService = {
  _get: (endPoint: any, data?: any, options?: any) => {
    return signAndSecureRequest(
      (_endPoint: any, _data: any, _options: any) => _http._get(_endPoint, _data, _options),
      endPoint,
      data,
      options) as Observable<any>;
  },
  _post: (endPoint: any, data: any, options?: any) => {
    return signAndSecureRequest(
      (_endPoint: any, _data: any, _options: any) => _http._post(_endPoint, _data, _options),
      endPoint,
      data,
      options) as Observable<any>;
  },
  _logout: () => new Promise((resolve, reject) => {
    firstValueFrom(AuthService._get('account/logout.json'))
      .then((response) => {
        if (response === true) {
          AuthService._resetAuthState();
          resolve('');
        } else {
          reject();
        }
      }).catch((error) => {
        reject(error);
      });
  }),
  _checkLogin: () => AuthService._get('account/check_login.json', {}).toPromise(),
  _getUserInformation: () => _userInformation$.asObservable(),
  _authState: () => new Observable((_subscriber) => {
    ((subscriber: any, suscription: any) => {
      suscription = _initialized$.subscribe({
        next: (value) => {
          if (value) {
            setTimeout(() => suscription.unsubscribe(), 10);
            subscriber.next({ token: _authToken$.value, user: _userInformation$.value });
            subscriber.complete();
            AuthService._checkLogin().then((result) => { }).catch((error) => { });
          }
        }
      });
    })(_subscriber, null);
  }),
  _initialized: () => _initialized$.asObservable(),
  _resetAuthState: () => {
    _userInformation$.next(_loggedOutUserInfo);
    _authToken$.next('');
  }
};
