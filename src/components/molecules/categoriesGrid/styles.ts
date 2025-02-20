import { StyleSheet } from "react-native";

export default StyleSheet.create({
  list: {
    flex: 1,
    alignSelf: "center",
  },
  header_footer: {
    height: 10,
  },
  separator: {
    width: 24,
    height: 24,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  touch: {
    width: 99,
    borderWidth: 0,
    padding: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 99,
    height: 99,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  text: {
    marginTop: 8,
  },
  image: {
    height: 46,
    minWidth: 46,
    resizeMode: "contain",
  },
  focus: {},
});
