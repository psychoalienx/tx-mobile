import React from "react";
import Template from "@templates/config/referrals";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import { Share, Linking } from "react-native";

const ReferralsScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [total, setTotal] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [users, setUsers] = React.useState<any>([]);
  const goTo = (name: string) => useGoTo(navigation, route, false, name);

  useFocusEffect(
    React.useCallback(() => {
      setTotal("$8,99");
      setUsername("migue123");
      setUsers([
        {
          name: "Miguel loreto",
          earn: "+0.40",
          date: "04 / 02 / 2021",
        },
        {
          name: "Leonardo Castillo",
          earn: "+0.40",
          date: "08 / 02 / 2021",
        },
        {
          name: "Jose Orive",
          earn: "+0.40",
          date: "04 / 02 / 2021",
        },
        {
          name: "Maria Rodriguez",
          earn: "+0.40",
          date: "08 / 02 / 2021",
        },
      ]);
      return () => {};
    }, [])
  );

  const onCopy = () => {
    Clipboard.setString(username);
    // quizas sea necesario hacer una alerta ya que aunque copie el texto no hay feedback
  };
  const onWhatsapp = () => {
    Linking.openURL(`whatsapp://send?text=${username}`);
  };

  const onTelegram = () => {
    Linking.openURL(`https://t.me?start=${username}`);
  };

  const onGmail = () => {
    Linking.openURL(`mailto:?subject=&body=${username}`);
  };

  const onMore = () => {
    Share.share({
      message: `Trimax ${username}`,
    });
  };

  return (
    <Template
      goTo={goTo}
      onCopy={onCopy}
      onWhatsapp={onWhatsapp}
      onTelegram={onTelegram}
      onGmail={onGmail}
      onMore={onMore}
      total={total}
      username={username}
      users={users}
    />
  );
};

export default ReferralsScreen;
