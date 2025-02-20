import * as React from "react";
import Template from "@templates/auth/selectPayment";
import { useFocusEffect } from "@react-navigation/native";
import useGoTo from "@hooks/useGoTo";
import i18n from "@hooks/useLocalize";

const SelectPaymentScreen = ({
    navigation,
    route,
  }: {
    navigation: any;
    route: any;
  }) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const [methods, setMethods] = React.useState([]);

  useFocusEffect(
    React.useCallback(() => {
      setMethods([
        {
          id: 1,
          name: i18n.t("credit_or_debit_card"),
          icons: ["mastercard", "visa", "americanExpress"],
          route: "paymentCard"
        },
        {
          id: 2,
          name: i18n.t("gift_card"),
          icons: ["giftCard"],
          route: "paymentGiftCard"
        },
        {
          id: 3,
          name: i18n.t("reload_code"),
          icons: ["ionBarcode"],
          route: "paymentCode"
        },
      ]);
    }, [])
  );

  const onSubmit = (method: any) => {
    console.log(method);
    goTo(method.route);
  };

  return (
    <Template methods={methods} onSubmit={onSubmit} goTo={goTo} />
  );
};

export default SelectPaymentScreen;
