import { IAPIActionDateDef } from "./core";

export interface IAPIMediaContentType {
    id: number;
    type: string;
}

export interface IAPIMediaContent {
    id: number;
    type: IAPIMediaContentType;
    url: string;
    language: string;
    create: IAPIActionDateDef;
}

export interface IAPIMediaCaptionType {
    id: number;
    type: string;
}

export interface IAPIMediaCaption {
    id: number;
    type: IAPIMediaCaptionType;
    url: string;
    language: string;
    create: IAPIActionDateDef;
}

export interface IAPIMediaSoundType {
    id: number;
    type: string;
}

export interface IAPIMediaSound {
    id: number;
    type: IAPIMediaSoundType;
    url: string;
    language: string;
    create: IAPIActionDateDef;
}