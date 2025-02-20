import * as React from "react";
import Button from "@atoms/button";
import Text from "@atoms/text";
import i18n from "@hooks/useLocalize";
import useThemeColor from "@hooks/useThemeColor";
import InputCode from "@molecules/inputCode";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import PaymentMethodChange from "@molecules/paymentMethodChange";
import styles from "./styles";

export default function PaymentCodePart({
  style,
  onPress,
  control,
  success,
  onChangePlan,
  plan,
}: {
  style: object;
  onPress: any;
  control: any;
  success?: any;
  onChangePlan: any;
  plan?: any;
}) {
  const white50 = useThemeColor("white50");
  return (
    <View style={[styles.container, style]}>
      <Controller
        control={control}
        name={"code"}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <InputCode
            title={i18n.t("payment_code")}
            value={value}
            error={error}
            success={success}
            onChange={onChange}
            onBlur={onBlur}
            quantity={5}
          />
        )}
      />      
      {plan && (
        <PaymentMethodChange
          style={styles.plan}
          name={plan.name}
          price={plan.price}
          onPress={onChangePlan}
          buttonText={<Text
            text={i18n.t("change")}
            color={"white"}
            size={"p"}
            weight={"light"}
          />} 
        />
      )}
      <Button
        buttonText={i18n.t("continue")}
        buttonStyle={styles.button}
        onPress={onPress}
      />
    </View>
  );
}
