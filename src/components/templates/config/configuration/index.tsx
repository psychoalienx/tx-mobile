import * as React from "react";
import { View } from "react-native";
import Text from "@atoms/text";
import SelectButton from "@molecules/selectButton";
import Switch from "@atoms/switch";
import styles from "./styles";
import Layout from "@layouts/primary";
import useThemeColor from "@hooks/useThemeColor";
import i18n from "@hooks/useLocalize";
import Icon from "@atoms/icon";
import { FONT_SIZE_32 } from "@constants/typographies";

const Template = ({
  goTo,
  networkOptions,
  network,
  notifications,
  onPressNetwork,
  onPressNotifications,
}: {
  goTo: any;
  networkOptions: any;
  network: any;
  notifications: any;
  onPressNetwork: any;
  onPressNotifications: any;
}) => {
  const grayBorder = useThemeColor("grayBorder");
  const gray = useThemeColor("gray");
  const black = useThemeColor("black");

  return (
    <Layout
      style={{ ...styles.container }}
      scroll={false}
      title={i18n.t("configuration")}
      backButton={() => goTo("back")}
    >
      <View style={{ ...styles.section, backgroundColor: gray }}>
        <Text
          text={i18n.t("notifications")}
          size={"h7"}
          weight="bold"
          color={"white"}
        />
        <View style={styles.row}>
          <View style={styles.desc}>
            <Text
              text={i18n.t("notifications_desc")}
              size={"p"}
              weight="light"
              color={"white"}
            />
          </View>
          <View style={styles.action}>
            <Switch
              value={notifications}
              color={black}
              onChange={() => onPressNotifications(!notifications)}
            />
          </View>
        </View>
      </View>
      <View style={{ ...styles.section, backgroundColor: gray }}>
        <Text
          text={i18n.t("network")}
          size={"h7"}
          weight="bold"
          color={"white"}
        />
        <View style={styles.row}>
          <View style={styles.icon}>
            <Icon name="signal" color={grayBorder} size={FONT_SIZE_32} />
          </View>
          <View style={styles.desc}>
            <Text
              text={i18n.t("network_use")}
              size={"h7"}
              weight="bold"
              color={"white"}
            />
            <Text
              text={network?.text}
              size={"p"}
              weight="light"
              color={"white"}
            />
          </View>
          <View style={styles.action}>
            <SelectButton
              button={i18n.t("edit")}
              value={network?.value}
              items={networkOptions}
              title={i18n.t("network_use")}
              desc={i18n.t("network_desc")}
              onChange={onPressNetwork}
            />
          </View>
        </View>
      </View>
    </Layout>
  );
};
export default Template;
