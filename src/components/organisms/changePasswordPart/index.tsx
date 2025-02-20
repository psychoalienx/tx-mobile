import * as React from "react";
import { View } from "react-native";
import Button from "@atoms/button";
import i18n from "@hooks/useLocalize";
import styles from "./styles";
import useThemeColor from "@hooks/useThemeColor";
import { Controller } from "react-hook-form";
import InputForm from "@components/molecules/inputForm";

export default function ChangePasswordForm({
  control,
  onCancel,
  onSubmit,
  loading,
}: {
  control: any;
  onCancel: any;
  onSubmit: any;
  loading: boolean;
}) {
  const black = useThemeColor("black");
  const white = useThemeColor("white");

  return (
    <View style={styles.container}>
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
      <View style={styles.buttons}>
        <Button
          onPress={onSubmit}
          buttonText={i18n.t("save")}
          buttonStyle={styles.button}
          activityIndicator={loading}
        />
        <Button
          onPress={() => onCancel()}
          buttonText={i18n.t("cancel")}
          buttonStyle={{
            ...styles.cancel,
            backgroundColor: "transparent",
            borderColor: white,
          }}
        />
      </View>
    </View>
  );
}
