import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 16,
    borderWidth: 0
  },
  header: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  body: {
    width: "100%",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});
