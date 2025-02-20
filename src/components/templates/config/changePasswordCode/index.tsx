import { View } from "react-native";
import styles from "./styles";
import Layout from "@layouts/auth";
import Text from "@atoms/text";
import i18n from "@hooks/useLocalize";
import ChangePasswordCodePart from "@organisms/changePasswordCodePart";

export default ({
  sending,
  onSubmit,
  onSendCode,
  control,
  success,
  goTo,
}: {
  sending?: any;
  onSubmit?: any;
  onSendCode?: any;
  control?: any;
  success?: any;
  goTo?: any;
}) => {
  return (
    <Layout
      style={styles.content}
      stylesContainer={styles.container}
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
      <ChangePasswordCodePart
        success={success}
        sending={sending}
        style={styles.form}
        onPress={onSubmit}
        onSendCode={onSendCode}
        control={control}
      />
    </Layout>
  );
};
