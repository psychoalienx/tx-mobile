import { StyleSheet } from "react-native";
import { FONT_SIZE_18 } from "@constants/typographies";

export default StyleSheet.create({
  container: {
    alignItems: "center",
  },
  content: {
    width: "100%",
  },
  icon: {
    paddingTop: 49,
    paddingBottom: 55,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  desc: {
    marginTop: 24,
  },
  body: { },
  button: {
    marginTop: 40,
    width: "100%",
    maxWidth: 342
  },
  button_text: {
    fontWeight: "bold",
    fontSize: FONT_SIZE_18
  }
});
