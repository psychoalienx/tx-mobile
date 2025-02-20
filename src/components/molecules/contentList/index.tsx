import * as React from "react";
import {
  View,
  TouchableNativeFeedback,
  ImageSourcePropType,
  Image,
} from "react-native";
import Text from "@atoms/text";
import styles from "./styles";
import HorizontalList from "@atoms/horizontalList";
import useThemeColor from "@hooks/useThemeColor";

export default function ContentList({
  title,
  icon,
  previewSize = "small",
  slug,
  items,
  loading,
  onPress
}: {
  title: string;
  icon?: any;
  previewSize: string;
  slug: string;
  items: [];
  loading: boolean;
  onPress?: any;
}) {
  const primary = useThemeColor("primary");

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Text text={title} size="h7" weight="medium" color="white" />
      </View>
      <View style={styles.content}>
        <HorizontalList
          type={`content_list_${slug}`}
          items={items}
          loading={loading}
          separator={styles.separator}
          render={({ item }: { item: { image: ImageSourcePropType, progress?: number } }) => (
            <TouchableNativeFeedback onPress={() => onPress(item)}>
              <View style={styles[`preview_${previewSize}`]}>
                <Image source={item.image} style={styles.image} />
                {!!item.progress && <View style={styles.progressBarContainer}>
                  <View style={styles.progressBarBackground} />
                  <View style={[styles.progressBarForeground, { width: `${item.progress}%`, backgroundColor: primary }]} />
                </View>}
              </View>
            </TouchableNativeFeedback>
          )}
        />
      </View>
    </View>
  );
}
