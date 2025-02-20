import { IAPICategoryDef } from "./categories";
import { IAPIActionDateDef } from "./core";

export interface IAPIChannelDef {
    id: number;
    // is_favorite: boolean;
    name: string;
    url: string;
    status: {
        id: number,
        sys_name: string
    };
    categories: IAPICategoryMapDef[];
    create: IAPIActionDateDef;
}

export interface IAPICategoryMapDef {
    id: number;
    category: IAPICategoryDef;
    channel: { id: number };
    create: IAPIActionDateDef;
};