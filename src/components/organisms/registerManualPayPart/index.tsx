import * as React from "react";
import Button from "@atoms/button";
import i18n from "@hooks/useLocalize";
import InputCode from "@molecules/inputCode";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import styles from "./styles";

export default function registerManualPayPart({
  style,
  onPress,
  control,
  success,
  sending,
}: {
  style: object;
  onPress: any;
  control: any;
  success?: any;
  sending?: any;
}) {
  return (
    <View style={[styles.container, style]}>
      <Controller
        control={control}
        name={"code"}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <InputCode
            title={i18n.t("pay_code")}
            value={value}
            error={error}
            success={success}
            onChange={onChange}
            onBlur={onBlur}
            quantity={5}
          />
        )}
      />
      <Button
        buttonText={i18n.t("register_pay")}
        buttonStyle={styles.button}
        onPress={onPress}
        activityIndicator={sending}
      />
    </View>
  );
}
