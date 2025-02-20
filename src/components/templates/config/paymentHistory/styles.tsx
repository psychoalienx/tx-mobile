import { StyleSheet } from "react-native";
import {FONT_SIZE_14, FONT_FAMILY_MEDIUM, FONT_WEIGHT_BOLD} from "@constants/typographies";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 33,
    paddingHorizontal: 0,
  },
  section: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  button: {
    borderWidth: 0,
    paddingVertical: 0,
  },
  edit: {
    fontSize: FONT_SIZE_14,
    fontFamily: FONT_FAMILY_MEDIUM,
    fontWeight: FONT_WEIGHT_BOLD
  },
  separator_desc: {
    height: 17,
  },
  row: {    
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list: {
    flex: 1,
  },
  separator: {
    height:0,
  },
  header: {
    height: 8,
  },
  footer: {
    height: 50,
  },
});
