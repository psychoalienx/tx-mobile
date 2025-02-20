import * as React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableNativeFeedback,
  GestureResponderEvent,
} from "react-native";
import styles from "./styles";
import useThemeColor from "@hooks/useThemeColor";

export default function Button({
  buttonText,
  onPress,
  iconLeft,
  iconLeftHide = false,
  iconRight,
  buttonContainerStyle,
  buttonStyle,
  textStyle,
  activityIndicator = false,
  size = "small",
  disabled = false,
  activityIndicatorColor = useThemeColor("white"),
}: {
  buttonText: string | React.ReactElement;
  onPress: (event: GestureResponderEvent) => void;
  iconLeft?: React.ReactElement;
  iconLeftHide?: boolean;
  iconRight?: React.ReactElement;
  buttonContainerStyle?: object;
  buttonStyle?: object;
  textStyle?: object;
  activityIndicator?: boolean;
  size?: number | "small" | "large" | undefined;
  disabled?: boolean;
  activityIndicatorColor?: string;
}) {
  const primary = useThemeColor("primary");
  const white = useThemeColor("white");
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      style={[styles.container, buttonContainerStyle]}
      disabled={disabled}
    >
      <View
        style={[
          styles.button,
          { borderColor: primary, backgroundColor: primary },
          buttonStyle,
        ]}
      >
        {activityIndicator ? (
          <ActivityIndicator size={size} color={activityIndicatorColor} />
        ) : iconLeft || iconRight ? (
          <>
            {iconLeftHide === false && (
              <View style={styles.icon}>{iconLeft}</View>
            )}
            <View style={styles.textContainer}>
              <Text style={[styles.text, { color: white }, textStyle]}>
                {buttonText}
              </Text>
            </View>
            <View style={styles.icon}>{iconRight}</View>
          </>
        ) : typeof buttonText === "string" ? (
          <Text style={[styles.text, { color: white }, textStyle]}>
            {buttonText}
          </Text>
        ) : (
          buttonText
        )}
      </View>
    </TouchableNativeFeedback>
  );
}
