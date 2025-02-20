import * as React from "react";
import { View } from "react-native";
import styles from "./styles";
import Button from "@atoms/button";
import Text from "@atoms/text";
import useThemeColor from "@hooks/useThemeColor";

export default function TabListItem({
  title,
  onPress,
  selected,
}: {
  title?: any;
  onPress?: any;
  selected?: any;
}) {
  const primary = useThemeColor("primary");

  return (
    <Button
      buttonStyle={styles.tab}
      onPress={onPress}
      buttonText={
        <View style={styles.tab_text}>
          <Text
            text={title}
            color="white"
            size="h7"
            weight="bold"
            align="center"
          />
          {selected && (
            <View style={[styles.tab_selected, { backgroundColor: primary }]} />
          )}
        </View>
      }
    />
  );
}
