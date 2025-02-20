import * as React from "react";
import { KeyboardTypeOptions, TextInput } from "react-native";
import useThemeColor from "@hooks/useThemeColor";
import styles from "./styles";
import { FieldError } from "react-hook-form";

export default function Input({
  value,
  error,
  defaultValue,
  placeholder,
  keyboardType = "default",
  autoComplete = "off",
  textContentType = "none",
  style,
  placeholderTextColor,
  editable = true,
  multiline = false,
  secureTextEntry = false,
  onChange,
  onBlur,
  onFocus,
}: {
  value?: string;
  error?: FieldError;
  defaultValue?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  autoComplete?: any;
  style?: any;
  placeholderTextColor?: string;
  textContentType?: any;
  editable?: boolean;
  multiline?: boolean;
  secureTextEntry?: boolean;
  onChange?: any;
  onBlur?: any;
  onFocus?: any;
}) {
  const white = useThemeColor("white");
  const white50 = useThemeColor("white50");
  const gray = useThemeColor("gray");
  const red = useThemeColor("red");

  return (
    <TextInput
      style={[
        styles.input,
        { backgroundColor: gray, color: white, borderColor: gray },
        error !== undefined ? { borderColor: red } : {},
        style,
      ]}
      onChangeText={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      defaultValue={defaultValue}
      editable={editable}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor ?? white50}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      multiline={multiline}
      autoCompleteType={autoComplete}
      textContentType={textContentType}
      autoCapitalize="none"
    />
  );
}
