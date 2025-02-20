import React from "react";
import Template from "@templates/config/addSecondaryPaymentMethod";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import i18n from "@hooks/useLocalize";

const AddSecondaryPaymentMethodScreen = ({
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
          name: i18n.t("credit_or_debit_card"),
          icons: ["mastercard", "visa", "americanExpress"],
          route: "addPaymentMethod",
        },
      ]);
    }, [])
  );

  const onSubmit = (method: any) => {
    console.log(method);
    goTo(method.route);
  };

  return (
    <Template
      methods={methods}
      onSubmit={onSubmit}
      goTo={goTo}
      loading={sending}
    />
  );
};

export default AddSecondaryPaymentMethodScreen;
