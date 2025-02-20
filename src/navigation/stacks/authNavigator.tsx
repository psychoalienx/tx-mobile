import { createStackNavigator } from "@react-navigation/stack";
import ForgotScreen from "@screens/auth/forgot";
import ForgotChangeScreen from "@screens/auth/forgotChange";
import ForgotCodeScreen from "@screens/auth/forgotCode";
import ForgotEmailScreen from "@screens/auth/forgotEmail";
import ForgotPhoneScreen from "@screens/auth/forgotPhone";
import LoginScreen from "@screens/auth/login";
import RegisterScreen from "@screens/auth/register";
import SubscriptionScreen from "@screens/auth/subscription";
import WelcomeScreen from "@screens/auth/welcome";

const RootStack = createStackNavigator();
const AuthMobileNavigator = ({ initialRouteName = 'welcome' }: { initialRouteName?: string }) => (
  <RootStack.Navigator
    initialRouteName={initialRouteName}
    screenOptions={{
      headerShown: false,
    }}
  >
    <RootStack.Screen name="welcome" component={WelcomeScreen} />
    <RootStack.Screen name="login" component={LoginScreen} />
    <RootStack.Screen name="forgot" component={ForgotScreen} />
    <RootStack.Screen name="forgotEmail" component={ForgotEmailScreen} />
    <RootStack.Screen name="forgotPhone" component={ForgotPhoneScreen} />
    <RootStack.Screen name="forgotCode" component={ForgotCodeScreen} />
    <RootStack.Screen name="forgotChange" component={ForgotChangeScreen} />
    <RootStack.Screen name="register" component={RegisterScreen} />
    <RootStack.Screen name="subscription" component={SubscriptionScreen} />
  </RootStack.Navigator>
);
export default AuthMobileNavigator;
