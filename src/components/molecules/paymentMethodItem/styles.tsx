import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: "row",
    minWidth: "100%",
  },  
  name : {
    flex: 1,
  },
  icons : {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  icon: {
    marginLeft: 8,
  },
  arrow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 16
  }

});
