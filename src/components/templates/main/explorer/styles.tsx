import { StyleSheet } from "react-native";
import {
  FONT_FAMILY_LIGHT,
  FONT_SIZE_14,
  FONT_WEIGHT_LIGHT,
} from "@constants/typographies";

export default StyleSheet.create({
  container: {},
  content: {
    paddingHorizontal: 24,
    flex: 1,
  },
  search: {
    marginTop: 25,
    marginHorizontal: 24,
    marginBottom: 16,
    borderRadius: 8,
    paddingVertical: 13,
    paddingHorizontal: 16,
    fontSize: 14,
  },
  button: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0,
    paddingVertical: 16,
    marginBottom: 24,
  },
  button_text: {
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_LIGHT,
    fontWeight: FONT_WEIGHT_LIGHT,
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 24,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 24,
  },
});
