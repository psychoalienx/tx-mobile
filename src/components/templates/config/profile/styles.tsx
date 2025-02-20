import { StyleSheet } from "react-native";
import {
  FONT_SIZE_14,
  FONT_WEIGHT_LIGHT,
  FONT_FAMILY_LIGHT,
} from "@constants/typographies";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 49,
    paddingHorizontal: 30,
  },
  title: {
    paddingBottom: 43,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    marginLeft: 19,
  },
  button: {
    borderWidth: 0,
    borderRadius: 0,
    marginLeft: 20,
    marginBottom: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
  },
  button_text: {
    textTransform: "capitalize",
    fontFamily: FONT_FAMILY_LIGHT,
    fontWeight: FONT_WEIGHT_LIGHT,
    fontSize: FONT_SIZE_14,
  },
  button_icon: {
    marginRight: 41,
  },
});
