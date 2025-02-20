import { Image } from "react-native";

export const defaultProfilePicture = require('@assets/images/userprofile.jpg');
export const defaultProfilePictureURI = Image.resolveAssetSource(defaultProfilePicture).uri;
export const noImage = require('@assets/images/noImage.jpg');
export const noImageURI = Image.resolveAssetSource(noImage).uri;

export const MediaContentItemTypeDef = {
    movie: 'movie',
    chapter: 'chapter'
};

export const TrailerParentTypeDef = {
    movie: 1,
    season: 2,
    serie: 3
};

export const CategoryTypeDef = {
    invalid: 0,
    default: 1,
    iptv: 2
};