import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import i18n from "@hooks/useLocalize";
import { View } from "react-native";
import Text from "@atoms/text";
import CancelSuscriptionPart from "@organisms/cancelSuscriptionPart";

const Template = ({
  goTo,
  control,
  onSubmit,
  loading,
}: {
  goTo: any;
  control: any;
  onSubmit: any;
  loading: boolean;
}) => {
  return (
    <Layout
      style={styles.container}
      title={i18n.t("cancel_suscription")}
      backButton={() => goTo("back")}
    >
      <View style={styles.desc}>
        <Text
          text={i18n.t("cancel_suscription_desc")}
          size="p"
          weight="light"
          color="white"
        />
      </View>
      <View style={styles.form}>
        <CancelSuscriptionPart
          loading={loading}
          control={control}
          onSubmit={onSubmit}
        />
      </View>
    </Layout>
  );
};
export default Template;
