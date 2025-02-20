import * as React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useFocusEffect } from "@react-navigation/native";
import i18n from "@hooks/useLocalize";
import Template from "@templates/config/addPaymentMethod";

import useGoTo from "@hooks/useGoTo";

const AddPaymentMethodScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      number: "",
      name: "",
      date: "",
      cvv: "",
    } as any,
  });

  const onSubmit = (form: any) => {

  };

  return (
    <Template
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      goTo={goTo}
    />
  );
};

export default AddPaymentMethodScreen;
