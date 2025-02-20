
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IAPIUserInformationDef, IAPIClientAccountDef, IAPIPhoneVerificationCode, IAPIChannelVerificationToken, IAPIPasswordResetToken } from '@interfaces/api_interfaces/user';
import { AuthService as _auth } from '../core/auth.service';

export class UserAPIService {

  constructor() { }

  public getInformation(): Observable<IAPIUserInformationDef> {
    return _auth._getUserInformation();
  }

  public authState(): Observable<any> {
    return _auth._authState();
  }

  public logout(): Promise<any> {
    return _auth._logout();
  }

  public setUserInformation(data: {
    data: {
      name?: string,
      username?: string,
      email?: string,
      // address?: string,
      profile_picture?: string,
      tax_id?: string,
      phone?: string,
      allow_notifications?: boolean,
    } | string,
    file?: {
      blob: any,
      name: string,
    },
  }): Observable<IAPIClientAccountDef> {
    data.data = JSON.stringify(data.data);
    return _auth._post('account/edit.json', data).pipe(tap({
      next: () => {
        _auth._checkLogin();
      },
      error: () => {
        _auth._checkLogin();
      },
    }));
  }

  public checkLogin(): Promise<IAPIUserInformationDef> {
    return _auth._checkLogin().then((userInfo: IAPIUserInformationDef) => {
      return userInfo;
    }).catch((reason) => {
      return reason;
    });
  }

  public changePassword(data: any): Observable<boolean> {
    return _auth._post('account/change_password.json', data);
  }

  public sendPasswordResetVerificationCode(data: {
    channel: string, // 'sms'||'email',
    channel_value: string
  }): Observable<IAPIChannelVerificationToken> {
    return _auth._post('account/request_password_reset.json', data);
  }

  public verifyPasswordResetVerificationCode(data: {
    temporal_token: string,
    channel: string, // 'sms'||'email',
    code: string
  }): Observable<IAPIPasswordResetToken> {
    return _auth._post('account/verify_password_code.json', data);
  }

  public login(data: {
    login_value: string,
    password: string,
  }): Observable<IAPIUserInformationDef> {
    return _auth._post('account/login.json', data);
  }

  public signup(data: {
    email: string,
    name: string,
    password: string,
    phone: string,
    username: string // se debe enviar en formato 00000000-0
  }): Observable<IAPIUserInformationDef> {
    return _auth._post('account/signup.json', data);
  }

  public sendPasswordResetEmail(data: {
    email: string,
  }): Observable<boolean> {
    return _auth._post('account/send_password_reset_request_email.json', data);
  }

  public resetPassword(data: {
    password: string,
    token: string,
  }): Observable<boolean> {
    return _auth._post('account/reset_password.json', data);
  }

  public deleteAccount(data: {
    password: string,
  }): Observable<boolean> {
    return _auth._post('account/delete.json', data).pipe(tap({
      next: () => _auth._resetAuthState(),
      error: () => { },
    }));
  }

}
