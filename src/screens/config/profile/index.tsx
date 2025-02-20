import React, { useEffect } from "react";
import Template from "@templates/config/profile";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import { RsToast } from "@components/rolsoft/RsToast/RsToast";
import { ApiService } from "@services/api/core/api.service";
import { DataShareService } from "@services/data-share.service";
import { IAPIUserInformationDef } from "@interfaces/api_interfaces/user";

const ProfileScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [loggingOut, setLoggingOut] = React.useState(false);
  const [name, setName] = React.useState('');
  const goTo = (name: string) => useGoTo(navigation, route, false, name);

  useEffect(() => {
    const subscription = DataShareService.subjects.get('user_info').subscribe({
      next: (userInfo: IAPIUserInformationDef) => {
        setName(userInfo.client_account?.profile?.name || '');
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      return () => { };
    }, [])
  );

  const logout = () => {
    setLoggingOut(true);
    ApiService.user
      .logout()
      .then()
      .catch((error) => {
        RsToast.error("messages.systemError");
      })
      .finally(() => setLoggingOut(false));
  };

  return (
    <Template
      name={name}
      onLogoutPress={logout}
      loggingOut={loggingOut}
      loading={loading}
      goTo={goTo}
    />
  );
};

export default ProfileScreen;
