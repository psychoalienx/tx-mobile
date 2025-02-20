import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  content: {
    flex: 1,
    position: "relative",
  },
  scroll: {
    flex: 1,
    zIndex: 0,
  },
  background: {
    width: Dimensions.get("window").width,
    flex: 1,
    resizeMode: "cover",
  },
  scroll_content: {
    flexGrow: 1,
    zIndex: 0,
  },
  key: {
    flex: 1,
    zIndex: 0,
    paddingHorizontal: 24,
  },
  main: {
    flex: 1,
    position: "relative",
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
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
    top: Dimensions.get("window").height * 0.6,
    height: Dimensions.get("window").height * 0.5, 
    resizeMode: "cover",
  },
  button: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    paddingVertical: 0,
  },
  buttonIconText : {
    flexDirection: "row",
    alignItems: "center",
  },
  header : {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  backButton: {
    justifyContent: "center",
    marginRight: 13,
  },
  separator: {
    flex: 1,
  },
  title: {},
  subTitle: {
    width: "100%",
    height: 18,
    marginTop: 26,
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  closeButton: {},
});
