import Button from "@atoms/button";
import i18n from "@hooks/useLocalize";
import useThemeColor from "@hooks/useThemeColor";
import InputForm from "@molecules/inputForm";
import * as React from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import styles from "./styles";

export default function ForgotPhonePart({
  style,
  onPress,
  control,
  sending,
}: {
  style: object;
  onPress: any;
  control: any;
  sending: any;
}) {
  const black = useThemeColor("black");
  return (
    <View style={[styles.container, style]}>
      <Controller
        control={control}
        name={"phone_number"}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <InputForm
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error}
            textContentType="telephoneNumber"
            autoComplete="tel"
            placeholder={i18n.t("phone_number")}
            style={styles.input}
          />
        )}
      />
      <Button
        activityIndicator={sending}
        buttonText={i18n.t("send_code")}
        buttonStyle={styles.button}
        onPress={onPress}
      />
    </View>
  );
}
