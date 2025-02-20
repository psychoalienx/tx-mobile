import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 39,
    paddingBottom: 50,
    paddingHorizontal: 0,
  },
  section: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  share: {},
  share_icon: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    flex: 1,
    borderWidth: 0,
  },
  icon: {
    paddingTop: 14,
    paddingBottom: 8,
  },
  border_v: {
    height: 32,
    borderRightWidth: 1,
  },
  desc: {
    marginTop: 8,
    paddingBottom: 24,
    borderBottomWidth: 1,
  },
  item: {
    paddingVertical: 24,
    borderBottomWidth: 1,
  },
  total: {
    paddingRight: 16,
  },
  name: {
    flex: 1,
  },
  amount: {
    paddingHorizontal: 24,
  },
  copy: {
    paddingHorizontal: 18,
    paddingVertical: 0,
    borderWidth: 0,
    marginRight: -20,
    marginTop: -8,
    height: 40,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    paddingHorizontal: 8,
    paddingVertical: 11,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 16,
  },
});
