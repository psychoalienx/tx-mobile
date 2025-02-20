import * as React from "react";
import { View } from "react-native";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import Card from "@atoms/card";
import styles from "./styles";
import useThemeColor from "@hooks/useThemeColor";

export default function PlanItem({
  name,
  price,
  resolution,
  quality,
  current,
  selected,
  onPress,
}: {
  name: any;
  price: any;
  resolution: any;
  quality: any;
  current: boolean;
  selected: boolean;
  onPress: any;
}) {
  const primary = useThemeColor("primary");
  const dark = useThemeColor("dark");
  const gray = useThemeColor("gray");

  return (
    <Card
      style={styles.plan}
      onPress={onPress}
      styleHeader={{ backgroundColor: selected === true ? primary : dark }}
      header={
        <Text
          text={current === true ? i18n.t("current_plan", { name }) : name}
          color="white"
          size="h7"
          weight="bold"
        />
      }
      styleBody={{
        ...styles.container,
        borderColor: selected === true ? primary : gray,
      }}
    >
      <View style={styles.row}>
        <View style={styles.section}>
          <Text text={i18n.t("price")} color="white50" size="small" />
          <Text text={price} color="white" weight="light" size="h7" />
        </View>
        <View style={styles.section}>
          <Text text={i18n.t("resolution")} color="white50" size="small" />
          <Text text={resolution} color="white" weight="light" size="h7" />
        </View>
        <View style={styles.section}>
          <Text text={i18n.t("video_quality")} color="white50" size="small" />
          <Text text={quality} color="white" weight="light" size="h7" />
        </View>
      </View>
    </Card>
  );
}
