import * as React from "react";
import { View } from "react-native";
import Text from "@atoms/text";
import styles from "./styles";
import Layout from "@layouts/primary";
import useThemeColor from "@hooks/useThemeColor";
import i18n from "@hooks/useLocalize";
import Icon from "@atoms/icon";
import { FONT_SIZE_24 } from "@constants/typographies";
import Button from "@atoms/button";
import InputForm from "@molecules/inputForm";

const Template = ({
  goTo,
  onCopy,
  onWhatsapp,
  onTelegram,
  onGmail,
  onMore,
  total,
  username,
  users,
}: {
  onCopy: any;
  onWhatsapp: any;
  onTelegram: any;
  onGmail: any;
  onMore: any;
  goTo: any;
  total: any;
  username: any;
  users: any;
}) => {
  const black = useThemeColor("black");
  const blackLight = useThemeColor("blackLight");
  const gray = useThemeColor("gray");
  const white = useThemeColor("white");
  const dark = useThemeColor("dark");

  return (
    <Layout
      style={{ ...styles.container }}
      title={i18n.t("referrals")}
      backButton={() => goTo("back")}
    >
      <View style={{ ...styles.section, backgroundColor: black }}>
        <Text
          text={i18n.t("user_referrals")}
          size="h7"
          weight="bold"
          color="white"
        />
        <InputForm
          value={username}
          editable={false}
          styleInput={{
            ...styles.input,
            borderColor: dark,
            backgroundColor: blackLight,
          }}
          rightContent={() => (
            <Button
              buttonStyle={{ ...styles.copy, backgroundColor: white }}
              onPress={onCopy}
              buttonText={
                <Icon name="copy" size={FONT_SIZE_24} color="black" />
              }
            />
          )}
        />
        <Text text={i18n.t("share")} weight="bold" color="white" />
        <View style={[styles.row, styles.share]}>
          <Button
            onPress={onWhatsapp}
            buttonText={
              <>
                <View style={styles.icon}>
                  <Icon name="whatsapp" size={FONT_SIZE_24} />
                </View>
                <Text text={i18n.t("whatsapp")} color="white" />
              </>
            }
            buttonStyle={styles.share_icon}
          />
          <View style={{ ...styles.border_v, borderColor: gray }} />
          <Button
            onPress={onTelegram}
            buttonText={
              <>
                <View style={styles.icon}>
                  <Icon name="telegram" size={FONT_SIZE_24} />
                </View>
                <Text text={i18n.t("telegram")} color="white" />
              </>
            }
            buttonStyle={styles.share_icon}
          />
          <View style={{ ...styles.border_v, borderColor: gray }} />
          <Button
            onPress={onGmail}
            buttonText={
              <>
                <View style={styles.icon}>
                  <Icon name="gmail" size={FONT_SIZE_24} />
                </View>
                <Text text={i18n.t("gmail")} color="white" />
              </>
            }
            buttonStyle={styles.share_icon}
          />
          <View style={{ ...styles.border_v, borderColor: gray }} />
          <Button
            onPress={onMore}
            buttonText={
              <>
                <View style={styles.icon}>
                  <Icon name="options" size={FONT_SIZE_24} color={white} />
                </View>
                <Text text={i18n.t("more")} color="white" />
              </>
            }
            buttonStyle={styles.share_icon}
          />
        </View>
      </View>
      <View style={{ ...styles.section, backgroundColor: black }}>
        <Text
          text={i18n.t("users_and_total_amount")}
          size="h7"
          weight="bold"
          color="white"
        />
        <View style={{ ...styles.desc, borderColor: gray }}>
          <Text
            text={i18n.t("users_and_total_amount_desc")}
            weight="light"
            color="white"
          />
        </View>
        <View style={[styles.row, styles.item, { borderColor: gray }]}>
          <Text text={i18n.t("total_amount")} weight="bold" color="white" />
          <View style={styles.total}>
            <Text text={total} weight="bold" color="white" />
          </View>
        </View>
        {users.map((item: any, index: number) => (
          <View
            key={`users_referrel_${index}`}
            style={[
              styles.row,
              styles.item,
              {
                borderColor: gray,
                borderBottomWidth: index + 1 === users.length ? 0 : 1,
              },
            ]}
          >
            <View style={styles.name}>
              <Text text={item.name} color="white" />
            </View>
            <View style={styles.amount}>
              <Text text={item.earn} size="p_small" color="white" />
            </View>
            <Text text={item.date} size="p_small" color="grayBorder" />
          </View>
        ))}
      </View>
    </Layout>
  );
};
export default Template;
