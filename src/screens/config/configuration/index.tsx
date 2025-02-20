import React, { useEffect } from "react";
import Template from "@templates/config/configuration";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import { useForm, useWatch } from "react-hook-form";
import i18n from "@hooks/useLocalize";
import { DateTime } from "@helpers/date-time";
import { IAPIUserInformationDef } from "@interfaces/api_interfaces/user";
import { DataShareService } from "@services/data-share.service";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { ApiService } from "@services/api/core/api.service";
import { firstValueFrom } from "rxjs";
import { StorageService } from "@services/api/core/storage.service";

const ConfigurationScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [notifications, setNotifications] = React.useState(false);
  const [network, setNetwork] = React.useState<any>();
  const [networkValue, setNetworkValue] = React.useState(0);
  const [networkOptions, setNetworkOptions] = React.useState<any[]>([
    { value: 1, text: i18n.t("save_mobile_data") },
    { value: 2, text: i18n.t("maximum_mobile_data") },
    { value: 3, text: i18n.t("wifi_only") }
  ]);
  const goTo = (name: string) => useGoTo(navigation, route, false, name);

  const [apiUserInfo, setApiUserInfo] = React.useState<IAPIUserInformationDef>();

  useEffect(() => {
    const subscription = DataShareService.subjects.get('user_info').subscribe({
      next: (userInfo: IAPIUserInformationDef) => setApiUserInfo(userInfo)
    });
    loadNetworkUse();
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setNotifications(apiUserInfo?.client_account?.config?.allowNotifications || false);
  }, [apiUserInfo]);

  const loadNetworkUse = () => {
    StorageService.get('network_use')
      .then((result: any) => {
        setNetworkValue(parseInt(result));
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    setNetwork(networkOptions.find(option => option.value === networkValue));
  }, [networkValue]);

  const onPressNotifications = (value) => {
    const backup = notifications;
    setNotifications(value);
    // TODO: CAMBIAR POR client/notifications/edit
    firstValueFrom(ApiService.user.setUserInformation({ data: { allow_notifications: value } }))
      .then((result) => {
        // RsToast.success('Cambios guardados correctamente');
      })
      .catch((error) => {
        setNotifications(backup);
        console.log(error);
        RsToast.error('No se pudieron guardar los cambios', error);
      });
    setNotifications(value);
  };

  const onPressNetwork = (option) => {
    const backup = networkValue;
    setNetworkValue(option.value);
    StorageService.set('network_use', option.value)
      .then((result: any) => {
      })
      .catch(error => {
        setNetworkValue(backup);
        console.log(error);
      });
  };

  return (
    <Template
      goTo={goTo}
      loading={loading}
      networkOptions={networkOptions}
      network={network}
      notifications={notifications}
      onPressNetwork={onPressNetwork}
      onPressNotifications={onPressNotifications}
    />
  );
};

export default ConfigurationScreen;
