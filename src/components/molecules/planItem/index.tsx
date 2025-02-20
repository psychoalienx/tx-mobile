import * as React from "react";
import { View } from "react-native";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import Card from "@atoms/card";
import styles from "./styles";

export default function PlanItem({
  name,
  price,
  resolution,
  quality,
  onPress,
  style,
  styleContainer,
}: {
  name: any;
  price: any;
  resolution: any;
  quality: any;
  onPress: any;
  style?: any;
  styleContainer?: any;
}) {
  return (
    <Card
      style={[styles.plan, style]}
      styleBody={styleContainer}
      onPress={onPress}
      header={
        <Text
          text={name}
          color={"white"}
          size={"h7"}
          align={"center"}
          weight={"bold"}
        />
      }
    >
      <View style={styles.section}>
        <Text
          text={i18n.t("price")}
          color={"white50"}
          align={"center"}
          size={"small"}
        />
        <Text
          text={price}
          color={"white"}
          align={"center"}
          weight={"light"}
          size={"h7"}
        />
      </View>
      <View style={styles.section}>
        <Text
          text={i18n.t("resolution")}
          color={"white50"}
          align={"center"}
          size={"small"}
        />
        <Text
          text={resolution}
          color={"white"}
          align={"center"}
          weight={"light"}
          size={"h7"}
        />
      </View>
      <View style={styles.section}>
        <Text
          text={i18n.t("video_quality")}
          color={"white50"}
          align={"center"}
          size={"small"}
        />
        <Text
          text={quality}
          color={"white"}
          align={"center"}
          weight={"light"}
          size={"h7"}
        />
      </View>
    </Card>
  );
}
