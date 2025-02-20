import * as React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useFocusEffect } from "@react-navigation/native";
import i18n from "@hooks/useLocalize";
import Template from "@templates/auth/paymentCode";

import useGoTo from "@hooks/useGoTo";

const PaymentCodeScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const [success, setSuccess] = React.useState(false);
  const [plan, setPlan] = React.useState(undefined);
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
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
    console.log(code)
  };

  const onChangePlan = () => {
    goTo("plans");
  };

  const onSubmit = (form: any) => {
    goTo("finalMessage");
  };

  return (
    <Template
      success={success}
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      goTo={goTo}
      plan={plan}
      onChangePlan={onChangePlan}
    />
  );
};

export default PaymentCodeScreen;
