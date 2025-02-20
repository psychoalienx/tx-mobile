import React from "react";
import Template from "@templates/config/managePayInfo";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";

const ManagePayInfoScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const [sending, setSending] = React.useState<boolean>(false);
  const [methods, setMethods] = React.useState([]);

  useFocusEffect(
    React.useCallback(() => {
      setMethods([
        {
          id: 1,
          icon: "visa",
          cardNumber: 4521,
          favorite: true,
        },
      ]);
      return () => {};
    }, [])
  );

  const onPressItem = (item) => {};

  return (
    <Template
      goTo={goTo}
      methods={methods}
      onPressItem={onPressItem}
      loading={sending}
    />
  );
};

export default ManagePayInfoScreen;
