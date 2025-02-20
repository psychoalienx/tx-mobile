import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FinalMessageScreen from "@screens/auth/finalMessage";
import PaymentCardScreen from "@screens/auth/paymentCard";
import PaymentCodeScreen from "@screens/auth/paymentCode";
import PaymentGiftCardScreen from "@screens/auth/paymentGiftCard";
import PlansScreen from "@screens/auth/plans";
import ReferredUserScreen from "@screens/auth/referredUser";
import SelectPaymentScreen from "@screens/auth/selectPayment";

const RootStack = createStackNavigator();
const BuySubscriptionNavigator = ({ initialRouteName = 'referredUser' }: { initialRouteName?: string }) => {
  return (
    <RootStack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="referredUser" component={ReferredUserScreen} />
      <RootStack.Screen name="plans" component={PlansScreen} />
      <RootStack.Screen
        name="selectPayment"
        component={SelectPaymentScreen}
      />
      <RootStack.Screen name="paymentCard" component={PaymentCardScreen} />
      <RootStack.Screen
        name="paymentGiftCard"
        component={PaymentGiftCardScreen}
      />
      <RootStack.Screen name="paymentCode" component={PaymentCodeScreen} />
      <RootStack.Screen name="finalMessage" component={FinalMessageScreen} />
    </RootStack.Navigator>
  )
};
export default BuySubscriptionNavigator;
