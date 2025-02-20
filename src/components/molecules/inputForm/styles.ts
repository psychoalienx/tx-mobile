import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "relative",
  },
  row: {
    position: "relative",
  },
  left: {
    position: "absolute",
  },
  right: {
    position: "absolute",
    right: 20,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  error: {
    marginTop: 2,
    marginLeft: 2,
  },
  icon: {
    marginLeft: 8,
  },
});
