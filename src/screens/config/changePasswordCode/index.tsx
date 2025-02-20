import React, { useEffect } from "react";
import Template from "@templates/config/changePasswordCode";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import { ErrorOption, useForm, useWatch } from "react-hook-form";
import { DataShareService } from "@services/data-share.service";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { ApiService } from "@services/api/core/api.service";
import { firstValueFrom } from "rxjs";

const ChangePasswordCodeScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [success, setSuccess] = React.useState(false);
  const [sending, setSending] = React.useState<boolean>(false);
  const [request, setRequest] = React.useState<any>();
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const { control, handleSubmit, getValues, setValue, setError } = useForm({
    defaultValues: {
      code: "",
    } as any,
  });

  const watch = useWatch({
    control,
    name: ["code"],
  });

  useEffect(() => {
    const { data } = DataShareService.getData('password_reset_request');
    if (data?.temporal_token) {
      setRequest(data);
    } else {
      goTo('back');
    }
    return () => { };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const { code } = getValues();
      setSuccess(code.length === 6);
    }, [watch])
  );
  const onSubmit = (form) => {
    setSending(true);
    firstValueFrom(ApiService.user.verifyPasswordResetVerificationCode({
      temporal_token: request.temporal_token,
      channel: request.channel,
      code: form.code,
    }))
      .then((result) => {
        DataShareService.setData('password_reset_token', { data: result });
        goTo("changePassword");
      })
      .catch((error) => {
        console.log(error);
        const formError: ErrorOption = { message: error };
        setError('code', formError);
      })
      .finally(() => setSending(false));
  };
  const onSendCode = () => {
    goTo('back');
  };


  return (
    <Template
      success={success}
      sending={sending}
      onSubmit={handleSubmit(onSubmit)}
      onSendCode={onSendCode}
      control={control}
      goTo={goTo}
    />
  );
};

export default ChangePasswordCodeScreen;