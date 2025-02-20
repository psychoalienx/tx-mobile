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
    width: "100%",
  },
  box: {
    padding: 24,
    width: "100%",
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 0,
    borderRadius: 4,
  },
  edit: {
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_MEDIUM,
    fontWeight: FONT_WEIGHT_BOLD,
  },
  icon: {
    marginRight: 16,
  },
  separator: {
    height: 8,
  },
});
