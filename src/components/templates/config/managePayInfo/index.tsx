import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import i18n from "@hooks/useLocalize";
import { View } from "react-native";
import Text from "@atoms/text";
import ManagePayInfoPart from "@components/organisms/managePayInfoPart";

const Template = ({
  goTo,
  methods,
  onPressItem,
}: {
  goTo: any;
  methods: any;
  onPressItem: any;
}) => {
  return (
    <Layout
      style={styles.container}
      scroll={false}
      title={i18n.t("manage_payinfo")}
      backButton={() => goTo("back")}
    >
      <View style={styles.desc}>
        <Text
          text={i18n.t("manage_payinfo_desc")}
          size="p"
          weight="light"
          color="white"
        />
      </View>
      <ManagePayInfoPart goTo={goTo} items={methods} onPress={onPressItem} />
    </Layout>
  );
};
export default Template;
