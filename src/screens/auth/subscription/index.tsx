import Template from "@templates/auth/subscription";
import useGoTo from "@hooks/useGoTo";

const SubscriptionScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  return <Template goTo={goTo} />;
};

export default SubscriptionScreen;
