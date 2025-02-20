import { AuthService as _auth } from '../core/auth.service';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { IAPIAgreementDef, IAPIRequestQuery, IAPIVersionCheckDef, IAPIVersionDef } from '@interfaces/api_interfaces/core';
import { APP_VERSION } from '@enviroments/environment';
import { Alert, Linking, Platform } from 'react-native';
import { ApiService } from '../core/api.service';
import { StorageService } from '../core/storage.service';
/* import uuid from 'react-native-uuid';
import md5 from 'md5'; */

export class SystemAPIAgreements {

    constructor() { }

    get(data: { query: IAPIRequestQuery | string }): Observable<IAPIAgreementDef[]> {
        data.query = JSON.stringify(data.query);
        return _auth._post('agreements/get.json', data);
    }

}

export class SystemAPIService {

    public deviceId: string = '';

    private _ApiService;

    public agreements = new SystemAPIAgreements();

    public version: string = APP_VERSION;
    private appVersion$: BehaviorSubject<IAPIVersionDef> = new BehaviorSubject<IAPIVersionDef>({
        version: APP_VERSION,
        download_url: {
            ios: 'https://appstore.com/',
            android: 'https://play.google.com/store/apps/',
        },
    });

    constructor(ApiService: ApiService) {
        this._ApiService = ApiService;
    }

    public initialize(): Promise<string> {
        return new Promise((resolve: any, reject: any) => {
            StorageService.get('deviceId').then((deviceId: any) => {
                try {
                    if ((deviceId || '').length < 10) {
                        // StorageService.set('deviceId', this.deviceId = md5((new Date()).getTime().toString() + JSON.stringify(Platform) + uuid.v4()));
                    } else {
                        this.deviceId = deviceId;
                    }
                    resolve(deviceId);
                } catch (e) {
                    reject();
                }
            });
        });
    }

    public checkForUpdates() {
        firstValueFrom(_auth._post('version/is_valid.json', {
            version: this.version,
        })).then((result: IAPIVersionCheckDef) => {
            this.appVersion$.next(result.current_version);
            if (!result.supported) {
                if (result.available_update) {
                    this._updateRequiredAlert(
                        result.available_update.version,
                        (Platform.OS === 'ios') ? result.available_update.download_url.ios : result.available_update.download_url.android);
                }
            } else if (result.available_update && result.available_update.notify) {
                this._newVersionAlert(
                    result.available_update.version,
                    (Platform.OS === 'ios') ? result.available_update.download_url.ios : result.available_update.download_url.android);
            }
        }).catch(() => { });
    }

    private async _newVersionAlert(versionCode: string, downloadUrl: string) {
        Alert.alert(
            'Hay una nueva actualización',
            `Actualiza la aplicación a la versión ${versionCode} para una mejor experiencia.`,
            [
                { text: "Cancelar", onPress: () => { } },
                {
                    text: "Actualizar", onPress: () => /* window.open(downloadUrl, '_blank') */
                        Linking.openURL(downloadUrl)
                }
            ]
        );
    }

    private async _updateRequiredAlert(versionCode: string, downloadUrl: string) {
        const self = this;
        Alert.alert(
            'Actualización requerida',
            `Debes actualizar la aplicación a la versión ${versionCode}.`,
            [
                {
                    text: "Actualizar", onPress: () => {
                        //window.open(downloadUrl, '_blank');
                        Linking.openURL(downloadUrl);
                        setTimeout(() => self._updateRequiredAlert(versionCode, downloadUrl), 1000);
                    }
                }
            ]
        );
    }

}
