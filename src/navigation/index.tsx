import { linking } from "@constants/linking";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useColorScheme from "@hooks/useColorScheme";
import MainNavigator from "./stacks/mainNavigator";
import { IAPIUserInformationDef } from "@interfaces/api_interfaces/user";
import { DataShareService } from "@services/data-share.service";
import React from "react";
import AuthMobileNavigator from "./stacks/authNavigator";
import BuySubscriptionNavigator from "./stacks/buySubscriptionNavigator";

const RootStack = createStackNavigator();
export default function App() {
  const colorScheme = useColorScheme();

  const [isLoggedIn, isLoggedInStateChange] = React.useState<boolean>(false);
  const [hasSubscription, setHasSubscription] = React.useState<boolean>(false);

  React.useEffect(() => {
    const subscription = DataShareService.subjects.get("user_info").subscribe({
      next: (userInfo: IAPIUserInformationDef) => {
        isLoggedInStateChange(userInfo?.user?.id > 0);
        setHasSubscription(userInfo?.client_account?.profile?.plan);
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      linking={linking}
    >
      {isLoggedIn ? (
        hasSubscription ? (
          MainNavigator("home")
        ) : (
          // <BuySubscriptionNavigator />
          MainNavigator("home")
        )
      ) : (
        <AuthMobileNavigator />
      )}
    </NavigationContainer>
  );
}
