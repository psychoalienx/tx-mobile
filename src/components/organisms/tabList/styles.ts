import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {},
  tabs: {
    flexDirection: "row",
    marginBottom: 24,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 24,
  },
  header: {
    height: 0,
  },
  footer: {
    height: 80,
  },
  separator: {
    height: 16,
  },
  preview_list: {
    paddingHorizontal: 24,
  },
  preview_grid: {
    borderWidth: 0,
    paddingVertical: 0,
    width: Dimensions.get("window").width * 0.3 - 8,
    height: Dimensions.get("window").width * 0.33 * 1.5,
    marginBottom: 8,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 24,
    marginBottom: -8,
  },
});
