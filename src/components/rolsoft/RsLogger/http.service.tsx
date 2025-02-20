import { Observable, throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

import axios from 'axios';
import { RsLogAPIEntryDataDef } from './RsLogger';
import { config } from './config';

const httpInstance = axios.create({
    baseURL: config.url
});

export const _sendReport = (sheetId: string, sheetName: string, entry: RsLogAPIEntryDataDef = {}) => {
    // Prepare 
    const form = { sheetId, sheetName };
    Object.keys(entry).forEach(key => form[key] = (typeof entry[key] === 'object' ? JSON.stringify(entry[key]) : entry[key]).toString().slice(0, 50000));
    return _makeRequest(form);
};

const _makeRequest = (data) => {
    const endPoint = config.url;
    const options = { headers: { 'Content-Type': 'application/json' } };
    let request: any = httpInstance.post(endPoint, data, options);
    return new Observable((subscriber) => {
        request
            .then((response: any) => {
                if (response.status === 200) {
                    subscriber.next(response.data.result || response.data);
                } else {
                    subscriber.error(response.data.result || response.data);
                }
            })
            .catch((error: any) => subscriber.error(error))
            .finally(() => subscriber.complete());
    });
};