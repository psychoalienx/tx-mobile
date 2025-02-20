import * as React from "react";
import { View } from "react-native";
import Layout from "@layouts/auth";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import useThemeColor from "@hooks/useThemeColor";
import EditPaymentMethodPart from "@components/organisms/editPaymentMethodPart";
import styles from "./styles";

export default ({
  goTo,
  methods,
  onPressItem,
  loading,
}: {
  goTo: any;
  methods?: any;
  onPressItem: any;
  loading?: any;
}) => {
  const blackLight = useThemeColor("blackLight");

  return (
    <Layout
      style={{...styles.content, backgroundColor: blackLight }}
      stylesContainer={{...styles.container }}
      closeButton={() => goTo("back")}
    >
      <View style={styles.title}>
        <Text
          text={i18n.t("edit_payment_method")}
          color={"white"}
          weight={"bold"}
          size={"h4"}
        />
      </View>
      <View style={styles.desc}>
        <Text
          text={i18n.t("edit_payment_method_desc")}
          color={"white"}
          size={"p"}
          weight={"light"}
        />
      </View>
      <View style={styles.methods}>
        <EditPaymentMethodPart goTo={goTo} items={methods} onPress={onPressItem} />
      </View>
    </Layout>
  );
};
