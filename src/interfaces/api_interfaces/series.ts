import { IAPICategoryDef } from "./categories";
import { IAPIActionDateDef } from "./core";
import { IAPIMediaContent, IAPIMediaSound, IAPIMediaCaption } from "./media";
import { IAPITrailerDef } from "./trailers";

export interface IAPISerieDef {
    id: number;
    is_favorite: boolean;
    name: string;
    description: string;
    status: {
        id: number,
        sys_name: string
    };
    cover_picture: string;
    promotional_picture: string;
    release_date: number;
    launch_date: number;
    categories: IAPICategoryMapDef[];
    seasons: IAPISeasonDef[];
    trailers: IAPITrailerDef[];
    create: IAPIActionDateDef;
}

export interface IAPISeasonDef {
    id: number;
    name: string;
    description: string;
    status: {
        id: number,
        sys_name: string
    };
    cover_picture: string;
    promotional_picture: string;
    release_date: number;
    launch_date: number;
    // categories: IAPICategoryDef[] | RSCCategory[];
    serie: { id: number };
    chapters: IAPIChapterDef[];
    trailers: IAPITrailerDef[];
    create: IAPIActionDateDef;
}

export interface IAPIChapterDef {
    id: number;
    next_chapter: { id: number };
    previous_chapter: { id: number };
    season_id: number;
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
    sounds: IAPIMediaSound[];
    captions: IAPIMediaCaption[]
    create: IAPIActionDateDef;
}

export interface IAPICategoryMapDef {
    id: number;
    category: IAPICategoryDef;
    serie: { id: number };
    create: IAPIActionDateDef;
};