import { IAPIActionDateDef } from "./core";

export interface IAPITrailerDef {
    id: number;
    name: string;
    description: string;
    picture: string;
    url: string;
    status: {
        id: number,
        sys_name: string
    };
    parent: { id: number; type: string; };
    create: IAPIActionDateDef;
}
