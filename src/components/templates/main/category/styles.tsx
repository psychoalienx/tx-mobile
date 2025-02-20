import { StyleSheet } from "react-native";
import { FONT_SIZE_14, FONT_WEIGHT_BOLD } from "@constants/typographies";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 25,
  },
  content: {
    flex: 1,
    width: "100%",
  },
  category: {
    marginLeft: 32,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%"
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 0
  },
  button_text: {
    fontSize: FONT_SIZE_14,
    fontWeight: FONT_WEIGHT_BOLD,
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 24,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 24,
  },
});
