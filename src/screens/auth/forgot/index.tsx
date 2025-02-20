import * as React from "react";
import { useFocusEffect } from "@react-navigation/native";
import Template from "@templates/auth/forgot";

import useGoTo from "@hooks/useGoTo";

const ForgotScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);

  useFocusEffect(React.useCallback(() => {}, []));

  return <Template goTo={goTo} />;
};

export default ForgotScreen;
