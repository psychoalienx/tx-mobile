import { Image } from "react-native";

export const APP_VERSION = '1.0.0';

const baseUrl = 'https://tmd.yblnkio.com/';

export const apiConfig = {
  baseUrl: baseUrl + 'api/',
  DEFAULT_CONTENT_TYPE: 'multipart/form-data',
  DEFAULT_RESPONSE_TYPE: 'json',
  WITH_CREDENTIALS: false,
  IS_APP: true,
};

export const termsUrl = baseUrl + 'agreements/terms';
export const privacyUrl = baseUrl + 'agreements/privacy';

export const iosRateUrl = baseUrl + 'agreements/privacy';
export const androidRateUrl = baseUrl + 'agreements/privacy';

export const defaultProfilePicture = require('@assets/images/userprofile.jpg');
export const noImage = require('@assets/images/noImage.jpg');
export const noImageURI = Image.resolveAssetSource(noImage).uri;

export const includeLogger = false;

