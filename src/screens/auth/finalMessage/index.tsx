import Template from "@templates/auth/finalMessage";
import useGoTo from "@hooks/useGoTo";
import { DataShareService } from "@services/data-share.service";

const FinalMessageScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  
  const onPress = () => {
    const userInfo = DataShareService.subjects.getValue('user_info');
    userInfo.client_account.profile.plan = { id: 1 };
    DataShareService.subjects.next('user_info', userInfo);
  };

  return <Template onPress={onPress} />;
};

export default FinalMessageScreen;
