import * as React from "react";
import styles from "./styles";
import useThemeColor from "@hooks/useThemeColor";
import Text from "@atoms/text";
import i18n from "@hooks/useLocalize";
import Button from "@atoms/button";
import { View } from "react-native";

const Template = ({ onPress }: { onPress: any }) => {
  const red = useThemeColor("red");
  const blackLight = useThemeColor("blackLight");
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.content,
          borderColor: red,
          backgroundColor: blackLight,
        }}
      >
        <View style={styles.text}>
          <Text
            text={i18n.t("your_suscription_is_expired")}
            color="white"
            weight="bold"
            align="center"
            size="h4"
          />
        </View>
        <View style={styles.text}>
          <Text
            text={i18n.t("your_suscription_is_expired_desc")}
            color="white"
            weight="light"
          />
        </View>
        <Button
          onPress={onPress}
          buttonText={i18n.t("pay_outstanding_balance")}
          buttonStyle={{
            ...styles.button,
            backgroundColor: red,
            borderColor: red,
          }}
        />
      </View>
    </View>
  );
};
export default Template;
