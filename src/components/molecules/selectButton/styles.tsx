import {
  FONT_WEIGHT_BOLD,
  FONT_FAMILY_MEDIUM,
  FONT_SIZE_14,
} from "@constants/typographies";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    borderWidth: 0,
    paddingVertical: 0,
  },
  edit: {
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_MEDIUM,
    fontWeight: FONT_WEIGHT_BOLD,
  },
  container: {},
  input: {},
  separator: {},
  title: {
    marginBottom: 16,
    paddingHorizontal: 24,
    width: "100%",
  },
  desc: {
    marginBottom: 40,
    paddingHorizontal: 24,
    width: "100%",
  },
  options: {
    width: "100%",
    flex: 1,
    marginBottom: 72,
  },
  option: {
    minWidth: "100%",
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: "transparent",
  },
  option_text: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scroll: {
    flex: 1,
    zIndex: 0,
  },
  scroll_content: {
    flexGrow: 1,
    zIndex: 0,
  },
});
