import * as React from "react";
import { View, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import useThemeColor from "@hooks/useThemeColor";
import Text from "@atoms/text";
import styles from "./styles";

export default function CardBase({
  title,
  onPress,
  children,
  style,
}: {
  title?: any;
  onPress?: any;
  children?: any;
  style?: any;
}) {
  const primary = useThemeColor("primary");
  const gray = useThemeColor("gray");
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, style]}>
        <TouchableWithoutFeedback>
          <>
            <View style={[styles.title, styles.container, {
              backgroundColor: primary
            }]}>
              <Text text={title} color={"white"} size={"h2"} align={"center"} />
            </View>
            <View style={[styles.body, styles.container, {
              backgroundColor: gray
            }]}>
              {children}
            </View>
          </>
        </TouchableWithoutFeedback>
      </View>
    </TouchableOpacity>
  );
}
