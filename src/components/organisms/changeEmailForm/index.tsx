import * as React from "react";
import { View } from "react-native";
import Button from "@atoms/button";
import Text from "@atoms/text";
import i18n from "@hooks/useLocalize";
import styles from "./styles";
import useThemeColor from "@hooks/useThemeColor";
import { Controller } from "react-hook-form";
import InputForm from "@components/molecules/inputForm";

export default function ChangeEmailForm({
  control,
  onCancel,
  onSubmit,
  loading,
  email,
}: {
  control: any;
  onCancel: any;
  onSubmit: any;
  loading: boolean;
  email: string;
}) {
  const black = useThemeColor("black");
  const white = useThemeColor("white");

  return (
    <View style={styles.container}>
      <View style={{ ...styles.box, backgroundColor: black }}>
        <View style={styles.title}>
          <Text
            text={i18n.t("current_email")}
            color="white"
            size="p"
            weight="light"
          />
        </View>
        <Text text={email} color="white" size="h7" weight="semibold" />
      </View>
      <View style={styles.main}>
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
              placeholder={i18n.t("new_email")}
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
    </View>
  );
}
