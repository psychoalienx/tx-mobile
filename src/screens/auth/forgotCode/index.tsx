import * as React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useFocusEffect } from "@react-navigation/native";
import Template from "@templates/auth/forgotCode";

import useGoTo from "@hooks/useGoTo";
import { DataShareService } from "@services/data-share.service";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { IAPIPasswordResetToken } from "@interfaces/api_interfaces/user";
import { ApiService } from "@services/api/core/api.service";
import { firstValueFrom } from "rxjs";

const ForgotCodeScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const [success, setSuccess] = React.useState(false);
  const [sending, setSending] = React.useState<boolean>(false);
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
      const { data } = DataShareService.getData("temporal_token", true);
      if (!(data?.temporal_token || false)) {
        goTo("login");
      }
      return () => {};
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      onChangeCode();
    }, [watch])
  );

  const onChangeCode = () => {
    const { code } = getValues();
  };

  const onSubmit = (form: any) => {
    if (!(form?.code || false)) {
      return;
    }
    const { data } = DataShareService.getData("temporal_token", true);
    setSending(true);
    firstValueFrom(
      ApiService.user.verifyPasswordResetVerificationCode({
        temporal_token: data.temporal_token,
        channel: data.channel,
        code: form.code,
      })
    )
      .then((result: IAPIPasswordResetToken) => {
        DataShareService.getData("temporal_token");
        DataShareService.setData("password_token", { data: result });
        goTo("forgotChange");
      })
      .catch((error) => {
        if (error === "INVALID_TOKEN") {
          RsToast.error(
            "messages.verifyCodeInvalidTokenError",
            "messages.verifyTokenTryAgain"
          );
          goTo("forgot");
        } else {
          RsToast.error("messages.systemError");
        }
      })
      .finally(() => setSending(false));
  };

  const onSendCode = () => {};

  return (
    <Template
      sending={sending}
      success={success}
      control={control}
      onSendCode={onSendCode}
      onSubmit={handleSubmit(onSubmit)}
      goTo={goTo}
    />
  );
};

export default ForgotCodeScreen;
