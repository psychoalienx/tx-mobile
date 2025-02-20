import { FONT_FAMILY_MEDIUM, FONT_SIZE_14 } from "@constants/typographies";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header_footer: {
    height: 10,
  },
  separator: {
    height: 8,
  },
  card: {
    borderRadius: 16,
    padding: 24,
    alignItems: "flex-start",
    borderWidth: 0,
  },
  card_text: {
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
});
