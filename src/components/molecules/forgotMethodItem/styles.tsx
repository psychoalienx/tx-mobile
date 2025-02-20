import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingVertical: 29,
    paddingHorizontal: 46,
    borderRadius: 16,
    flexDirection: "row",
    minWidth: "100%",
  },  
  name : {
    flex: 1,
    justifyContent: "center",
  },
  icon : {
    justifyContent: "center",
    marginRight: 23,
  },
  arrow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 16
  }

});
