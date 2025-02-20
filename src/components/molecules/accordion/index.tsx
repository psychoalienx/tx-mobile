import * as React from "react";
import { View, UIManager, Platform, LayoutAnimation } from "react-native";
import useThemeColor from "@hooks/useThemeColor";
import Button from "@atoms/button";
import Text from "@atoms/text";
import Icon from "@atoms/icon";
import styles from "./styles";
import { FONT_SIZE_24 } from "@constants/typographies";

export default function Accordion({
  title,
  children,
  visible = false,
}: {
  title?: any;
  children?: any;
  visible?: any;
}) {
  const white = useThemeColor("white");
  const gray = useThemeColor("gray");
  const black = useThemeColor("black");

  const [isVisible, setIsVisible] = React.useState(visible);

  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleOpen = () => {
    setIsVisible((value) => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <>
      <Button
        onPress={toggleOpen}
        buttonText={
          <View style={{ ...styles.button_container }}>
            <View style={{ ...styles.button_text }}>
              <Text text={title} color="white" size="h7" weight="bold" />
            </View>
            <View style={{ ...styles.button_icon }}>
              <Icon
                name={isVisible ? "chevronUp" : "chevronDown"}
                size={FONT_SIZE_24}
                color={white}
              />
            </View>
          </View>
        }
        buttonStyle={{
          ...styles.button,
          backgroundColor: black,
          borderColor: gray,
        }}
      />
      <View style={[styles.list, !isVisible ? styles.hidden : undefined]}>
        {children}
      </View>
    </>
  );
}
