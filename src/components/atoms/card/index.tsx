import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import useThemeColor from "@hooks/useThemeColor";
import styles from "./styles";

export default function CardBase({
  header,
  onPress,
  children,
  style,
  styleBody,
  styleHeader,
}: {
  header?: any;
  onPress?: any;
  children?: any;
  style?: any;
  styleBody?: any;
  styleHeader?: any;
}) {
  const primary = useThemeColor("primary");
  const gray = useThemeColor("gray");
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          {
            backgroundColor: gray,
          },
          styles.card,
          style,
        ]}
      >
        {header && (
          <View
            style={[
              styles.header,
              {
                backgroundColor: primary,
              },
              styleHeader,
            ]}
          >
            {header}
          </View>
        )}
        <View style={[styles.body, styleBody]}>{children}</View>
      </View>
    </TouchableOpacity>
  );
}
