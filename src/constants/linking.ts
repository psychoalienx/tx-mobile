import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

const prefix = Linking.makeUrl("/");

export const linking: LinkingOptions<any> = {
  prefixes: [prefix],
  config: {
    screens: {
      login: "login",
      home: "home",
    },
  },
};
