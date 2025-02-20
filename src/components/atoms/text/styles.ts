import { StyleSheet } from "react-native";
import {
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_24,
  FONT_SIZE_11,
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_9,
  FONT_SIZE_20,
  FONT_SIZE_26,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_LIGHT,
  FONT_FAMILY_MEDIUM,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_ITALIC,
  FONT_SIZE_50,
  FONT_SIZE_10,
} from "@constants/typographies";

export default StyleSheet.create({
  default: {},
  weight_light: {
    fontFamily: FONT_FAMILY_LIGHT,
  },
  weight_regular: {
    fontFamily: FONT_FAMILY_REGULAR,
  },
  weight_medium: {
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  weight_bold: {
    fontFamily: FONT_FAMILY_BOLD,
  },
  weight_italic: {
    fontFamily: FONT_FAMILY_ITALIC,
  },
  size_h1: {
    fontSize: FONT_SIZE_50,
  },
  size_h2: {
    fontSize: FONT_SIZE_26,
  },
  size_h3: {
    fontSize: FONT_SIZE_24,
  },
  size_h4: {
    fontSize: FONT_SIZE_20,
  },
  size_h5: {
    fontSize: FONT_SIZE_18,
  },
  size_h6: {
    fontSize: FONT_SIZE_16,
  },
  size_h7: {
    fontSize: FONT_SIZE_14,
  },
  size_p: {
    fontSize: FONT_SIZE_12,
  },
  size_small: {
    fontSize: FONT_SIZE_11,
  },
  size_p_small: {
    fontSize: FONT_SIZE_10,
  },
  size_small_circle: {
    fontSize: FONT_SIZE_9,
  },
  align_auto: {
    textAlign: "auto",
  },
  align_center: {
    textAlign: "center",
  },
  align_left: {
    textAlign: "left",
  },
  align_right: {
    textAlign: "right",
  },
  align_justify: {
    textAlign: "justify",
  },
  transform_capi: {
    textTransform: "capitalize",
  },
  transform_upper: {
    textTransform: "uppercase",
  },
  transform_none: {
    textTransform: "none",
  },
  transform_lower: {
    textTransform: "lowercase",
  },
  transform_underline: {
    textDecorationLine: "underline",
  },
});
