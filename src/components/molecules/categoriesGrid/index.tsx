import * as React from "react";
import { View, Image } from "react-native";
import Button from "@atoms/button";
import Text from "@atoms/text";
import VerticalList from "@atoms/verticalList";
import useThemeColor from "@hooks/useThemeColor";
import styles from "./styles";

export default function CategoriesGrid({
  loading,
  items,
  onPress,
}: {
  loading: boolean;
  items: any;
  onPress: any;
}) {
  const gray = useThemeColor("black");
  return (
    <VerticalList
      columns={3}
      items={items}
      listStyles={styles.list}
      type="categoriesGrid"
      render={({ item, index }: { item: any; index: number }) => (
        <View style={styles.container}>
          <Button
            onPress={() => onPress(item)}
            buttonText={
              <View style={[styles.content]}>
                <View style={{ ...styles.icon, backgroundColor: gray }}>
                  <Image source={item.icon} style={styles.image} />
                </View>
                <View style={styles.text}>
                  <Text
                    text={item.text}
                    color="white"
                    size="h7"
                    weight="regular"
                    align="center"
                  />
                </View>
              </View>
            }
            buttonStyle={{
              ...styles.touch,
            }}
          />
        </View>
      )}
      header={styles.header_footer}
      separator={styles.separator}
      footer={styles.header_footer}
      loading={loading}
    />
  );
}
