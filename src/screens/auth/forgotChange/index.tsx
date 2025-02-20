import * as React from "react";
import { useForm } from "react-hook-form";
import { useFocusEffect } from "@react-navigation/native";
import Template from "@templates/auth/forgotChange";

import useGoTo from "@hooks/useGoTo";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { ApiService } from "@services/api/core/api.service";
import { DataShareService } from "@services/data-share.service";
import { firstValueFrom } from "rxjs";

const ForgotChangeScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      password: "",
      confirm_password: "",
    } as any,
  });

  const [sending, setSending] = React.useState<boolean>(false);

  useFocusEffect(
    React.useCallback(() => {
      const { data } = DataShareService.getData("password_token", true);
      if (!(data?.token || false)) {
        goTo("login");
      }
      return () => {};
    }, [])
  );

  const onSubmit = (form: any) => {
    if (
      !(form?.password || false) ||
      form?.password !== form?.confirm_password
    ) {
      RsToast.error("messages.passwordMismatchError");
      return;
    }
    const { data } = DataShareService.getData("password_token", true);
    setSending(true);
    firstValueFrom(
      ApiService.user.resetPassword({
        token: data.token,
        password: form.password,
      })
    )
      .then((result) => {
        if (result) {
          DataShareService.getData("password_token");
          RsToast.success("messages.passwordResetSuccess");
          goTo("login");
        }
      })
      .catch((error) => {
        RsToast.error("messages.passwordResetError");
      })
      .finally(() => setSending(false));
  };

  return (
    <Template
      sending={sending}
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      goTo={goTo}
    />
  );
};

export default ForgotChangeScreen;
