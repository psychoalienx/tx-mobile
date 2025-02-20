import * as React from "react";
import Text from "@atoms/text";
import Button from "@atoms/button";
import i18n from "@hooks/useLocalize";
import useThemeColor from "@hooks/useThemeColor";
import InputForm from "@molecules/inputForm";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import styles from "./styles";

export default function ReferredUserPart({
  style,
  data,
  onPress,
  onSkip,
  control,
}: {
  style: object;
  data?: string;
  onPress: any;
  onSkip?: any;
  control: any;
}) {
  const white = useThemeColor("white");
  return (
    <View style={[styles.container, style]}>
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
            placeholder={i18n.t("referred_user")}
            style={styles.input}
          />
        )}
      />
      {data === undefined ? (
        <Button
          buttonText={i18n.t("skip")}
          buttonStyle={[
            styles.button_skip,
            {
              borderColor: white,
            },
          ]}
          onPress={onSkip}
        />
      ) : (
        <>
          <View style={styles.data}>
            <Text text={i18n.t("subscription_time_won")} color={"white"} size={"h5"} align={"center"} weight={"light"} />
            <Text text={data} color={"white"} size={"h7"} align={"center"} weight={"bold"} />
          </View>
          <Button
            buttonText={i18n.t("continue")}
            buttonStyle={styles.button}
            onPress={onPress}
          />
        </>
      )}
    </View>
  );
}
