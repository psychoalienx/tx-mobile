import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {},
  main: {
    flexDirection: "row",
    minWidth: "100%",
  },
  desc: {
    flex: 1,
    marginTop: 8,
    justifyContent: "center",
  },
  preview: {
    width: 90,
    height: 55,
    borderRadius: 4,
  },
  image: {
    position: "relative",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    flex: 1,
    marginLeft: 8,
    justifyContent: "center",
  },
});
