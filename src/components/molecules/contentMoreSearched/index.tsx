import * as React from "react";
import { View, Image } from "react-native";
import Button from "@atoms/button";
import Text from "@atoms/text";
import VerticalList from "@atoms/verticalList";
import useThemeColor from "@hooks/useThemeColor";
import styles from "./styles";

export default function ContentMoreSearched({
  loading,
  items,
  onPress,
}: {
  loading: boolean;
  items: any;
  onPress: any;
}) {
  const gray = useThemeColor("gray");
  return (
    <VerticalList
      items={items}
      type="contentMoreSearched"
      render={({ item, index }: { item: any; index: number }) => (
        <Button
          onPress={() => onPress(item)}
          buttonText={
            <View style={[styles.content]}>
              <View
                style={{ ...styles.image_container, backgroundColor: gray }}
              >
                <Image source={item.image} style={styles.image} />
              </View>
              <View style={styles.text}>
                <Text text={item.text} color="white" size="h7" weight="bold" />
              </View>
            </View>
          }
          buttonStyle={{
            ...styles.button,
          }}
        />
      )}
      header={styles.separator}
      separator={styles.separator}
      footer={styles.footer}
      loading={loading}
    />
  );
}
