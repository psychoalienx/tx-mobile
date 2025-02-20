import { IAPIUserDef } from "./user";


export interface IAPIPaginationHandlerDef<T> {
    current_page: number; // Página actual.
    request_batch: number; // Es el mismo valor del parámetro count que llegó de front.
    total_records: number; // Es el total de records que existen en la db para ese criterio de filtro.
    total_pages: number; // Total de paginas, que existen usando ese batch
    records: T[];
}

export interface IAPIVersionDef {
    version: string;
    download_url: {
        ios: string;
        android: string;
    };
    notify?: boolean;
}

export interface IAPIVersionCheckDef {
    supported: boolean;
    current_version: IAPIVersionDef;
    available_update?: IAPIVersionDef;
}

export interface IAPIActionDateDef {
    date: number;
    user?: IAPIUserDef;
}

export interface IAPIRequestQuery {
    count: number;
    page?: number;
    order?: {
        col: string;
        sort: string; // ASC|DESC|1|0
    }[];
    conds: any; // Example of conds in https://docs.google.com/document/d/16q-V4OsE2L6AFGFgnN65ea7e6uKKKQFVuEdIDW9uXyQ/edit
}

export interface IAPIAgreementDef {
    id: number;
    body: string;
    tags: string;
    lang: string[];
    version: string;
    status: IAPIAgreementStatusDef;
    create: IAPIActionDateDef;
}

export interface IAPIAgreementStatusDef {
    id: number;
    sys_name: string;
}

export interface IAPIDocumentTypeStatusDef {
    id: number;
    sys_name: string;
}

export interface IAPIAddressDef {
    id: number;
    address: string;
    longitude: string;
    latitude: string;
    create: IAPIActionDateDef;
}
