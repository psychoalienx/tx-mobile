import * as React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useFocusEffect } from "@react-navigation/native";
import Template from "@templates/auth/login";

import useGoTo from "@hooks/useGoTo";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { ApiService } from "@services/api/core/api.service";
import { firstValueFrom } from "rxjs";

const LoginScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      email: "",
      password: "",
    } as any,
  });
  const [loggingIn, setLoggingIn] = React.useState(false);

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

  useFocusEffect(
    React.useCallback(() => {
      return () => {};
    }, [])
  );

  const onSubmit = (form: any) => {
    const data = {
      login_value: form.email,
      password: form.password
    };
    setLoggingIn(true);
    firstValueFrom(ApiService.user.login(data))
      .then(() => {
        setValue("email", "");
        setValue("password", "");
      })
      .catch((error) => {
        if (error === "INVALID_EMAIL_OR_PASSWORD") {
          RsToast.error("messages.invalidEmailOrPasswordError");
        } else if (error === "USER_DISABLED") {
          RsToast.error("messages.userDisabled");
        } else if (error === "ERROR_GENERATING_TOKENS") {
          RsToast.error("messages.errorGeneratingTokens");
        } else {
          RsToast.error("messages.systemError");
        }
      })
      .finally(() => setLoggingIn(false));
  };

  return (
    <Template
      sending={loggingIn}
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      goTo={goTo}
    />
  );
};

export default LoginScreen;
