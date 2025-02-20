import * as React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useFocusEffect } from "@react-navigation/native";
import Template from "@templates/auth/forgotEmail";

import useGoTo from "@hooks/useGoTo";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { ApiService } from "@services/api/core/api.service";
import { DataShareService } from "@services/data-share.service";
import { firstValueFrom } from "rxjs";

const ForgotEmailScreen = ({
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
    } as any,
  });

  const [sending, setSending] = React.useState<boolean>(false);

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
    if (!(form?.email || false)) {
      RsToast.error("messages.requiredInputError");
      return;
    }
    setSending(true);
    firstValueFrom(
      ApiService.user.sendPasswordResetVerificationCode({
        channel: "email",
        channel_value: form.email,
      })
    )
      .then((result) => {
        DataShareService.setData("temporal_token", {
          data: { ...result, ...{ channel: "email" } },
        });
        goTo("forgotCode");
      })
      .catch((error) => {
        if (error === "INVALID_EMAIL") {
          RsToast.error("messages.invalidEmailError");
        } else {
          RsToast.error("messages.systemError");
        }
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

export default ForgotEmailScreen;
