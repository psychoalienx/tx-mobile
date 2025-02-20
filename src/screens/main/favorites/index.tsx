import React from "react";
import Template from "@templates/main/favorites";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";

const FavoritesScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [loggingOut, setLoggingOut] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const goTo = (name: string) => useGoTo(navigation, route, false, name);

  useFocusEffect(
    React.useCallback(() => {
      setItems([
        {
          id: 1,
          image: require("@assets/images/dummy/endgame_v.png"),
        },
        {
          id: 2,
          image: require("@assets/images/dummy/after_v.png"),
        },
        {
          id: 3,
          image: require("@assets/images/dummy/blackpanther_v.png"),
        },
        {
          id: 4,
          image: require("@assets/images/dummy/dune_v.png"),
        },
        {
          id: 5,
          image: require("@assets/images/dummy/lego_v.png"),
        },
      ]);
    }, [])
  );

  const onPress = (item: any) => {};

  return (
    <Template onPress={onPress} items={items} loading={loading} goTo={goTo} />
  );
};

export default FavoritesScreen;
