import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import useThemeColor from "@hooks/useThemeColor";
import { View } from "react-native";
import CategoriesGrid from "@molecules/categoriesGrid";
import Text from "@atoms/text";
import i18n from "@hooks/useLocalize";

const Template = ({
  loading,
  items,
  onPress,
}: {
  goTo: any;
  loading: boolean;
  items: any;
  onPress: any;
}) => {
  const blackLight = useThemeColor("blackLight");
  return (
    <Layout
      style={{ ...styles.container, backgroundColor: blackLight }}
      scroll={false}
      title={i18n.t("iptv")}
    >
      <View style={styles.title}>
        <Text
          text={i18n.t("categories")}
          color="white"
          size="h7"
          weight="medium"
        />
      </View>
      <View style={styles.content}>
        <CategoriesGrid items={items} onPress={onPress} loading={loading} />
      </View>
    </Layout>
  );
};
export default Template;
