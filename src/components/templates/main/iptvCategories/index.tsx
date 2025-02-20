import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import useThemeColor from "@hooks/useThemeColor";
import { View } from "react-native";
import VerticalList from "@atoms/verticalList";
import Button from "@atoms/button";

const Template = ({
  goTo,
  loading,
  items,
  onPress,
  title,
}: {
  goTo: any;
  loading: boolean;
  items: any;
  onPress: any;
  title: string;
}) => {
  const gray = useThemeColor("black");
  const blackLight = useThemeColor("blackLight");
  return (
    <Layout
      style={{ ...styles.container, backgroundColor: blackLight }}
      scroll={false}
      backButton={() => goTo("iptv")}
      title={title}
    >
      <View style={{ ...styles.content }}>
        <VerticalList
          loading={loading}
          items={items}
          type="iptvCategories"
          render={({ item, index }: { item: any; index: number }) => (
            <Button
              onPress={() => onPress(item)}
              buttonText={item.text}
              buttonStyle={{
                backgroundColor: gray,
                borderColor: gray,
                ...styles.button,
              }}
              textStyle={{
                ...styles.button_text,
              }}
            />
          )}
          header={styles.header_footer}
          separator={styles.separator}
          footer={styles.header_footer}
        />
      </View>
    </Layout>
  );
};
export default Template;
