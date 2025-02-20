import React, { useEffect } from "react";
import Template from "@templates/config/changePhone";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { IAPIUserInformationDef } from "@interfaces/api_interfaces/user";
import { DataShareService } from "@services/data-share.service";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { ApiService } from "@services/api/core/api.service";
import { firstValueFrom } from "rxjs";

const ChangePhoneScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const [sending, setSending] = React.useState<boolean>(false);
  const [oldPhone, setOldPhone] = React.useState<string>("");

  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      password: "",
      confirm_password: "",
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
    setOldPhone(apiUserInfo?.user?.phone || '');
  }, [apiUserInfo]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {};
    }, [])
  );

  const onSubmit = (form: any) => {
    if (!/^\d+/.test(form.phone)) {
      RsToast.error('Formato de teléfono inválido.', ' Sólo números.');
      return;
    }
    setSending(true);
    firstValueFrom(ApiService.user.setUserInformation({
      data: {
        phone: form.phone
      }
    }))
      .then((result) => {
        setValue('phone', '');
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
      oldPhone={oldPhone}
    />
  );
};

export default ChangePhoneScreen;
