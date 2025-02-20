import { PixelRatio } from "react-native";
const scaleFont = (size: number): number => size * PixelRatio.getFontScale();

// FONT FAMILY
export const FONT_FAMILY_BOLD = "Poppins-Bold";
export const FONT_FAMILY_ITALIC = "Poppins-Italic";
export const FONT_FAMILY_LIGHT = "Poppins-Light";
export const FONT_FAMILY_MEDIUM = "Poppins-Medium";
export const FONT_FAMILY_REGULAR = "Poppins-Regular";
export const FONT_FAMILY_SEMIBOLD = "Poppins-SemiBold";

// FONT WEIGHT
export const FONT_WEIGHT_LIGHT = "300";
export const FONT_WEIGHT_MEDIUM = "400";
export const FONT_WEIGHT_REGULAR = "400";
export const FONT_WEIGHT_BOLD = "700";

// FONT SIZE
export const FONT_SIZE_72 = scaleFont(72);
export const FONT_SIZE_50 = scaleFont(50);
export const FONT_SIZE_40 = scaleFont(40);
export const FONT_SIZE_32 = scaleFont(32);
export const FONT_SIZE_30 = scaleFont(30);
export const FONT_SIZE_28 = scaleFont(28);
export const FONT_SIZE_26 = scaleFont(26);
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_22 = scaleFont(22);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_15 = scaleFont(15);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_13 = scaleFont(13);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_11 = scaleFont(11);
export const FONT_SIZE_10 = scaleFont(10);
export const FONT_SIZE_9 = scaleFont(9);
export const FONT_SIZE_8 = scaleFont(8);

// LINE HEIGHT
export const LINE_HEIGHT_50 = scaleFont(58);
export const LINE_HEIGHT_30 = scaleFont(34);
export const LINE_HEIGHT_28 = scaleFont(30);
export const LINE_HEIGHT_24 = scaleFont(44);
export const LINE_HEIGHT_22 = scaleFont(41);
export const LINE_HEIGHT_20 = scaleFont(23);
export const LINE_HEIGHT_18 = scaleFont(21);
export const LINE_HEIGHT_16 = scaleFont(26);
export const LINE_HEIGHT_15 = scaleFont(17);
export const LINE_HEIGHT_14 = scaleFont(16);
export const LINE_HEIGHT_11 = scaleFont(12);
export const LINE_HEIGHT_10 = scaleFont(11);
export const LINE_HEIGHT_8 = scaleFont(8);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_MEDIUM = {
  fontWeight: FONT_WEIGHT_MEDIUM,
};

export const FONT_BOLD = {
  fontWeight: FONT_WEIGHT_BOLD,
};
