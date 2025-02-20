import { View } from "react-native";
import Layout from "@layouts/auth";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import ForgotCodePart from "@organisms/forgotCodePart";
import styles from "./styles";

export default ({
  goTo,
  onSendCode,
  onSubmit,
  control,
  success,
  sending,
}: {
  goTo: any;
  onSendCode?: any;
  onSubmit: any;
  control: any;
  success?: any;
  sending?: any;
}) => {
  return (
    <Layout
      style={styles.content}
      stylesContainer={styles.container}
      radialBottom={true}
      backButton={() => goTo("back")}
      title={i18n.t("verification_code")}
    >
      <View style={styles.desc}>
        <Text
          text={i18n.t("verification_code_desc")}
          color={"white"}
          size={"p"}
          weight={"light"}
        />
      </View>
      <ForgotCodePart
        success={success}
        sending={sending}
        style={styles.form}
        onSendCode={onSendCode}
        onPress={onSubmit}
        control={control}
      />
    </Layout>
  );
};
