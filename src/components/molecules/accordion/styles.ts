import { StyleSheet } from "react-native";

export default StyleSheet.create({
  hidden: {
    height: 0,
  },
  list: {
    overflow: "hidden",
  },
  button: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  button_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button_text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button_icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
