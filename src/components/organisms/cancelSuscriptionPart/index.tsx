import * as React from "react";
import { View } from "react-native";
import Button from "@atoms/button";
import i18n from "@hooks/useLocalize";
import styles from "./styles";
import useThemeColor from "@hooks/useThemeColor";
import { Controller } from "react-hook-form";
import InputForm from "@components/molecules/inputForm";

export default function CancelSuscriptionPart({
  control,
  onSubmit,
  loading,
}: {
  control: any;
  onSubmit: any;
  loading: boolean;
}) {
  const red = useThemeColor("red");

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
            textContentType="password"
            autoComplete="password"
            placeholder={i18n.t("password")}
            style={styles.input}
          />
        )}
      />
      <View style={styles.buttons}>
        <Button
          onPress={onSubmit}
          buttonText={i18n.t("cancel_suscription")}
          buttonStyle={{
            ...styles.button,
            backgroundColor: red,
            borderColor: red,
          }}
          activityIndicator={loading}
        />
      </View>
    </View>
  );
}
