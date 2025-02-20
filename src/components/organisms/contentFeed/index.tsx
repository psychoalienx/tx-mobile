import ContentList from "@molecules/contentList";
import * as React from "react";
import { View } from "react-native";
import styles from "./styles";

export default function ContentFeed({
  items,
  onPress,
  loading,
}: {
  items: any;
  onPress: any;
  loading: any;
}) {
  return (
    <View style={styles.container}>
      {items.map((item: any, index: number) => (
        <ContentList
          key={`contentlist_${index}`}
          title={item.title}
          previewSize={item?.previewSize}
          icon={item?.icon}
          slug={item.slug}
          items={item.items}
          loading={loading}
          onPress={onPress}
        />
      ))}
    </View>
  );
}
