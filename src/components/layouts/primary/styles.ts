import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  scroll: {
    flex: 1,
    zIndex: 0,
  },
  background: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
    borderRadius: Dimensions.get("window").width,
    top: 0,
    left: 0,
    right: 0,
  },
  content: {
    flex: 1,
    position: "relative",
  },
  scroll_content: {
    flexGrow: 1,
    zIndex: 0,
  },
  radialTop: {
    position: "absolute",
    top: 0,
    width: "100%",
    left: 0,
    right: 0,
    resizeMode: "cover",
  },
  radialBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
  },
  radialBottom__image: {
    resizeMode: "cover",
    width: Dimensions.get("window").width,
    maxHeight: 264,
  },
  key: {
    flex: 1,
    zIndex: 0,
  },
  main: {
    flex: 1,
  },
  button: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    paddingVertical: 0,
  },
  header: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  backButton: {
    justifyContent: "center",
    marginRight: 13,
  },
  title: {},
});
