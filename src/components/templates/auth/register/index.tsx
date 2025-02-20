import { View } from "react-native";
import Layout from "@layouts/auth";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import RegisterPart from "@organisms/registerPart";
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
      subTitle={i18n.t("step_by_step", { curr: 1, end: 3 })}
      closeButton={() => goTo("login")}
    >
      <View style={styles.desc}>
        <Text
          text={i18n.t("add_your_personal_data")}
          color={"white"}
          size={"h4"}
          weight={"bold"}
        />
      </View>
      <RegisterPart
        sending={sending}
        style={styles.form}
        onPress={onSubmit}
        control={control}
      />
    </Layout>
  );
};
