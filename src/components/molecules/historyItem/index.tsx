import * as React from "react";
import { View } from "react-native";
import useThemeColor from "@hooks/useThemeColor";
import Text from "@atoms/text";
import Icon from "@atoms/icon";
import { FONT_SIZE_28 } from "@constants/typographies";
import styles from "./styles";

export default function HistoryItem({
  style,
  card,
  date,
  price,
  item,
  desc,
  icon,
  borderTop = false,
  borderBottom = true,
}: {
  style: any;
  card: string;
  date: string;
  price: string;
  item: string;
  desc: string;
  icon: "mastercard" | "visa" | "americanExpress";
  borderTop: boolean;
  borderBottom: boolean;
}) {
  const white = useThemeColor("white");
  const grayBorder = useThemeColor("gray");

  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.content,
          borderTop && { borderTopWidth: 1 },
          borderBottom && { borderBottomWidth: 1 },
          { borderColor: grayBorder },
        ]}
      >
        <View style={styles.row}>
          <Text text={date} size="h6" weight="bold" color="white" />
          <Text text={price} size="h6" weight="bold" color="white" />
        </View>
        <Text text={item} size="p" weight="light" color="white" />
        <View style={styles.card}>
          <View style={styles.icon}>
            <Icon name={icon} color={white} size={FONT_SIZE_28} />
          </View>
          <Text text={`**** **** **** ${card}`} size="small" color="white" />
        </View>
        <Text text={desc} size="p" weight="light" color="white" />
      </View>
    </View>
  );
}
