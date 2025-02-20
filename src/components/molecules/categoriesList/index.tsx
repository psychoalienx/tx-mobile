import * as React from "react";
import Button from "@atoms/button";
import VerticalList from "@atoms/verticalList";
import useThemeColor from "@hooks/useThemeColor";
import styles from "./styles";

export default function CategoriesList({
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
      type="categoriesList"
      render={({ item, index }: { item: any; index: number }) => (
        <Button
          onPress={() => onPress(item)}
          buttonText={item.text}
          buttonStyle={{
            ...styles.card,
            backgroundColor: gray,
          }}
          textStyle={styles.card_text}
        />
      )}
      header={styles.header_footer}
      separator={styles.separator}
      footer={styles.header_footer}
      loading={loading}
    />
  );
}
