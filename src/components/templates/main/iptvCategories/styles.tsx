import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 15,
    marginHorizontal: 24,
  },
  content: {
    flex: 1,
    width: "100%",
    position: "relative",
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderRadius: 16,
  },
  button_text: {
    textAlign: "left",
  },
  header_footer: {
    height: 10,
  },
  separator: {
    height: 8,
  },
});
