import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_10,
} from "@constants/typographies";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 0,
    height: 24,
    flex: 0,
    borderRadius: 16,
    borderWidth: 0,
    justifyContent: "center",
  },
  inactive: {
    backgroundColor: "transparent",
  },
  button_text: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_10,
  },
  inactive_text: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_10,
  },
});
