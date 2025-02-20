import { Observable, throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

import axios from 'axios';
import { apiConfig } from '@enviroments/environment';
import { RsLogger } from '@components/rolsoft/RsLogger/RsLogger';

const httpInstance = axios.create({
  baseURL: apiConfig.baseUrl,
  withCredentials: apiConfig.WITH_CREDENTIALS == true,
});

const _processFormData = (data: any, contentType: any) => {
  let formData = new FormData();
  if (contentType == 'application/json') {
    formData = data;
  } else {
    Object.keys(data).forEach((key) => {
      if (data[key]) {
        if (data[key].blob) {
          // blob name
          // formData.set(key, data[key].blob, data[key].name);
          formData.append(key, data[key].blob, data[key].name);
        } /* else if (data[key].uri && data[key].type) {
          formData.append(key, { uri: data[key].uri, name: data[key].name, type: data[key].type });
        } */ else {
          // formData.set(key, data[key]);
          formData.append(key, data[key]);
        }
      }
    });
  }
  return formData;
};
/**
 * 
 * @param {{
  url?: string;
  method?: Method;
  baseURL?: string;
  transformRequest?: AxiosTransformer | AxiosTransformer[];
  transformResponse?: AxiosTransformer | AxiosTransformer[];
  headers?: any;
  params?: any;
  paramsSerializer?: (params: any) => string;
  data?: any;
  timeout?: number;
  timeoutErrorMessage?: string;
  withCredentials?: boolean;
  adapter?: AxiosAdapter;
  auth?: AxiosBasicCredentials;
  responseType?: ResponseType;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: ((status: number) => boolean) | null;
  maxBodyLength?: number;
  maxRedirects?: number;
  socketPath?: string | null;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?: AxiosProxyConfig | false;
  cancelToken?: CancelToken;
  decompress?: boolean;
}} type 
 * @param {*} endPoint 
 * @param {*} formData 
 * @param {*} headers 
 * @param {*} options 
 */

const _makeRequest = (type: any, endPoint: any, data: any, options: any) => {
  endPoint = apiConfig.baseUrl + endPoint;
  let request: any;
  if (type === 'POST') {
    request = httpInstance.post(endPoint, data, options);
  } else if (type === 'PUT') {
    request = httpInstance.put(endPoint, data, options);
  } else if (type === 'DELETE') {
    request = httpInstance.delete(endPoint, options);
  } else {
    options.params = data;
    request = httpInstance.get(endPoint, options);
  }
  return new Observable((subscriber) => {
    request
      .then((response: any) => {
        RsLogger.log({
          endpoint: response?.config?.url,
          method: response?.config?.method,
          payload: data?._parts ? Object.fromEntries(data._parts) : data,
          response: response?.data?.result || response?.data,
          responseStatus: response?.status,
          requestHeaders: response?.config?.headers,
          responseHeaders: response?.headers
        }, 'API');
        if (response.status === 200) {
          if (!response.data.error) {
            subscriber.next(response.data.result || response.data);
          } else {
            subscriber.error(response.data.result);
          }
        } else {
          subscriber.error(response.data.result);
        }
      })
      .catch((error: any) => {
        RsLogger.log({
          endpoint: endPoint,
          method: type,
          payload: data?._parts ? Object.fromEntries(data._parts) : data,
          response: error?.response?.data?.result || error,
          requestHeaders: options,
        }, 'API');
        subscriber.error(error?.response?.data?.result || error);
      })
      .finally(() => subscriber.complete());
  });
};

export const HttpsService = {
  _get: (endpoint: any, data: any, options: any) => {
    /*const params = [];
    //_processFormData(data || {}, ((options || {}).headers || {})['Content-Type']).forEach((value, key) => params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value)));
    if (params.length > 0) {
      endpoint += (endpoint.indexOf('?') >= 0 ? '&' : '?') + params.join('&');
    }*/
    return _makeRequest('GET', endpoint, data, options);
  },
  _post: (endpoint: any, data: any, options: any) => {
    const formData = _processFormData(
      data || {},
      ((options || {}).headers || { 'Content-Type': 'multipart/form-data' })[
      'Content-Type'
      ],
    );
    return _makeRequest('POST', endpoint, formData, options);
  },
  _put: (endpoint: any, data: any, options: any) => {
    const formData = _processFormData(
      data || {},
      ((options || {}).headers || { 'Content-Type': 'multipart/form-data' })[
      'Content-Type'
      ],
    );
    return _makeRequest('PUT', endpoint, formData, options);
  },
  _delete: (endpoint: any, options: any) => {
    return _makeRequest('DELETE', endpoint, undefined, options);
  },
};
