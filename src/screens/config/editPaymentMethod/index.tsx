import React from "react";
import Template from "@templates/config/editPaymentMethod";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import i18n from "@hooks/useLocalize";

const EditPaymentMethodScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const [sending, setSending] = React.useState<boolean>(false);
  const [methods, setMethods] = React.useState([]);

  useFocusEffect(
    React.useCallback(() => {
      setMethods([
        {
          id: 1,
          icon: "visa",
          cardNumber: 4521,
          favorite: true,
        },
        {
          id: 2,
          icon: "mastercard",
          cardNumber: 4521
        },
      ]);
    }, [])
  );

  const onPressItem = (item) => {};

  return (
    <Template
      goTo={goTo}
      methods={methods}
      onPressItem={onPressItem}
      loading={sending}
    />
  );
};

export default EditPaymentMethodScreen;
