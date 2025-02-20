import * as React from "react";
import { View, KeyboardTypeOptions } from "react-native";
import Input from "@atoms/input";
import Text from "@atoms/text";
import { Ionicons } from "@expo/vector-icons";
import useThemeColor from "@hooks/useThemeColor";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FONT_SIZE_20 } from "@constants/typographies";
import Icon from "@atoms/icon";

export default function InputForm({
  value,
  error,
  defaultValue,
  placeholder,
  keyboardType = "default",
  autoComplete = "off",
  textContentType = "none",
  style,
  styleInput,
  placeholderTextColor,
  editable = true,
  multiline = false,
  secureTextEntry = false,
  onClear,
  onChange,
  onBlur,
  onFocus,
  leftContent,
  rightContent,
  errorMessage,
}: {
  value?: string;
  error?: any;
  defaultValue?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  autoComplete?: any;
  style?: any;
  styleInput?: any;
  placeholderTextColor?: string;
  textContentType?: any;
  editable?: boolean;
  multiline?: boolean;
  secureTextEntry?: boolean;
  onClear?: any;
  onChange?: any;
  onBlur?: any;
  onFocus?: any;
  leftContent?: any;
  rightContent?: any;
  errorMessage?: boolean;
}) {
  const black = useThemeColor("black");
  const gray = useThemeColor("gray");
  const white = useThemeColor("white");
  const red = useThemeColor("red");
  const [security, setSecurity] = React.useState(secureTextEntry);
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        {leftContent !== undefined ? (
          <View style={styles.left}> {leftContent}</View>
        ) : (
          <></>
        )}
        <Input
          style={styleInput}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          error={error}
          defaultValue={defaultValue}
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={security}
          keyboardType={keyboardType}
          multiline={multiline}
          autoComplete={autoComplete}
          textContentType={textContentType}
        />
        {secureTextEntry !== false ||
        rightContent !== undefined ||
        onClear !== undefined ||
        error !== undefined ? (
          <View style={styles.right}>
            {secureTextEntry !== false ? (
              <TouchableOpacity onPress={() => setSecurity(!security)}>
                <View style={styles.icon}>
                  <Icon
                    name={security ? "eyeClose" : "eye"}
                    size={FONT_SIZE_20}
                    color={white}
                  />
                </View>
              </TouchableOpacity>
            ) : (
              <></>
            )}
            {onClear !== undefined ? (
              <TouchableOpacity onPress={() => onClear()}>
                <View style={styles.icon}>
                  <Ionicons
                    name="ios-close-circle-outline"
                    size={FONT_SIZE_20}
                    color={white}
                  />
                </View>
              </TouchableOpacity>
            ) : (
              <></>
            )}
            {rightContent !== undefined ? rightContent() : <></>}
            {error !== undefined ? (
              <View style={styles.icon}>
                <Ionicons
                  name="alert-circle-outline"
                  size={FONT_SIZE_20}
                  color={red}
                />
              </View>
            ) : (
              <></>
            )}
          </View>
        ) : (
          <></>
        )}
      </View>
      {errorMessage === true && error !== undefined ? (
        <View style={styles.error}>
          <Text text={error?.message} size="p" color="red" />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}
