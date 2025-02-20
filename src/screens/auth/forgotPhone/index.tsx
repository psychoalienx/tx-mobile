import * as React from "react";
import { useForm } from "react-hook-form";
import { useFocusEffect } from "@react-navigation/native";
import Template from "@templates/auth/forgotPhone";

import useGoTo from "@hooks/useGoTo";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { ApiService } from "@services/api/core/api.service";
import { DataShareService } from "@services/data-share.service";
import { firstValueFrom } from "rxjs";

const ForgotPhoneScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      phone_number: "",
    } as any,
  });

  const [sending, setSending] = React.useState<boolean>(false);

  useFocusEffect(
    React.useCallback(() => {
      return () => {};
    }, [])
  );

  const onSubmit = (form: any) => {
    if (!(form?.phone_number || false)) {
      RsToast.error("messages.requiredInputError");
      return;
    }
    setSending(true);
    firstValueFrom(
      ApiService.user.sendPasswordResetVerificationCode({
        channel: "sms",
        channel_value: form.phone_number,
      })
    )
      .then((result) => {
        DataShareService.setData("temporal_token", {
          data: { ...result, ...{ channel: "sms" } },
        });
        goTo("forgotCode");
      })
      .catch((error) => {
        if (error === "INVALID_PHONE") {
          RsToast.error("messages.invalidPhoneError");
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

export default ForgotPhoneScreen;
