import React, { useEffect } from "react";
import Template from "@templates/config/changePasswordOptions";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import { IAPIUserInformationDef } from "@interfaces/api_interfaces/user";
import { DataShareService } from "@services/data-share.service";
import { ApiService } from "@services/api/core/api.service";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { firstValueFrom } from "rxjs";

const ChangePasswordOptionsScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string, params?: any) => useGoTo(navigation, route, false, name);
  const [data, setData] = React.useState<any>({
    email: "",
    phone: "",
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
    setData({ email: apiUserInfo?.user?.email, phone: apiUserInfo?.user?.phone });
  }, [apiUserInfo]);

  useFocusEffect(
    React.useCallback(() => {
      return () => { };
    }, [])
  );

  const onPress = (event, onComplete) => {
    const request = {
      channel: event.type === 'email' ? 'email' : 'sms',
      channel_value: event.type === 'email' ? data.email : data.phone
    };
    firstValueFrom(ApiService.user.sendPasswordResetVerificationCode(request))
      .then((result) => {
        DataShareService.setData('password_reset_request', { data: {...result, ...request} });
        goTo("changePasswordCode", event);
        RsToast.success('Código enviado');
      })
      .catch((error) => {
        RsToast.error(error);
      })
      .finally(() => onComplete());
  };

  return <Template goTo={goTo} {...data} onPress={onPress} />;
};

export default ChangePasswordOptionsScreen;
