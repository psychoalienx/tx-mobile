import { Dimensions, StyleSheet } from "react-native";
import { FONT_SIZE_14, FONT_WEIGHT_BOLD } from "@constants/typographies";

export default StyleSheet.create({
  container: {
    position: "relative",
    maxHeight: Dimensions.get("window").height * 0.8,
    height: "95%",
    justifyContent: "flex-end",
  },
  preview_desc: {
    marginTop: 121,
    marginHorizontal: 24,
    justifyContent: "flex-end",
  },
  title: {
    width: "100%",
    marginBottom: 8,
  },
  tabs: {
    marginBottom: 16,
  },
  buttons: {
    flexDirection: "row",
    maxWidth: 342,
    width: "100%",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  button_text: {
    fontSize: FONT_SIZE_14,
    fontWeight: FONT_WEIGHT_BOLD,
  },
  button_first: {
    marginRight: 24,
  },
  overlay_bottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 247,
  },
  pagination_container: {
    marginTop: 16,
    marginBottom: 16,
    paddingVertical: 0,
    paddingHorizontal: 20,
    margin: 0,
    maxWidth: "100%",
  },
  pagination_item: {
    flex: 1,
    height: 2,
    marginHorizontal: 4,
  },
});
