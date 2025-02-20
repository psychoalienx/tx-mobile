import {
  FONT_FAMILY_LIGHT,
  FONT_FAMILY_SEMIBOLD,
  FONT_SIZE_14,
} from "@constants/typographies";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {},
  date: {
    paddingHorizontal: 32,
    paddingTop: 25,
  },
  title: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  box: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  info: {
    paddingTop: 25,
  },
  button: {
    paddingVertical: 24,
    borderWidth: 0,
    borderTopWidth: 1,
    borderRadius: 0,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button_text: {
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_LIGHT,
    fontWeight: "100",
    textAlign: "left",
  },
  mini_button_container: {
    borderTopWidth: 1,
    paddingVertical: 32,
    alignItems: "center",
  },
  mini_button: {
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "transparent",
  },
  mini_button_text: {
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_SEMIBOLD,
  },
  not_border: {
    borderTopWidth: 0,
    paddingHorizontal: 24,
    marginBottom: 46,
  },
  separator: {
    height: 16,
  },
  row: {
    flexDirection: "row",
  },
});
