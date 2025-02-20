import { IAPICategoryDef } from "./categories";
import { IAPIActionDateDef } from "./core";
import { IAPIMediaContent, IAPIMediaSound, IAPIMediaCaption } from "./media";
import { IAPITrailerDef } from "./trailers";

export interface IAPIMovieDef {
    id: number;
    is_favorite: boolean;
    name: string;
    description: string;
    status: {
        id: number,
        sys_name: string
    };
    content: IAPIMediaContent[];
    cover_picture: string;
    promotional_picture: string;
    duration: number;
    release_date: number;
    launch_date: number;
    categories: IAPICategoryMapDef[];
    sounds: IAPIMediaSound[];
    captions: IAPIMediaCaption[];
    trailers: IAPITrailerDef[];
    create: IAPIActionDateDef;
}

export interface IAPICategoryMapDef {
    id: number;
    category: IAPICategoryDef;
    movie: { id: number };
    create: IAPIActionDateDef;
};