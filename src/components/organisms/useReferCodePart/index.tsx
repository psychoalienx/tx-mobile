import * as React from "react";
import { View } from "react-native";
import Button from "@atoms/button";
import Icon from "@atoms/icon";
import i18n from "@hooks/useLocalize";
import styles from "./styles";
import useThemeColor from "@hooks/useThemeColor";
import { Controller } from "react-hook-form";
import InputForm from "@components/molecules/inputForm";
import { FONT_SIZE_24 } from "@constants/typographies";

export default function UseReferCodePart({
  control,
  onSubmit,
  loading,
  isValid,
}: {
  control: any;
  onSubmit: any;
  loading: boolean;
  isValid: string;
}) {
  const primary = useThemeColor("primary");

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={"code"}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <InputForm
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error}
            placeholder={i18n.t("redeem_referral_code_optional")}
            style={styles.input}
            rightContent={() => {
              return isValid ? (
                <Icon name={"check"} size={FONT_SIZE_24} color={primary} />
              ) : null;
            }}
          />
        )}
      />
      <View style={styles.buttons}>
        <Button
          onPress={onSubmit}
          buttonText={i18n.t("redeem_code")}
          buttonStyle={styles.button}
          activityIndicator={loading}
        />
      </View>
    </View>
  );
}
