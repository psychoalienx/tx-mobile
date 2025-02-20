import React from "react";
import Template from "@templates/config/changePlanForm";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import { useForm, useWatch } from "react-hook-form";
import i18n from "@hooks/useLocalize";

const ChangePlanFormScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const [plan, setPlan] = React.useState(undefined);
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      number: "",
      name: "",
      date: "",
      cvv: "",
    } as any,
  });

  useFocusEffect(
    React.useCallback(() => {
        setPlan({
          id: 1,
          name: i18n.t("simple"),
          price: "$3,99",
        });
    }, [])
  );

  const onChangePlan = () => {
    goTo("changePlan");
  };

  const onSubmit = (form: any) => {
    goTo("changePlanSuccess");
  };

  return (
    <Template
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      goTo={goTo}
      plan={plan}
      onChangePlan={onChangePlan}
    />
  );
};


export default ChangePlanFormScreen;
