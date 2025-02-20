import { AuthService as _auth } from '../core/auth.service';
import { Observable } from 'rxjs';
import { IAPIRequestQuery } from '@interfaces/api_interfaces/core';
import { IAPIMovieDef } from '@interfaces/api_interfaces/movies';
import { IAPIChapterDef, IAPISeasonDef, IAPISerieDef } from '@interfaces/api_interfaces/series';
import { IAPICategoryDef } from '@interfaces/api_interfaces/categories';
import { IAPIChannelDef } from '@interfaces/api_interfaces/channels';

class SupportAPIService {
    constructor() { }
    /**
     */
    public sendRequest(data: { message: string }): Observable<boolean> {
        return _auth._post('client/support/send.json', data);
    }
}
export class ChannelsAPIService {

    constructor() { }

    get(data: { query: IAPIRequestQuery | string }): Observable<IAPIChannelDef[]> {
        data.query = JSON.stringify(data.query);
        return _auth._post('channels/get.json', data);
    }

}
export class MoviesAPIService {

    constructor() { }

    get(data: { query: IAPIRequestQuery | string }): Observable<IAPIMovieDef[]> {
        data.query = JSON.stringify(data.query);
        return _auth._post('movies/get.json', data);
    }

}

export class ChaptersAPIService {

    constructor() { }

    get(data: { query: IAPIRequestQuery | string }): Observable<IAPIChapterDef[]> {
        data.query = JSON.stringify(data.query);
        return _auth._post('series/chapters/get.json', data);
    }

}

export class SeasonsAPIService {

    constructor() { }

    get(data: { query: IAPIRequestQuery | string }): Observable<IAPISeasonDef[]> {
        data.query = JSON.stringify(data.query);
        return _auth._post('series/seasons/get.json', data);
    }

}

export class SeriesAPIService {

    constructor() { }

    get(data: { query: IAPIRequestQuery | string }): Observable<IAPISerieDef[]> {
        data.query = JSON.stringify(data.query);
        return _auth._post('series/get.json', data);
    }

    public seasons = new SeasonsAPIService();
    public chapters = new ChaptersAPIService();
    
}

export class CategoriesAPIService {

    constructor() { }

    get(data: { query: IAPIRequestQuery | string }): Observable<IAPICategoryDef[]> {
        data.query = JSON.stringify(data.query);
        return _auth._post('categories/get.json', data);
    }
    
}

export class ClientAPIService {
    public support = new SupportAPIService();
    public movies = new MoviesAPIService();
    public series = new SeriesAPIService();
    public categories = new CategoriesAPIService();
    public channels = new ChannelsAPIService();
    
}