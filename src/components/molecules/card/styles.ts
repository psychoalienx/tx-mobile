import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 24,
  },
  card: {
    flex: 1,
    width: "100%",
  },
  title: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  body: {
    flex: 1,
    width: "100%",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: "space-between",
  },
});
