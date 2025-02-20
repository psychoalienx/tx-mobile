import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  header_footer: {
    height: 0,
    width: 0,
  },
  separator: {
    height: 1,
    width: 1,
  },
  item: {
    borderWidth: 0,
    paddingVertical: 0,
    width: Dimensions.get("window").width * 0.33,
    height: Dimensions.get("window").width * 0.33 * 1.5,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
});
