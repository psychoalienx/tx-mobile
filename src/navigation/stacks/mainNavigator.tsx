import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import BottomBar from "@organisms/bottomBar";

import AccountScreen from "@screens/config/account";
import ConfigurationScreen from "@screens/config/configuration";
import ProfileScreen from "@screens/config/profile";
import ReferralsScreen from "@screens/config/referrals";
import HomeScreen from "@screens/main/home";
import CategoryScreen from "@screens/main/category";
import ExplorerScreen from "@screens/main/explorer";
import FavoritesScreen from "@screens/main/favorites";
import CategoriesScreen from "@screens/main/categories";
import ChangeEmailScreen from "@screens/config/changeEmail";
import ChangePhoneScreen from "@screens/config/changePhone";
import ChangePasswordOptionsScreen from "@screens/config/changePasswordOptions";
import ChangePasswordScreen from "@screens/config/changePassword";
import ChangePasswordCodeScreen from "@screens/config/changePasswordCode";
import PreviewScreen from "@screens/main/preview";
import ChangeUserScreen from "@screens/config/changeUserName";
import ManagePayInfoScreen from "@screens/config/managePayInfo";
import AddSecondaryPaymentMethodScreen from "@screens/config/addSecondaryPaymentMethod";
import AddPaymentMethodScreen from "@screens/config/addPaymentMethod";
import EditPaymentMethodScreen from "@screens/config/editPaymentMethod";
import UseReferCodeScreen from "@screens/config/useReferCode";
import RegisterManualPayScreen from "@screens/config/registerManualPay";
import CancelSuscriptionScreen from "@screens/config/cancelSuscription";
import PaymentHistoryScreen from "@screens/config/paymentHistory";
import ChangePlanScreen from "@screens/config/changePlan";
import ChangePlanFormScreen from "@screens/config/changePlanForm";
import ChangePlanSuccessScreen from "@screens/config/changePlanSuccess";
import PlayerScreen from "@screens/main/player";
import SuscriptionExpireScreen from "@screens/main/suscriptionExpire";
import IptvScreen from "@screens/main/iptv";
import IptvCategoriesScreen from "@screens/main/iptvCategories";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainNavigator = (initialRouteName: string) => (
  <Stack.Navigator
    initialRouteName={"home"}
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "transparent" },
      cardOverlayEnabled: true,
      cardStyleInterpolator: ({ current, next, layouts }) => ({
        cardStyle: {
          transform: [
            {
              translateY: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
              }),
            },
          ],
        },
        overlayStyle: {
          opacity: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.5],
            extrapolate: "clamp",
          }),
        },
      }),
      presentation: "transparentModal",
    }}
  >
    <Stack.Screen name={"home"} component={Tabs(initialRouteName)} />
    <Stack.Screen name={"categories"} component={CategoriesScreen} />
    <Stack.Screen name={"category"} component={CategoryScreen} />
    <Stack.Screen name={"account"} component={AccountScreen} />
    <Stack.Screen name={"configuration"} component={ConfigurationScreen} />
    <Stack.Screen name={"favorites"} component={FavoritesScreen} />
    <Stack.Screen name={"player"} component={PlayerScreen} />
    <Stack.Screen name={"referrals"} component={ReferralsScreen} />
    <Stack.Screen name={"changeEmail"} component={ChangeEmailScreen} />
    <Stack.Screen name={"changePhoneNumber"} component={ChangePhoneScreen} />
    <Stack.Screen
      name={"changePasswordOptions"}
      component={ChangePasswordOptionsScreen}
    />
    <Stack.Screen
      name={"changePasswordCode"}
      component={ChangePasswordCodeScreen}
    />
    <Stack.Screen name={"changePassword"} component={ChangePasswordScreen} />
    <Stack.Screen name={"preview"} component={PreviewScreen} />
    <Stack.Screen name={"changeUsername"} component={ChangeUserScreen} />
    <Stack.Screen name={"managePayInfo"} component={ManagePayInfoScreen} />
    <Stack.Screen
      name={"addSecondaryPaymentMethod"}
      component={AddSecondaryPaymentMethodScreen}
    />
    <Stack.Screen
      name={"addPaymentMethod"}
      component={AddPaymentMethodScreen}
    />
    <Stack.Screen
      name={"editPaymentMethod"}
      component={EditPaymentMethodScreen}
    />
    <Stack.Screen name={"useReferCode"} component={UseReferCodeScreen} />
    <Stack.Screen
      name={"registerManualPay"}
      component={RegisterManualPayScreen}
    />
    <Stack.Screen
      name={"cancelSuscription"}
      component={CancelSuscriptionScreen}
    />
    <Stack.Screen name={"paymentHistory"} component={PaymentHistoryScreen} />
    <Stack.Screen name={"changePlan"} component={ChangePlanScreen} />
    <Stack.Screen name={"changePlanForm"} component={ChangePlanFormScreen} />
    <Stack.Screen
      name={"changePlanSuccess"}
      component={ChangePlanSuccessScreen}
    />
    <Stack.Screen
      name={"suscriptionExpire"}
      component={SuscriptionExpireScreen}
    />
  </Stack.Navigator>
);

const Tabs = (initialRouteName: any) => {
  let initial = initialRouteName;
  if (initialRouteName === "home") initial = "homeTab";
  return (props: any) => (
    <Tab.Navigator
      initialRouteName={initial}
      tabBar={(props: any) => <BottomBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={"homeTab"} component={HomeScreen} />
      <Tab.Screen name={"explorer"} component={ExplorerScreen} />
      <Tab.Screen name={"iptv"} component={IptvScreen} />
      <Tab.Screen name={"iptvCategories"} component={IptvCategoriesScreen} />
      <Tab.Screen name={"profile"} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
