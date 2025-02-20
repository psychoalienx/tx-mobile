import * as React from "react";
import { Image, ImageBackground, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import useThemeColor from "@hooks/useThemeColor";
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  NativeModules,
} from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@atoms/button";
import Icon from "@atoms/icon";
import Text from "@atoms/text";
import { FONT_SIZE_24 } from "@constants/typographies";

export default function AuthLayout({
  children,
  style,
  stylesContainer,
  scroll = true,
  bg = false,
  scrollRef,
  radialTop,
  radialBottom,
  backButton,
  closeButton,
  title,
  subTitle,
}: {
  children?: any;
  style?: object;
  stylesContainer?: object;
  bg?: boolean;
  scroll?: boolean;
  scrollRef?: any;
  radialTop?: boolean;
  radialBottom?: boolean;
  backButton?: any;
  closeButton?: any;
  title?: any;
  subTitle?: any;
}) {
  const white = useThemeColor("white");
  const blackLight = useThemeColor("blackLight");
  const { StatusBarManager } = NativeModules;
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (StatusBarManager?.getHeight)
      StatusBarManager.getHeight((statusBarFrameData: any) => {
        setHeight(statusBarFrameData.height);
      });
  }, []);

  const radialTopImage = (
    <Image
      style={styles.radialTop}
      source={require("@assets/images/radialTop.png")}
    />
  );

  const radialBottomImage = (
    <Image
      style={styles.radialBottom}
      source={require("@assets/images/radialBottom.png")}
    />
  );

  const backButtonElement = (
    <Button
      buttonStyle={styles.button}
      buttonText={<Icon name="arrowLeft" size={FONT_SIZE_24} color={white} />}
      onPress={backButton}
    />
  );

  const content = (
    <View
      style={{
        ...styles.container,
        backgroundColor: bg ? "transparent" : blackLight,
      }}
    >
      {radialTop === true && radialTopImage}
      {radialBottom === true && radialBottomImage}
      <View style={styles.content}>
        <SafeAreaView style={styles.main}>
          <View style={styles.header}>
            <View style={styles.backButton}>
              {backButton !== undefined && backButtonElement}
            </View>
            <View style={styles.separator}>
              {title !== undefined && (
                <Text
                  text={title}
                  color={"white"}
                  size={"h3"}
                  weight={"bold"}
                />
              )}
            </View>
            {closeButton !== undefined && (
              <View style={styles.closeButton}>
                <Button
                  buttonStyle={styles.button}
                  buttonText={
                    <Icon name="close" size={FONT_SIZE_24} color={white} />
                  }
                  onPress={closeButton}
                />
              </View>
            )}
          </View>
          {subTitle !== undefined && (
            <View style={styles.subTitle}>
              <Text
                text={subTitle}
                color={"white"}
                size={"p"}
                weight={"bold"}
              />
            </View>
          )}
          {scroll === true ? (
            <ScrollView
              ref={scrollRef}
              alwaysBounceVertical={false}
              showsVerticalScrollIndicator={false}
              bounces={false}
              style={styles.scroll}
              contentContainerStyle={[styles.scroll_content, stylesContainer]}
            >
              <KeyboardAvoidingView
                style={[styles.key, style]}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={height}
              >
                {children}
              </KeyboardAvoidingView>
            </ScrollView>
          ) : (
            <KeyboardAvoidingView
              style={[styles.key, style]}
              behavior={Platform.OS === "ios" ? "padding" : undefined}
              keyboardVerticalOffset={height}
            >
              {children}
            </KeyboardAvoidingView>
          )}
        </SafeAreaView>
      </View>
      <StatusBar style="light" translucent={true} />
    </View>
  );

  return bg ? (
    <ImageBackground
      style={{ ...styles.background, backgroundColor: blackLight }}
      source={require("@assets/images/background.png")}
    >
      {content}
    </ImageBackground>
  ) : (
    content
  );
}
