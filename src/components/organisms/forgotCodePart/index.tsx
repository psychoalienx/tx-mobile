import * as React from "react";
import Button from "@atoms/button";
import i18n from "@hooks/useLocalize";
import InputCode from "@molecules/inputCode";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import styles from "./styles";

export default function forgotCodePart({
  style,
  onSendCode,
  onPress,
  control,
  success,
  sending,
}: {
  style: object;
  onSendCode?: any;
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
            title={i18n.t("code")}
            value={value}
            error={error}
            success={success}
            onChange={onChange}
            onBlur={onBlur}
            onSendCode={onSendCode}
            quantity={6}
          />
        )}
      />
      <Button
        buttonText={i18n.t("continue")}
        buttonStyle={styles.button}
        onPress={onPress}
        activityIndicator={sending}
      />
    </View>
  );
}
