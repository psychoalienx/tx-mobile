import { IAPIActionDateDef } from "./core";

export interface IAPICategoryDef {
    id: number;
    name: string;
    status: {
        id: number;
        sys_name: string
    };
    type: {
        id: number;
        sys_name: string
    };
    picture: string;
    create: IAPIActionDateDef;
}