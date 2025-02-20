import * as React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useFocusEffect } from "@react-navigation/native";
import i18n from "@hooks/useLocalize";
import Template from "@templates/auth/paymentCard";

import useGoTo from "@hooks/useGoTo";

const PaymentCardScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const [plan, setPlan] = React.useState(undefined);
  const [reference, setReference] = React.useState(undefined);
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      number: "",
      name: "",
      date: "",
      cvv: "",
      code: "",
    } as any,
  });
  const watch = useWatch({
    control,
    name: ["code"],
  });

  useFocusEffect(
    React.useCallback(() => {
        setPlan({
          id: 1,
          name: i18n.t("simple"),
          price: "$3,99",
          resolution: "480p",
          quality: i18n.t("good"),
        });
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      onChangeCode();
    }, [watch])
  );

  const onChangeCode = () => {
    const { code } = getValues();
    setReference({
      amount: "-$2,00",
    });
  };

  const onChangePlan = () => {
    goTo("plans");
  };

  const onSubmit = (form: any) => {
    goTo("finalMessage");
  };

  return (
    <Template
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      goTo={goTo}
      plan={plan}
      onChangePlan={onChangePlan}
      reference={reference}
    />
  );
};

export default PaymentCardScreen;
