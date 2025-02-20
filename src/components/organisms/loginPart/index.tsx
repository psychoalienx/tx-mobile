import Button from "@atoms/button";
import i18n from "@hooks/useLocalize";
import useThemeColor from "@hooks/useThemeColor";
import InputForm from "@molecules/inputForm";
import * as React from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import styles from "./styles";

export default function LoginPart({
  style,
  styleForgot,
  onSubmit,
  onPress,
  control,
  sending,
}: {
  style: object;
  styleForgot?: any;
  onSubmit: any;
  onPress: any;
  control: any;
  sending: any;
}) {
  const primary = useThemeColor("primary");

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
            placeholder={i18n.t("e_mail")}
            style={styles.input}
          />
        )}
      />
      <Controller
        control={control}
        name={"password"}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <InputForm
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error}
            secureTextEntry={true}
            textContentType="password"
            autoComplete="password"
            placeholder={i18n.t("password")}
            style={styles.input}
          />
        )}
      />
      <Button
        buttonText={i18n.t("login")}
        buttonStyle={styles.button}
        onPress={onSubmit}
        activityIndicator={sending}
      />
      <Button
        buttonText={i18n.t("forgot_password")}
        buttonStyle={{ ...styles.buttonForgot, ...styleForgot }}
        textStyle={{ color: styleForgot?.color ? styleForgot.color : primary }}
        onPress={onPress}
      />
    </View>
  );
}
