import { View } from "react-native";
import Layout from "@layouts/auth";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import ForgotChangePart from "@organisms/forgotChangePart";
import styles from "./styles";

export default ({
  goTo,
  onSubmit,
  control,
  sending,
}: {
  goTo: any;
  onSubmit: any;
  control: any;
  sending: any;
}) => {
  return (
    <Layout
      style={styles.content}
      stylesContainer={styles.container}
      radialBottom={true}
      backButton={() => goTo("back")}
      title={i18n.t("change_password")}
    >
      <View style={styles.desc}>
        <Text
          text={i18n.t("new_password_desc")}
          color={"white"}
          size={"p"}
          weight={"light"}
        />
      </View>
      <ForgotChangePart
        sending={sending}
        style={styles.form}
        onPress={onSubmit}
        control={control}
      />
    </Layout>
  );
};
