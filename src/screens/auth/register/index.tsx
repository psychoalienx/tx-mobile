import * as React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useFocusEffect } from "@react-navigation/native";
import Template from "@templates/auth/register";

import useGoTo from "@hooks/useGoTo";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { ApiService } from "@services/api/core/api.service";
import { firstValueFrom } from "rxjs";

const RegisterScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      name: "",
      user: "",
      email: "",
      phone_number: "",
      password: "",
    } as any,
  });

  const [signingUp, setSigningUp] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      return () => {};
    }, [])
  );

  const watch = useWatch({
    control,
    name: ["email"],
  });

  useFocusEffect(
    React.useCallback(() => {
      const { email } = getValues();
      if (email.indexOf(" ") > -1) {
        setValue("email", email.replace(" ", ""));
      }
    }, [watch])
  );

  const onSubmit = (form: any) => {
    setSigningUp(true);
    firstValueFrom(
      ApiService.user.signup({
        email: form.email,
        name: form.name,
        password: form.password,
        phone: form.phone_number,
        username: form.user,
      })
    )
      .then(() => {
        // goTo("referredUser");
        setValue("name", "");
        setValue("user", "");
        setValue("email", "");
        setValue("phone_number", "");
        setValue("password", "");
      })
      .catch((error) => {
        if (error === "INVALID_INPUT") {
          RsToast.error("messages.invalidInputError");
        } else if (error === "INVALID_PASSWORD") {
          RsToast.error("messages.invalidPasswordError");
        } else if (error === "INVALID_EMAIL") {
          RsToast.error("messages.invalidEmailError");
        } else if (error === "UNAVAILABLE_EMAIL") {
          RsToast.error("messages.unavailableEmail");
        } else if (error === "UNAVAILABLE_USERNAME") {
          RsToast.error("messages.unavailableUsername");
        } else {
          RsToast.error("messages.systemError");
        }
      })
      .finally(() => setSigningUp(false));
  };

  return (
    <Template
      sending={signingUp}
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      goTo={goTo}
    />
  );
};

export default RegisterScreen;
