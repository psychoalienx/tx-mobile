import React from "react";
import Template from "@templates/config/registerManualPay";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import { useForm, useWatch } from "react-hook-form";

const RegisterManualPayScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [success, setSuccess] = React.useState(false);
  const [sending, setSending] = React.useState<boolean>(false);
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
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
      return () => {};
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      const { code } = getValues();
      console.log(code);
    }, [watch])
  );
  const onSubmit = () => {};

  return (
    <Template
      success={success}
      sending={sending}
      onSubmit={handleSubmit(onSubmit)}
      control={control}
      goTo={goTo}
    />
  );
};

export default RegisterManualPayScreen;