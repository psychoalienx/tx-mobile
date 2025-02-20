import { StyleSheet } from "react-native";
import {
  FONT_FAMILY_MEDIUM,
  FONT_SIZE_14,
  FONT_WEIGHT_BOLD,
} from "@constants/typographies";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  box: {
    padding: 24,
  },
  title: {
    paddingBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
  },
  buttons: {
    paddingHorizontal: 24,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    maxWidth: 90,
    borderWidth: 0,
    borderRadius: 4,
  },
  add: {
    marginTop: 26,
    marginBottom: 120,
  },
  edit: {
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_MEDIUM,
    fontWeight: FONT_WEIGHT_BOLD,
  },
  icon: {
    marginRight: 16,
  },
});
