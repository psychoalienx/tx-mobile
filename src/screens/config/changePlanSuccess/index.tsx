import React from "react";
import Template from "@templates/config/changePlanSuccess";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import i18n from "@hooks/useLocalize";

const ChangePlanSuccessScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const [sending, setSending] = React.useState<boolean>(false);

  useFocusEffect(
    React.useCallback(() => {
    }, [])
  );

  const onPress = () => {};

  return (
    <Template
      goTo={goTo}
      loading={sending}
      onPress={onPress}
    />
  );
};

export default ChangePlanSuccessScreen;
