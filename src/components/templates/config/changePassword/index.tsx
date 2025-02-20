import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import i18n from "@hooks/useLocalize";
import { View } from "react-native";
import ChangePasswordForm from "@components/organisms/changePasswordPart";
import Text from "@atoms/text";

const Template = ({
  goTo,
  control,
  onSubmit,
  onCancel,
  loading,
}: {
  goTo: any;
  control: any;
  onSubmit: any;
  onCancel: any;
  loading: boolean;
}) => {
  return (
    <Layout
      style={styles.container}
      scroll={false}
      title={i18n.t("change_password")}
      backButton={() => goTo("back")}
    >
      <View style={styles.desc}>
        <Text
          text={i18n.t("change_password_desc")}
          size="p"
          weight="light"
          color="white"
        />
      </View>
      <ChangePasswordForm
        loading={loading}
        control={control}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </Layout>
  );
};
export default Template;
