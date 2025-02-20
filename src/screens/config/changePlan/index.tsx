import React from "react";
import Template from "@templates/config/changePlan";
import useGoTo from "@hooks/useGoTo";
import { useFocusEffect } from "@react-navigation/native";

const ChangePlanScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [current, setCurrent] = React.useState(1);
  const [selected, setSelected] = React.useState(1);
  const [items, setItems] = React.useState<any>([]);
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  useFocusEffect(
    React.useCallback(() => {
      setItems([
        {
          id: 1,
          name: "Simple",
          price: "$3,99",
          resolution: "480p",
          quality: "Buena",
        },
        {
          id: 2,
          name: "Basico",
          price: "$8,99",
          resolution: "1080p",
          quality: "Mejor",
        },
        {
          id: 3,
          name: "Premium",
          price: "$19,99",
          resolution: "4k",
          quality: "Excelente",
        },
      ]);
      return () => {};
    }, [])
  );

  const onPress = () => {
    goTo("changePlanForm")
  };
  const onPressPlan = (item: any) => {
    setSelected(item?.id);
  };

  return (
    <Template
      selected={selected}
      current={current}
      onPress={onPress}
      onPressPlan={onPressPlan}
      items={items}
      goTo={goTo}
    />
  );
};

export default ChangePlanScreen;
