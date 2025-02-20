import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  box: {
    padding: 24,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  button_content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    paddingRight: 16,
  },
  separator: {
    height: 9,
  },
  text: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
