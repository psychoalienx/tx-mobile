import React, { useEffect } from "react";
import Template from "@templates/config/changePassword";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { DataShareService } from "@services/data-share.service";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { ApiService } from "@services/api/core/api.service";
import { firstValueFrom } from "rxjs";

const ChangePasswordScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const [sending, setSending] = React.useState<boolean>(false);
  const [apiToken, setApiToken] = React.useState('');

  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      password: "",
      confirm_password: "",
    } as any,
  });

  useEffect(() => {
    const { data } = DataShareService.getData('password_reset_token');
    if (data?.token) {
      setApiToken(data.token);
    } else {
      goTo('back');
    }
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      return () => { };
    }, [])
  );

  const onSubmit = (form: any) => {
    if (!(form.password || false) || !(form.confirm_password || false)) {
      RsToast.error('Por favor complete todos los campos');
    } else if (form.password !== form.confirm_password) {
      RsToast.error('Las contraseñas no coinciden');
    } else {
      setSending(true);
      firstValueFrom(ApiService.user.resetPassword({
        password: form.password,
        token: apiToken
      }))
        .then((result) => {
          setValue('password', '');
          setValue('confirm_password', '');
          RsToast.success('Contraseña cambiada exitósamente');
          goTo('account');
        })
        .catch((error) => {
          console.log(error);
          RsToast.error(error);
        })
        .finally(() => setSending(false));
    }
  };

  const onCancel = () => {
    goTo('back');
  };

  return (
    <Template
      goTo={goTo}
      control={control}
      loading={sending}
      onCancel={onCancel}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default ChangePasswordScreen;
