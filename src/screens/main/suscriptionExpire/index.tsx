import React from "react";
import Template from "@templates/main/suscriptionExpire";
import useGoTo from "@hooks/useGoTo";

const SuscriptionExpireScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);

  const onPress = () => {
    console.log("item");
  };

  return <Template onPress={onPress} />;
};

export default SuscriptionExpireScreen;
