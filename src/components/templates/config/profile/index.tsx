import * as React from "react";
import { View } from "react-native";
import styles from "./styles";
import { FONT_SIZE_24, FONT_SIZE_72 } from "@constants/typographies";
import Text from "@atoms/text";
import Icon, { Icons } from "@atoms/icon";
import Button from "@atoms/button";
import Layout from "@layouts/primary";
import useThemeColor from "@hooks/useThemeColor";
import i18n from "@hooks/useLocalize";

const Template = ({
  onLogoutPress,
  loggingOut,
  name = "",
  loading,
  goTo,
}: {
  onLogoutPress: any;
  loggingOut: any;
  name?: string;
  loading: any;
  goTo: any;
}) => {
  const primary = useThemeColor("primary");

  const renderButton = (
    tab: string,
    icon: keyof typeof Icons,
    onPress: any,
    loading: boolean
  ) => (
    <Button
      buttonText={i18n.t(tab)}
      iconLeft={
        <View style={styles.button_icon}>
          <Icon name={icon} size={FONT_SIZE_24} color={primary} />
        </View>
      }
      onPress={onPress}
      activityIndicator={loading}
      buttonStyle={[styles.button]}
      textStyle={styles.button_text}
    />
  );

  return (
    <Layout
      style={{ ...styles.container }}
      scroll={false}
      radialBottom={true}
      title={i18n.t("profile")}
    >
      <View style={styles.title}>
        <Icon name="personCircle" size={FONT_SIZE_72} color={primary} />
        {name !== undefined && (
          <Text
            text={name}
            color="white"
            size="h3"
            weight="bold"
            style={styles.name}
          />
        )}
      </View>
      {renderButton("favorites", "favorite", () => goTo("favorites"), loading)}
      {renderButton("account", "user", () => goTo("account"), loading)}
      {renderButton("referrals", "refer", () => goTo("referrals"), loading)}
      {renderButton(
        "configuration",
        "configuration",
        () => goTo("configuration"),
        loading
      )}
      {renderButton("logout", "logout", () => onLogoutPress(), loggingOut)}
    </Layout>
  );
};
export default Template;
