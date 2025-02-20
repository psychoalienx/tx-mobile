import { View } from "react-native";
import styles from "./styles";
import Layout from "@layouts/auth";
import Text from "@atoms/text";
import i18n from "@hooks/useLocalize";
import RegisterManualPayPart from "@organisms/registerManualPayPart";

export default ({
  sending,
  onSubmit,
  control,
  success,
  goTo,
}: {
  sending?: any;
  onSubmit?: any;
  control?: any;
  success?: any;
  goTo?: any;
}) => {
  return (
    <Layout
      style={styles.content}
      stylesContainer={styles.container}
      backButton={() => goTo("back")}
      title={i18n.t("reload_code")}
    >
      <View style={styles.desc}>
        <Text
          text={i18n.t("enter_reload_code")}
          color={"white"}
          size={"p"}
          weight={"light"}
        />
      </View>
      <RegisterManualPayPart
        success={success}
        sending={sending}
        style={styles.form}
        onPress={onSubmit}
        control={control}
      />
    </Layout>
  );
};
