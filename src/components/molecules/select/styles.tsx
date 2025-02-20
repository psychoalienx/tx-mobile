import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    maxWidth: "50%",
    flex: 1,
  },
  label: {
    flex: 1,
    marginLeft: 16,
  },
  select: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 15,
    backgroundColor: "transparent",
  },
  separator: {},
  options: {
    width: "100%",
    flex: 1,
  },
  option: {
    minWidth: "100%",
    paddingHorizontal: 24,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "transparent",
  },
  scroll: {
    flex: 1,
    zIndex: 0,
  },
  scroll_content: {
    flexGrow: 1,
    zIndex: 0,
  },
});
