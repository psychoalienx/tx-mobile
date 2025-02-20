import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import i18n from "@hooks/useLocalize";
import { View } from "react-native";
import ChangeEmailForm from "@components/organisms/changeEmailForm";
import Text from "@atoms/text";

const Template = ({
  goTo,
  control,
  onSubmit,
  onCancel,
  loading,
  oldEmail,
}: {
  goTo: any;
  control: any;
  onSubmit: any;
  onCancel: any;
  loading: boolean;
  oldEmail: string;
}) => {
  return (
    <Layout
      style={styles.container}
      scroll={false}
      title={i18n.t("change_email")}
      backButton={() => goTo("back")}
    >
      <View style={styles.desc}>
        <Text
          text={i18n.t("change_email_desc")}
          size="p"
          weight="light"
          color="white"
        />
      </View>
      <ChangeEmailForm
        loading={loading}
        control={control}
        onSubmit={onSubmit}
        onCancel={onCancel}
        email={oldEmail}
      />
    </Layout>
  );
};
export default Template;
