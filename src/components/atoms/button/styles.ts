import { StyleSheet } from "react-native";
import { FONT_FAMILY_MEDIUM, FONT_SIZE_18, FONT_WEIGHT_BOLD } from "@constants/typographies";

export default StyleSheet.create({
  container: {},
  button: {
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 8,
  },
  text: {
    textAlign: "center",
    fontSize: FONT_SIZE_18,
    fontFamily: FONT_FAMILY_MEDIUM,
    fontWeight: FONT_WEIGHT_BOLD
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    minWidth: 30,
    display: "flex",
    alignItems: "center",
  },
  textContainer: {
    paddingHorizontal: 5,
    alignItems: "center",
  },
});
