import * as React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useFocusEffect } from "@react-navigation/native";
import Template from "@templates/auth/referredUser";

import useGoTo from "@hooks/useGoTo";

const ReferredUserScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [benefit, setBenefit] =  React.useState(undefined);
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const { control, handleSubmit, getValues, setValue, formState } = useForm({
    defaultValues: {
      user: "",
    } as any,
  });

  const watch = useWatch({
    control,
    name: ["user"],
  });

  useFocusEffect(
    React.useCallback(() => {
      return () => {}
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      onChangeUser();
    }, [watch])
  );

  const onChangeUser = () => {
    const {user} = getValues();
    if(user !== "") setBenefit("1 Mes");
  };

  const onSkip = () => {
    goTo("plans");
  };

  const onSubmit = (form: any) => {
    goTo("plans");
  };

  return (
    <Template
      benefit={benefit}
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      onSkip={onSkip}
      goTo={goTo}
    />
  );
};

export default ReferredUserScreen;
