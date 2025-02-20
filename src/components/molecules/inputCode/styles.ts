import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "relative",
  },
  input: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    zIndex: 1,
  },
  numbers: {
    zIndex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    borderWidth: 2,
    borderRadius: 8,
    height: 52,
    width: 52,
    maxWidth: Dimensions.get("window").width * 0.15,
    maxHeight: Dimensions.get("window").width * 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    width: 6,
  },
  title: {
    marginBottom: 24,
  },
  message: {
    marginTop: 32,
    minHeight: 36,
  },
  button: {
    maxWidth: 200,
    width: "100%",
  },
  resend: {
    marginTop: 24,
    alignItems: "center",
  },
});
