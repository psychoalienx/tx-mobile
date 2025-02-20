import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
  },
  content: {
    paddingHorizontal: 0,
    width: "100%",
  },
  main: {
    position: "relative",
    justifyContent: "flex-end",
    flex: 1,
  },
  overlay_bottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: Dimensions.get("window").height * 0.7,
  },
  form: {
    paddingHorizontal: 24,
    height: Dimensions.get("window").height * 0.5,
  },
  form_title: {
    marginBottom: 16
  },
  form_desc: {
    marginBottom: 32
  },
});
