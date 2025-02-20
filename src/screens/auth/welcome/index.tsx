import * as React from "react";
import { useFocusEffect } from "@react-navigation/native";
import Template from "@templates/auth/welcome";

import useGoTo from "@hooks/useGoTo";

const WelcomeScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);

  useFocusEffect(
    React.useCallback(() => {
      return () => {};
    }, [])
  );

  return <Template goTo={goTo} />;
};

export default WelcomeScreen;
