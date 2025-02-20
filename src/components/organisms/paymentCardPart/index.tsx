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

export default function PaymentCardPart({
  style,
  onPress,
  control,
  onChangePlan,
  plan,
  reference,
}: {
  style: object;
  onPress: any;
  control: any;
  onChangePlan: any;
  plan?: any;
  reference?: any;
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
            textContentType="none"
            autoComplete="off"
            placeholder={i18n.t("referential_code") + " " + i18n.t("opcional")}
            style={styles.input}
            rightContent={() =>
              reference?.amount && (
                <Text
                  text={reference.amount}
                  color={"white"}
                  weight={"bold"}
                  size={"h5"}
                />
              )
            }
          />
        )}
      />
      <View style={styles.decs}>
        <Text
          text={i18n.t("enter_your_referential_code")}
          color={"white"}
          size={"p"}
          weight={"light"}
        />
      </View>
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
        buttonText={i18n.t("subscribe")}
        buttonStyle={styles.button}
        onPress={onPress}
      />
    </View>
  );
}
