import * as React from "react";
import { Text as RNText } from "react-native";
import styles from "./styles";
import useThemeColor from "@hooks/useThemeColor";
import Colors from "@constants/colors";

export default function Text({
  text,
  style,
  color = "black",
  weight = "regular",
  size = "p",
  align = "auto",
  transform = "none",
  onPress,
}: {
  text: string | number | React.ReactElement;
  style?: {};
  color?: keyof typeof Colors.light & keyof typeof Colors.dark;
  weight?: string;
  size?: string;
  align?: string;
  transform?: string;
  onPress?: any;
}) {
  const textColor = useThemeColor(color);

  return (
    <RNText
      style={[
        styles.default,
        { color: textColor },
        styles[`weight_${weight}`],
        styles[`size_${size}`],
        styles[`align_${align}`],
        styles[`transform_${transform}`],
        style,
      ]}
      onPress={onPress}
    >
      {text}
    </RNText>
  );
}
