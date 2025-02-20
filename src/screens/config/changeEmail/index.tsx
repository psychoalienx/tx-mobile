import React, { useEffect } from "react";
import Template from "@templates/config/changeEmail";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { IAPIUserInformationDef } from "@interfaces/api_interfaces/user";
import { DataShareService } from "@services/data-share.service";
import { ApiService } from "@services/api/core/api.service";
import { firstValueFrom } from "rxjs";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";

const ChangeEmailScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const [sending, setSending] = React.useState<boolean>(false);
  const [oldEmail, setOldEmail] = React.useState<string>("example@gmail.com");

  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      email: "",
    } as any,
  });

  const [apiUserInfo, setApiUserInfo] = React.useState<IAPIUserInformationDef>();

  useEffect(() => {
    const subscription = DataShareService.subjects.get('user_info').subscribe({
      next: (userInfo: IAPIUserInformationDef) => setApiUserInfo(userInfo)
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setOldEmail(apiUserInfo?.user?.email || '');
  }, [apiUserInfo]);

  useFocusEffect(
    React.useCallback(() => {
      return () => { };
    }, [])
  );

  const onSubmit = (form: any) => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
      RsToast.error('Formato de correo electrónico inválido');
      return;
    }
    setSending(true);
    firstValueFrom(ApiService.user.setUserInformation({
      data: {
        email: form.email
      }
    }))
      .then((result) => {
        setValue('email', '');
        RsToast.success('Cambios guardados correctamente');
      })
      .catch((error) => {
        RsToast.error(error);
      })
      .finally(() => setSending(false));
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
      oldEmail={oldEmail}
    />
  );
};

export default ChangeEmailScreen;
