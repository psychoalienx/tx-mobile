import * as React from "react";
import { View } from "react-native";
import Button from "@atoms/button";
import Text from "@atoms/text";
import i18n from "@hooks/useLocalize";
import styles from "./styles";
import useThemeColor from "@hooks/useThemeColor";
import { Controller } from "react-hook-form";
import InputForm from "@components/molecules/inputForm";

export default function ChangePhoneForm({
  control,
  onCancel,
  onSubmit,
  loading,
  phone,
}: {
  control: any;
  onCancel: any;
  onSubmit: any;
  loading: boolean;
  phone: string;
}) {
  const black = useThemeColor("black");
  const white = useThemeColor("white");

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text
          text={
            <>
              {i18n.t("current_phone") + ": "}
              <Text text={phone} color="white" size="p" weight="bold" />
            </>
          }
          color="white"
          size="small"
          weight="light"
        />
      </View>
      <View style={styles.main}>
        <Controller
          control={control}
          name={"phone"}
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
              placeholder={i18n.t("new_phone")}
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
