import React, { useEffect } from "react";
import Template from "@templates/config/changeUserName";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { IAPIUserInformationDef } from "@interfaces/api_interfaces/user";
import { DataShareService } from "@services/data-share.service";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { ApiService } from "@services/api/core/api.service";
import { firstValueFrom } from "rxjs";

const ChangeUserScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const [sending, setSending] = React.useState<boolean>(false);
  const [oldUserName, setOldUserName] = React.useState<string>("example");

  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      username: "",
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
    setOldUserName(apiUserInfo?.user?.username || '');
  }, [apiUserInfo]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {};
    }, [])
  );

  const onSubmit = (form: any) => {
    if (form.username.length < 3) {
      RsToast.error('Formato de nombre de usuario inválido');
      return;
    }
    setSending(true);
    firstValueFrom(ApiService.user.setUserInformation({
      data: {
        username: form.username
      }
    }))
      .then((result) => {
        setValue('username', '');
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
      oldUserName={oldUserName}
    />
  );
};

export default ChangeUserScreen;
