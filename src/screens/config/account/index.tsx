import React, { useEffect } from "react";
import Template from "@templates/config/account";
import useGoTo from "@hooks/useGoTo";
import { IAPIUserInformationDef } from "@interfaces/api_interfaces/user";
import { DataShareService } from "@services/data-share.service";
import { DateTime } from "@helpers/date-time";

const AccountScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [data, setData] = React.useState<any>({
    suscriptionMonth: "",
    suscriptionYear: "",
    username: "",
    email: "",
    phone: "",
    payDay: "",
    payMonth: "",
    payYear: "",
    cardNumber: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [loggingOut, setLoggingOut] = React.useState(false);
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  
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
    const newData = {
      ...data, ...{
        suscriptionMonth: DateTime.formatDate(apiUserInfo?.user?.registerDate),
        suscriptionYear: '',
        username: apiUserInfo?.user.name,
        email: apiUserInfo?.user.email,
        phone: apiUserInfo?.user.phone,
      }
    };
    setData(newData);
  }, [apiUserInfo]);

  return <Template goTo={goTo} {...data} />;
};

export default AccountScreen;
