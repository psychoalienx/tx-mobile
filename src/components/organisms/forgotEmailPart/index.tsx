import Button from "@atoms/button";
import i18n from "@hooks/useLocalize";
import useThemeColor from "@hooks/useThemeColor";
import InputForm from "@molecules/inputForm";
import * as React from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import styles from "./styles";

export default function forgotEmailPart({
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
        name={"email"}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <InputForm
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error}
            textContentType="emailAddress"
            autoComplete="email"
            placeholder={i18n.t("email")}
            style={styles.input}
          />
        )}
      />
      <Button
        buttonText={i18n.t("send_code")}
        buttonStyle={styles.button}
        onPress={onPress}
        activityIndicator={sending}
      />
    </View>
  );
}
