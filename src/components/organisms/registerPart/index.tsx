import Button from "@atoms/button";
import i18n from "@hooks/useLocalize";
import useThemeColor from "@hooks/useThemeColor";
import InputForm from "@molecules/inputForm";
import * as React from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import styles from "./styles";

export default function RegisterPart({
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
        name={"name"}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <InputForm
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error}
            textContentType="name"
            autoComplete="name"
            placeholder={i18n.t("name")}
            style={styles.input}
          />
        )}
      />
      <Controller
        control={control}
        name={"user"}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <InputForm
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error}
            textContentType="username"
            autoComplete="username"
            placeholder={i18n.t("user")}
            style={styles.input}
          />
        )}
      />
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
        buttonText={i18n.t("continue")}
        buttonStyle={styles.button}
        onPress={onPress}
        activityIndicator={sending}
      />
    </View>
  );
}
