import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {},
  splash: {
    position: "relative",
    minHeight: 300,
    maxHeight: 400,
    width: "100%",
    justifyContent: "flex-end",
  },
  overlay_bottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 168,
  },
  title: {
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  details: {
    paddingHorizontal: 24,
  },
  tabs: {
    marginBottom: 16,
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 18,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    minWidth: Dimensions.get("window").width * 0.5 - 34,
  },
  info: {
    paddingVertical: 16,
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  info__date: {
    width: "60%",
  },
  info__duration: {
    width: "40%",
  },
  synopsis: {
    paddingVertical: 24,
    marginBottom: 16,
  },
  synopsis_title: {
    marginBottom: 8,
  },
});
