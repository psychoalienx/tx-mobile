import { Image } from "react-native";

export const APP_VERSION = '1.0.0';

export const apiConfig = {
  baseUrl: 'https://tmd.yblnkio.com/api/',
  DEFAULT_CONTENT_TYPE: 'multipart/form-data',
  DEFAULT_RESPONSE_TYPE: 'json',
  WITH_CREDENTIALS: false,
  IS_APP: true,
};

export const termsUrl = 'https://majalatina.com/agreements/terms';
export const privacyUrl = 'https://majalatina.com/agreements/privacy';

export const iosRateUrl = 'https://majalatina.com/agreements/privacy';
export const androidRateUrl = 'https://majalatina.com/agreements/privacy';

export const defaultProfilePicture = require('@assets/images/userprofile.jpg');
export const noImage = require('@assets/images/noImage.jpg');
export const noImageURI = Image.resolveAssetSource(noImage).uri;

export const includeLogger = true;


