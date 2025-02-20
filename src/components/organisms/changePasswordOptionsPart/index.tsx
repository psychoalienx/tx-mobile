import * as React from "react";
import { ActivityIndicator, View } from "react-native";
import Button from "@atoms/button";
import i18n from "@hooks/useLocalize";
import styles from "./styles";
import useThemeColor from "@hooks/useThemeColor";
import Text from "@atoms/text";
import Icon from "@atoms/icon";
import { FONT_SIZE_24, FONT_SIZE_30 } from "@constants/typographies";

export default function ChangePasswordOptionsPart({
  goTo,
  email,
  phone,
  onPress,
}: {
  goTo: any;
  email: string;
  phone: string;
  onPress: any;
}) {
  const gray = useThemeColor("gray");
  const white = useThemeColor("white");
  const primary = useThemeColor("primary");

  const [phoneLoading, setPhoneLoading] = React.useState(false);
  const [emailLoading, setEmailLoading] = React.useState(false);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          setPhoneLoading(true);
          onPress({ type: "phone" }, () => setPhoneLoading(false));
        }}
        buttonText={
          <View style={styles.button_content}>
            <View style={styles.icon}>
              {phoneLoading ? <ActivityIndicator size={20} color={primary} /> : <Icon name="phone" size={FONT_SIZE_30} color={primary} />}
            </View>
            <View style={styles.text}>
              <Text
                text={i18n.t("send_code")}
                color="white"
                size="h7"
                weight="bold"
              />
              <View style={styles.separator} />
              <Text text={phone} color="white" size="p" weight="light" />
            </View>
            <Icon name="chevronRight" size={FONT_SIZE_24} color={white} />
          </View>
        }
        buttonStyle={{
          ...styles.button,
          backgroundColor: gray,
          borderColor: gray,
        }}
      />
      <Button
        onPress={() => {
          setEmailLoading(true);
          onPress({ type: "email" }, () => setEmailLoading(false));
        }} buttonText={
          <View style={styles.button_content}>
            <View style={styles.icon}>
              {emailLoading ? <ActivityIndicator size={20} color={primary} /> : <Icon name="email" size={FONT_SIZE_30} color={primary} />}
            </View>
            <View style={styles.text}>
              <Text
                text={i18n.t("send_code_email")}
                color="white"
                size="h7"
                weight="bold"
              />
              <View style={styles.separator} />
              <Text text={email} color="white" size="p" weight="light" />
            </View>
            <Icon name="chevronRight" size={FONT_SIZE_24} color={white} />
          </View>
        }
        buttonStyle={{
          ...styles.button,
          backgroundColor: gray,
          borderColor: gray,
        }}
      />
    </View>
  );
}
