import { FONT_SIZE_14 } from "@constants/typographies";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    position: "relative",
  },
  content: {
    width: "100%",
    maxWidth: 420,
  },
  logo: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    backgroundColor: "transparent",
  },
  form: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 54,
  },
  buttonSuscribe: {
    paddingVertical: 0,
    borderWidth: 0,
    marginLeft: 6,
  },
  buttonSuscribe_text: {
    fontSize: FONT_SIZE_14,
    fontWeight: "bold",
  },
  forgot: {
    marginTop: 24,
  },
});
