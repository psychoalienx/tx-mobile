import * as React from "react";
import { View } from "react-native";
import styles from "./styles";
import Text from "@atoms/text";
import Button from "@atoms/button";
import Icon from "@atoms/icon";
import { FONT_SIZE_24 } from "@constants/typographies";
import useThemeColor from "@hooks/useThemeColor";
import i18n from "@hooks/useLocalize";

export default function AccountMenu({
  goTo,
  suscriptionMonth,
  suscriptionYear,
  username,
  email,
  phone,
  payDay,
  payMonth,
  payYear,
  cardNumber,
  onPress,
}: {
  goTo: any;
  suscriptionMonth: string;
  suscriptionYear: string;
  username: string;
  email: string;
  phone: string;
  payDay: string;
  payMonth: string;
  payYear: string;
  cardNumber: string;
  onPress?: any;
}) {
  const white = useThemeColor("white");
  const gray = useThemeColor("gray");
  const black = useThemeColor("black");

  return (
    <View style={styles.container}>
      <View style={styles.date}>
        <Text
          text={i18n.t("subscription_time", {
            month: suscriptionMonth,
            year: suscriptionYear,
          })}
          color="white"
        />
      </View>
      <View style={styles.title}>
        <Text
          text={i18n.t("account_and_bill")}
          color="white"
          size="h7"
          weight="semibold"
        />
      </View>
      <View style={{ ...styles.box, backgroundColor: black }}>
        <Text text={username} color="white" size="p" weight="bold" />
        <Text text={email} color="white" size="p" weight="bold" />
        <Text
          text={
            <>
              {i18n.t("password") + ": "}
              <Text
                text="***************"
                color="white"
                size="p"
                weight="bold"
              />
            </>
          }
          color="white"
          size="small"
        />
        <Text
          text={
            <>
              {i18n.t("phone_number") + ": "}
              <Text text={phone} color="white" size="p" weight="bold" />
            </>
          }
          color="white"
          size="small"
        />
        <View style={styles.info}>
          <Button
            buttonText={i18n.t("change_email")}
            onPress={() => goTo("changeEmail")}
            buttonStyle={{ ...styles.button, borderColor: gray }}
            textStyle={styles.button_text}
            iconRight={
              <Icon name="chevronRight" color="white" size={FONT_SIZE_24} />
            }
            iconLeftHide={true}
          />
          <Button
            buttonText={i18n.t("change_password")}
            onPress={() => goTo("changePasswordOptions")}
            buttonStyle={{ ...styles.button, borderColor: gray }}
            textStyle={styles.button_text}
            iconRight={
              <Icon name="chevronRight" color="white" size={FONT_SIZE_24} />
            }
            iconLeftHide={true}
          />
          <Button
            buttonText={i18n.t("change_phone_number")}
            onPress={() => goTo("changePhoneNumber")}
            buttonStyle={{ ...styles.button, borderColor: gray }}
            textStyle={styles.button_text}
            iconRight={
              <Icon name="chevronRight" color="white" size={FONT_SIZE_24} />
            }
            iconLeftHide={true}
          />
          <Button
            buttonText={i18n.t("change_username")}
            onPress={() => goTo("changeUsername")}
            buttonStyle={{ ...styles.button, borderColor: gray }}
            textStyle={styles.button_text}
            iconRight={
              <Icon name="chevronRight" color="white" size={FONT_SIZE_24} />
            }
            iconLeftHide={true}
          />
        </View>
      </View>
      <View style={styles.separator} />
      <View style={{ ...styles.box, backgroundColor: black }}>
        <Text
          text={i18n.t("next_pay_day", {
            day: payDay,
            month: payMonth,
            year: payYear,
          })}
          color="white"
        />
        <View style={styles.row}>
          <Text text={`**** **** **** ${cardNumber}`} color="white" />
        </View>
        <View style={styles.info}>
          <Button
            buttonText={i18n.t("manage_pay_info")}
            onPress={() => goTo("managePayInfo")}
            buttonStyle={{ ...styles.button, borderColor: gray }}
            textStyle={styles.button_text}
            iconRight={
              <Icon name="chevronRight" color="white" size={FONT_SIZE_24} />
            }
            iconLeftHide={true}
          />
          <Button
            buttonText={i18n.t("add_secondary_payment_method")}
            onPress={() => goTo("addSecondaryPaymentMethod")}
            buttonStyle={{ ...styles.button, borderColor: gray }}
            textStyle={styles.button_text}
            iconRight={
              <Icon name="chevronRight" color="white" size={FONT_SIZE_24} />
            }
            iconLeftHide={true}
          />
          <Button
            buttonText={i18n.t("use_refer_code")}
            onPress={() => goTo("useReferCode")}
            buttonStyle={{ ...styles.button, borderColor: gray }}
            textStyle={styles.button_text}
            iconRight={
              <Icon name="chevronRight" color="white" size={FONT_SIZE_24} />
            }
            iconLeftHide={true}
          />
          <Button
            buttonText={i18n.t("payment_history")}
            onPress={() => goTo("paymentHistory")}
            buttonStyle={{ ...styles.button, borderColor: gray }}
            textStyle={styles.button_text}
            iconRight={
              <Icon name="chevronRight" color="white" size={FONT_SIZE_24} />
            }
            iconLeftHide={true}
          />
          <Button
            buttonText={i18n.t("register_manual_pay")}
            onPress={() => goTo("registerManualPay")}
            buttonStyle={{ ...styles.button, borderColor: gray }}
            textStyle={styles.button_text}
            iconRight={
              <Icon name="chevronRight" color="white" size={FONT_SIZE_24} />
            }
            iconLeftHide={true}
          />
        </View>
        <View style={{ ...styles.mini_button_container, borderColor: gray }}>
          <Button
            buttonText={i18n.t("cancel_suscription")}
            onPress={onPress}
            buttonStyle={{ ...styles.mini_button, borderColor: white }}
            textStyle={styles.mini_button_text}
          />
        </View>
      </View>
      <View style={styles.title}>
        <Text text={i18n.t("plans")} color="white" />
      </View>
      <Button
        buttonText={i18n.t("change_plan")}
        onPress={() => goTo("changePlan")}
        buttonStyle={{
          ...styles.button,
          ...styles.not_border,
          borderColor: gray,
          backgroundColor: black,
        }}
        textStyle={styles.button_text}
        iconRight={
          <Icon name="chevronRight" color="white" size={FONT_SIZE_24} />
        }
        iconLeftHide={true}
      />
    </View>
  );
}
