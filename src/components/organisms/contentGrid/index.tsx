import * as React from "react";
import Button from "@atoms/button";
import Image from "@atoms/image";
import { ImageSourcePropType, View } from "react-native";
import styles from "./styles";
import VerticalList from "@atoms/verticalList";

export default function ContentGrid({
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
      <VerticalList
        type={`content_grid`}
        columns={3}
        items={items}
        loading={loading}
        header={styles.header_footer}
        footer={styles.header_footer}
        separator={styles.separator}
        render={({
          item,
          index,
        }: {
          item: { image: ImageSourcePropType };
          index: number;
        }) => (
          <Button
            buttonText={<Image src={item.image} style={styles.image} />}
            buttonStyle={{
              ...styles.item,
              marginRight: (index + 1) % 3 ? 1 : 0,
            }}
            onPress={() => onPress(item)}
          />
        )}
      />
    </View>
  );
}
