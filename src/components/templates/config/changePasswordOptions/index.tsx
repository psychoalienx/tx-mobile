import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import i18n from "@hooks/useLocalize";
import { View } from "react-native";
import Text from "@atoms/text";
import ChangePasswordOptionsPart from "@components/organisms/changePasswordOptionsPart";

const Template = ({
  goTo,
  email,
  phone,
  onPress,
}: {
  goTo: any;
  email: string;
  phone: string;
  onPress: any;
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
          text={i18n.t("change_password_profile_desc")}
          size="p"
          weight="light"
          color="white"
        />
      </View>
      <ChangePasswordOptionsPart goTo={goTo} email={email} phone={phone} onPress={onPress} />
    </Layout>
  );
};
export default Template;
