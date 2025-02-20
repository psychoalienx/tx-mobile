import { StyleSheet } from "react-native";

export default StyleSheet.create({
  separator: {
    height: 8,
  },
  content: {
    flexDirection: "row",
  },
  image_container: {
    width: 163,
    height: 94,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  text: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 16,
  },
  button: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  footer: {
    height: 100,
  },
});
