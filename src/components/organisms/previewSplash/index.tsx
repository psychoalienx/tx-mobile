import * as React from "react";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel, { Pagination } from "react-native-snap-carousel";
import i18n from "@hooks/useLocalize";
import useThemeColor from "@hooks/useThemeColor";
import Button from "@atoms/button";
import Text from "@atoms/text";
import Tabs from "@molecules/tabs";
import { ImageBackground, View } from "react-native";
import styles from "./styles";

export default function PreviewSplash({
  items,
  onPlay,
  onPress,
  onTab,
}: {
  items?: any;
  onPlay: any;
  onPress: any;
  onTab: any;
}) {
  const white = useThemeColor("white");
  const primary = useThemeColor("primary");
  const gray = useThemeColor("gray");
  const black = useThemeColor("black");

  const width = Dimensions.get("window").width;

  const [carousel, setCarousel] = React.useState(false);
  const [activeSlide, setActiveSlide] = React.useState(0);

  const pagination = () => {
    return (
      <Pagination
        dotsLength={items?.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.pagination_container}
        dotElement={
          <View
            style={{ ...styles.pagination_item, backgroundColor: primary }}
          ></View>
        }
        inactiveDotElement={
          <View
            style={{ ...styles.pagination_item, backgroundColor: gray }}
          ></View>
        }
      />
    );
  };

  const renderItem = ({ item, index }) => {
    return (
      <ImageBackground source={item?.splash} style={styles.container}>
        <LinearGradient
          colors={[black, "transparent"]}
          style={styles.overlay_bottom}
          start={[0.9, 1.0]}
          end={[0.9, 0.0]}
          locations={[0.2, 1.0]}
        />
        <View style={styles.preview_desc}>
          <View style={styles.title}>
            <Text text={item?.title} size="h3" color="white" weight="bold" />
          </View>
          <View style={styles.tabs}>
            <Tabs
              items={item?.tabs}
              selected={item?.tabSelected}
              onPress={onTab}
            />
          </View>
          <View style={styles.buttons}>
            <Button
              buttonStyle={{
                ...styles.button,
                ...styles.button_first,
                borderColor: white,
                backgroundColor: white,
              }}
              textStyle={{
                ...styles.button_text,
                color: black,
              }}
              buttonText={i18n.t("play")}
              onPress={() => onPlay(item)}
            />
            <Button
              buttonStyle={styles.button}
              textStyle={styles.button_text}
              buttonText={i18n.t("more_info")}
              onPress={() => onPress(item)}
            />
          </View>
        </View>
      </ImageBackground>
    );
  };

  return (
    <>
      <Carousel
        ref={(element) => {
          setCarousel(element);
        }}
        autoplay={true}
        layout={"default"}
        data={items}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        loop={true}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      {pagination()}
    </>
  );
}
