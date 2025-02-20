import * as React from "react";
import Icon from "@atoms/icon";
import Button from "@atoms/button";
import Text from "@atoms/text";
import i18n from "@hooks/useLocalize";
import useThemeColor from "@hooks/useThemeColor";
import InputForm from "@molecules/inputForm";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import { FONT_SIZE_24 } from "@constants/typographies";
import PaymentMethodChange from "@molecules/paymentMethodChange";
import styles from "./styles";

export default function ChangePlanFormPart({
  style,
  onPress,
  control,
  onChangePlan,
  plan,
}: {
  style: object;
  onPress: any;
  control: any;
  onChangePlan: any;
  plan?: any;
}) {
  const white50 = useThemeColor("white50");
  const gray = useThemeColor("gray");

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
      {plan && (
        <PaymentMethodChange
          style={styles.plan}
          planStyle={{...styles.plan_container, backgroundColor: gray}}
          buttonStyle={styles.plan_button}
          name={i18n.t("plan_name", { name: plan.name})}
          price={plan.price}
          onPress={onChangePlan}     
          buttonText={<Text
            text={i18n.t("change")}
            color={"primary"}
            size={"p"}
            weight={"bold"}
          />}     
        />
      )}
      <Button
        buttonText={i18n.t("change_plan")}
        buttonStyle={styles.button}
        onPress={onPress}
      />
    </View>
  );
}
