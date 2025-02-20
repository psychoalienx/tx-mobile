import * as React from "react";
import { View } from "react-native";
import Layout from "@layouts/auth";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import Button from "@atoms/button";
import Icon from "@atoms/icon";
import styles from "./styles";
import useThemeColor from "@hooks/useThemeColor";

export default ({ onPress }: { onPress: any }) => {
  const primary = useThemeColor("primary");
  const white = useThemeColor("white");

  return (
    <Layout
      style={styles.content}
      stylesContainer={styles.container}
      radialBottom={true}
      scroll={false}
    >
      <View style={styles.icon}>
        <Icon name="movieOpenCheck" color={primary} bg={white} size={110} />
      </View>
      <View style={styles.title}>
        <Text
          text={i18n.t("change_plan_success")}
          color={"white"}
          weight={"bold"}
          size={"h3"}
          align={"center"}
        />
      </View>
      <View style={styles.desc}>
        <Text
          text={i18n.t("change_plan_success_desc")}
          color={"white"}
          size={"p"}
          align={"center"}
          weight={"light"}
        />
      </View>
      <Button
        buttonText={i18n.t("accept")}
        buttonStyle={styles.button}
        onPress={onPress}
      />
    </Layout>
  );
};
