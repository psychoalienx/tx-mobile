import React from "react";
import Template from "@templates/config/useReferCode";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import { useForm, useWatch } from "react-hook-form";

const UseReferCodeScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);
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
      loading={loading}
      onPress={handleSubmit(onSubmit)}
      control={control}
      isValid={isValid}
      goTo={goTo}
    />
  );
};

export default UseReferCodeScreen;