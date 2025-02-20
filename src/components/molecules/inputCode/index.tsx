import * as React from "react";
import { View } from "react-native";
import useThemeColor from "@hooks/useThemeColor";
import { FONT_SIZE_16 } from "@constants/typographies";
import styles from "./styles";
import Input from "@atoms/input";
import Text from "@atoms/text";
import Button from "@atoms/button";
import i18n from "@hooks/useLocalize";
import { FieldError } from "react-hook-form";

export default function InputCode({
  title = undefined,
  textSize = "h2",
  value,
  error,
  success,
  defaultValue,
  style,
  editable = true,
  onChange,
  onBlur,
  onFocus,
  quantity,
  onSendCode,
}: {
  title?: string;
  textSize?: string;
  value?: any;
  error?: FieldError;
  success?: boolean;
  defaultValue?: string;
  style?: any;
  editable?: boolean;
  onChange?: any;
  onBlur?: any;
  onFocus?: any;
  quantity?: number;
  onSendCode?: any;
}) {
  const white = useThemeColor("white");
  const black = useThemeColor("black");
  const grayBorder = useThemeColor("grayBorder");
  const primary = useThemeColor("primary");
  const errorColor = useThemeColor("red");
  const numbers = Array.from(Array(quantity).keys());

  const color = () => {
    if (error) return errorColor;
    if (success) return primary;
    return grayBorder;
  };

  const textTitle = () => {
    if (error) return i18n.t("incorrect_code");
    if (success) return '';// i18n.t("correct_code");
    return title;
  };

  const colorText = () => {
    if (error) return "red";
    if (success) return "primary";
    return "grayBorder";
  };

  return (
    <View style={[styles.container, style]}>
      {title !== undefined && (
        <View style={styles.title}>
          <Text
            text={textTitle()}
            size={"h7"}
            color={"white"}
            align={"center"}
            weight={"bold"}
          />
        </View>
      )}
      <Input
        style={styles.input}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        error={error}
        defaultValue={defaultValue}
        editable={editable}
      />
      <View style={styles.numbers}>
        {numbers.map((item, index) => (
          <React.Fragment key={`input_code_${item}`}>
            <View
              style={{
                ...styles.number,
                borderColor: color(),
              }}
            >
              <Text
                text={value[item] ?? ""}
                size={textSize}
                weight="light"
                color={colorText()}
              />
            </View>
            {index !== numbers.length - 1 && (
              <View style={styles.separator}></View>
            )}
          </React.Fragment>
        ))}
      </View>
      <View style={styles.message}>
        {error && (
          <>
            <Text
              text={i18n.t("code_error_message")}
              size={"p"}
              color={"white"}
              align={"center"}
            />
            {onSendCode && (<View style={styles.resend}>
              <Button
                buttonStyle={[
                  styles.button,
                  {
                    borderColor: white,
                    borderWidth: 3,
                    backgroundColor: "transparent",
                  },
                ]}
                textStyle={[
                  {
                    fontSize: FONT_SIZE_16,
                  },
                ]}
                buttonText={i18n.t("resend_code")}
                onPress={onSendCode}
              />
            </View>)}
          </>
        )}
      </View>
    </View>
  );
}
