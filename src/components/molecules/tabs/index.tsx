import * as React from "react";
import { View } from "react-native";
import styles from "./styles";
import Button from "@atoms/button";

export default function Tabs({
  items,
  selected,
  onPress,
}: {
  items?: any;
  selected?: any;
  onPress?: any;
}) {
  const selectedStyle = (item) => {
    if (selected && selected?.id == item?.id) return styles.button;
    return { ...styles.button, ...styles.inactive };
  };

  const selectedTextStyle = (item) => {
    if (selected && selected?.id == item?.id) return styles.button_text;
    return styles.inactive_text;
  };

  return (
    <View style={[styles.container]}>
      {items.map((item: any, index: number) => (
        <Button
          key={`tab_${item?.id ?? index}`}
          onPress={() => {
            onPress(item);
          }}
          buttonText={item?.name}
          buttonStyle={selectedStyle(item)}
          textStyle={selectedTextStyle(item)}
        />
      ))}
    </View>
  );
}
