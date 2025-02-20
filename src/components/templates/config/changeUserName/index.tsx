import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import i18n from "@hooks/useLocalize";
import { View } from "react-native";
import ChangeUserNameForm from "@components/organisms/changeUserNameForm";
import Text from "@atoms/text";

const Template = ({
  goTo,
  control,
  onSubmit,
  onCancel,
  loading,
  oldUserName,
}: {
  goTo: any;
  control: any;
  onSubmit: any;
  onCancel: any;
  loading: boolean;
  oldUserName: string;
}) => {
  return (
    <Layout
      style={styles.container}
      scroll={false}
      title={i18n.t("change_user")}
      backButton={() => goTo("back")}
    >
      <View style={styles.desc}>
        <Text
          text={i18n.t("change_username_desc")}
          size="p"
          weight="light"
          color="white"
        />
      </View>
      <ChangeUserNameForm
        loading={loading}
        control={control}
        onSubmit={onSubmit}
        onCancel={onCancel}
        username={oldUserName}
      />
    </Layout>
  );
};
export default Template;
