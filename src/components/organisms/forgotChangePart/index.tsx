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
      <Controller
        control={control}
        name={"confirm_password"}
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
            placeholder={i18n.t("confirm_password")}
            style={styles.input}
          />
        )}
      />
      <Button
        buttonText={i18n.t("save")}
        buttonStyle={styles.button}
        onPress={onPress}
        activityIndicator={sending}
      />
    </View>
  );
}
