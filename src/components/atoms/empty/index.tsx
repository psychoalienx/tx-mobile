import * as React from "react";
import { Animated } from "react-native";
import styles from "./styles";
import useThemeColor from "@hooks/useThemeColor";

export default function Empty({ customStyles }: { customStyles: object }) {
  const backgroundColor = useThemeColor("black");
  const fadeAnim = React.useRef(new Animated.Value(0.2)).current;
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.2,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);
  return (
    <Animated.View
      style={[
        styles.default,
        { backgroundColor: backgroundColor, opacity: fadeAnim },
        customStyles,
      ]}
    />
  );
}
