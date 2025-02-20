import React from "react";
import Template from "@templates/config/cancelSuscription";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const CancelSuscriptionScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [loading, setLoading] = React.useState(false);
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      password: "",
    } as any,
  });

  useFocusEffect(
    React.useCallback(() => {
      return () => {};
    }, [])
  );

  const onSubmit = () => {};

  return (
    <Template
      loading={loading}
      onSubmit={handleSubmit(onSubmit)}
      control={control}
      goTo={goTo}
    />
  );
};

export default CancelSuscriptionScreen;
