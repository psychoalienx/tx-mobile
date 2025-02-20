import * as React from "react";
import { ImageBackground, ImageSourcePropType, View } from "react-native";
import styles from "./styles";
import Text from "@atoms/text";
import useThemeColor from "@hooks/useThemeColor";
import Button from "@atoms/button";
import { LinearGradient } from "expo-linear-gradient";
import Tabs from "@components/molecules/tabs";
import i18n from "@hooks/useLocalize";

export default function PreviewDetails({
  splash,
  tabs,
  tabSelected,
  onPressTab,
  onPlay,
  title,
  synopsis,
  releaseDate,
  duration,
}: {
  splash?: any;
  tabs?: any;
  tabSelected?: any;
  onPressTab?: any;
  onPlay?: any;
  title?: any;
  synopsis?: any;
  releaseDate?: any;
  duration?: any;
}) {
  const white = useThemeColor("white");
  const blackLight = useThemeColor("blackLight");
  const black = useThemeColor("black");
  const gray = useThemeColor("gray");

  return (
    <View style={styles.container}>
      <ImageBackground source={splash} style={styles.splash}>
        <LinearGradient
          colors={[blackLight, "transparent"]}
          style={styles.overlay_bottom}
          start={[0.9, 1.0]}
          end={[0.9, 0.0]}
          locations={[0.2, 1.0]}
        />
        <View style={styles.title}>
          <Text text={title} color="white" weight="medium" size="h3" />
        </View>
      </ImageBackground>
      <View style={styles.details}>
        {tabs && (
          <View style={styles.tabs}>
            <Tabs items={tabs} selected={tabSelected} onPress={onPressTab} />
          </View>
        )}
        <View style={styles.buttons}>
          <Button
            buttonStyle={{
              ...styles.button,
              borderColor: white,
              backgroundColor: white,
            }}
            textStyle={{
              color: black,
            }}
            buttonText={i18n.t("play")}
            onPress={onPlay}
          />
        </View>
        <View style={[styles.info, { borderColor: gray }]}>
          <View style={styles.info__date}>
            <Text
              text={i18n.t("release_date")}
              color="white"
              weight="medium"
              size="p"
            />
            <Text text={releaseDate} color="white" size="p" weight="light" />
          </View>
          <View style={styles.info__duration}>
            <Text
              text={i18n.t("duration")}
              color="white"
              weight="medium"
              size="p"
            />
            <Text text={duration} color="white" size="p" weight="light" />
          </View>
        </View>
        <View style={styles.synopsis}>
          <Text
            style={styles.synopsis_title}
            text={i18n.t("synopsis")}
            color="white"
            weight="medium"
            size="p"
          />
          <Text text={synopsis} color="white" size="p" weight="light" />
        </View>
      </View>
    </View>
  );
}
