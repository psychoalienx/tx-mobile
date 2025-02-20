import * as React from "react";
import { View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import useThemeColor from "@hooks/useThemeColor";
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  NativeModules,
} from "react-native";
import Button from "@atoms/button";
import Icon from "@atoms/icon";
import Text from "@atoms/text";
import styles from "./styles";
import { FONT_SIZE_24 } from "@constants/typographies";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PrimaryLayout({
  children,
  style,
  stylesContainer,
  scroll = true,
  scrollRef,
  backButton,
  title,
  radialTop,
  radialBottom,
}: {
  children?: any;
  style?: object;
  stylesContainer?: object;
  scroll?: boolean;
  scrollRef?: any;
  backButton?: any;
  title?: any;
  radialTop?: boolean;
  radialBottom?: boolean;
}) {
  const blackLight = useThemeColor("blackLight");
  const white = useThemeColor("white");
  const { StatusBarManager } = NativeModules;
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (StatusBarManager?.getHeight)
      StatusBarManager.getHeight((statusBarFrameData: any) => {
        setHeight(statusBarFrameData.height);
      });
  }, []);

  const backButtonElement = (
    <Button
      buttonStyle={styles.button}
      buttonText={<Icon name="arrowLeft" size={FONT_SIZE_24} color={white} />}
      onPress={backButton}
    />
  );

  return (
    <View style={{ ...styles.container, backgroundColor: blackLight }}>
      {radialTop === true && (
        <Image
          style={styles.radialTop}
          source={require("@assets/images/radialTop.png")}
        />
      )}
      {radialBottom === true && (
        <View style={styles.radialBottom}>
          <Image
            style={styles.radialBottom__image}
            source={require("@assets/images/radialBottom.png")}
          />
        </View>
      )}
      <View style={styles.content}>
        <SafeAreaView style={styles.main}>
          {(backButton !== undefined || title !== undefined) && (
            <View style={styles.header}>
              {backButton !== undefined && (
                <View style={styles.backButton}>{backButtonElement}</View>
              )}
              {title !== undefined && (
                <View style={styles.title}>
                  <Text
                    text={title}
                    color={"white"}
                    size={"h3"}
                    weight={"bold"}
                  />
                </View>
              )}
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
}
