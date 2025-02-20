import * as React from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import useThemeColor from "@hooks/useThemeColor";
import Text from "@atoms/text";
import Icon from "@atoms/icon";
import { FONT_SIZE_24 } from "@constants/typographies";
import styles from "./styles";

export default function PreviewItem({
  name,
  duration,
  image,
  desc,
  onPress,
  style,
}: {
  name: any;
  duration: any;
  image: any;
  desc?: any;
  onPress: any;
  style?: any;
}) {
  const white50 = useThemeColor("white50");
  const white = useThemeColor("white");
  const black = useThemeColor("black");

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <View style={[styles.main]}>
          <View style={styles.preview}>
            <ImageBackground source={image} style={styles.image}>
              <Icon name={"play"} size={FONT_SIZE_24} color={white} />
            </ImageBackground>
          </View>
          <View style={styles.info}>
            <Text text={name} color={"white"} size={"p"} weight={"bold"} />
            <Text text={duration || name} color={"white"} size={"small"} />
          </View>
        </View>
        {desc !== undefined && (
          <View style={[styles.desc]}>
            {console.log(desc)}
            <Text text={desc} color={"white"} size={"small"} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
