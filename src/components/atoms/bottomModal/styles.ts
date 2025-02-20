import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "relative",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  gesture: {
    flex: 1,
  },
  gesture_element: {
    paddingBottom: 24,
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: Dimensions.get("window").height * 0.5,
    minHeight: 430,
    width: "100%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: "center",
  },
  bottom_title: {
    width: "100%",
    paddingBottom: 24,
    paddingLeft: 24,
  },
  bottom_divider: {
    opacity: 0.3,
    borderRadius: 30,
    width: 77,
    height: 6,
    marginTop: 16,
  },
});
