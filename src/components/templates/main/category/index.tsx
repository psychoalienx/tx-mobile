import * as React from "react";
import { View } from "react-native";
import { FONT_SIZE_16 } from "@constants/typographies";
import styles from "./styles";
import Layout from "@layouts/primary";
import useThemeColor from "@hooks/useThemeColor";
import Button from "@atoms/button";
import Icon from "@atoms/icon";
import TabListItem from "@molecules/tabListItem";
import ContentGrid from "@organisms/contentGrid";

const Template = ({
  category,
  goTo,
  loading,
  items,
  onPress,
  title,
  tabSelected,
  setTab,
}: {
  category: string;
  goTo: any;
  loading: boolean;
  items: any;
  onPress: any;
  title: string;
  tabSelected: any;
  setTab: any;
}) => {
  const blackLight = useThemeColor("blackLight");
  const white = useThemeColor("white");
  return (
    <Layout
      style={{ ...styles.container, backgroundColor: blackLight }}
      title={title}
      scroll={false}
    >
      <View style={styles.category}>
        <Button
          buttonStyle={{
            ...styles.button,
          }}
          textStyle={styles.button_text}
          iconRight={
            <Icon name={"chevronDown"} size={FONT_SIZE_16} color={white} />
          }
          buttonText={category}
          onPress={() => goTo("categories")}
        />
      </View>
      <View style={[styles.tabs]}>
        {items.map((item: any, index: number) => (
          <TabListItem
            key={`tab_${item?.slug ?? index}`}
            title={item?.title}
            selected={item?.slug === tabSelected}
            onPress={() => setTab?.(item?.slug)}
          />
        ))}
      </View>
      <View style={{ ...styles.content }}>
        <ContentGrid
          items={(items?.find?.(itm => itm.slug === tabSelected)?.items || [])}
          onPress={onPress}
          loading={loading} />
      </View>
    </Layout>
  );
};
export default Template;
