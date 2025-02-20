import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import useThemeColor from "@hooks/useThemeColor";
import Text from "@atoms/text";
import styles from "./styles";

export default function PaymentMethodChange({
  name,
  price,
  onPress,
  style,
  planStyle,
  buttonStyle,
  buttonText,
}: {
  name: any;
  price?: any;
  onPress: any;
  style?: any;
  planStyle?: any;
  buttonStyle?: any;
  buttonText: any;
}) {
  const gray = useThemeColor("gray");

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: gray,
        },
        style,
      ]}
    >
      <View style={[styles.plan, planStyle]}>
        <View style={styles.item}>
          <Text text={name} color={"white"} size={"p"} weight={"bold"} />
        </View>
        <View style={styles.item}>
          <Text text={price} color={"white"} size={"h6"} weight={"bold"} />
        </View>
      </View>
      <View style={[styles.button, buttonStyle]}>
        <TouchableOpacity onPress={onPress}>{buttonText}</TouchableOpacity>
      </View>
    </View>
  );
}
