import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import i18n from "@hooks/useLocalize";
import { View } from "react-native";
import Text from "@atoms/text";
import ChangePhoneForm from "@components/organisms/changePhoneForm";

const Template = ({
  goTo,
  control,
  onSubmit,
  onCancel,
  loading,
  oldPhone,
}: {
  goTo: any;
  control: any;
  onSubmit: any;
  onCancel: any;
  loading: boolean;
  oldPhone: string;
}) => {
  return (
    <Layout
      style={styles.container}
      scroll={false}
      title={i18n.t("change_phone")}
      backButton={() => goTo("back")}
    >
      <View style={styles.desc}>
        <Text
          text={i18n.t("change_phone_desc")}
          size="p"
          weight="light"
          color="white"
        />
      </View>
      <ChangePhoneForm
        loading={loading}
        control={control}
        onSubmit={onSubmit}
        onCancel={onCancel}
        phone={oldPhone}
      />
    </Layout>
  );
};
export default Template;
