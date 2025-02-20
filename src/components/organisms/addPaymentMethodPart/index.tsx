import * as React from "react";
import Icon from "@atoms/icon";
import Button from "@atoms/button";
import i18n from "@hooks/useLocalize";
import useThemeColor from "@hooks/useThemeColor";
import InputForm from "@molecules/inputForm";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import { FONT_SIZE_24 } from "@constants/typographies";
import styles from "./styles";

export default function AddPaymentMethodPart({
  style,
  onPress,
  control,
}: {
  style: object;
  onPress: any;
  control: any;
}) {
  const white50 = useThemeColor("white50");
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
            placeholder={i18n.t("name_printed_on_card")}
            style={styles.input}
          />
        )}
      />
      <Controller
        control={control}
        name={"number"}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <InputForm
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error}
            textContentType="creditCardNumber"
            autoComplete="cc-number"
            placeholder={i18n.t("card_number")}
            style={styles.input}
          />
        )}
      />
      <Controller
        control={control}
        name={"date"}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <InputForm
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error}
            textContentType="none"
            autoComplete="cc-exp"
            placeholder={i18n.t("expiration_date")}
            style={styles.input}
            rightContent={() => (
              <Icon name={"calendar"} size={FONT_SIZE_24} color={white50} />
            )}
          />
        )}
      />
      <Controller
        control={control}
        name={"cvv"}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <InputForm
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={error}
            textContentType="none"
            autoComplete="cc-csc"
            placeholder={i18n.t("cvv")}
            style={styles.input}
            rightContent={() => (
              <Icon name={"help"} size={FONT_SIZE_24} color={white50} />
            )}
          />
        )}
      />
      <Button
        buttonText={i18n.t("add_payment_method")}
        buttonStyle={styles.button}
        onPress={onPress}
      />
    </View>
  );
}
