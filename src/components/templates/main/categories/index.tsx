import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import useThemeColor from "@hooks/useThemeColor";
import { View } from "react-native";
import CategoriesGrid from "@molecules/categoriesGrid";

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
  const blackLight = useThemeColor("blackLight");
  return (
    <Layout
      style={{ ...styles.container, backgroundColor: blackLight }}
      scroll={false}
      backButton={() => goTo("back")}
      title={title}
    >
      <View style={{ ...styles.content}}>
        <CategoriesGrid
          items={items}
          onPress={onPress}
          loading={loading}
        />
      </View>
    </Layout>
  );
};
export default Template;
