import { View } from "react-native";
import Layout from "@layouts/auth";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import ReferredUserPart from "@organisms/referredUserPart";
import styles from "./styles";

export default ({
  goTo,
  benefit,
  onSkip,
  onSubmit,
  control,
}: {
  goTo: any;
  benefit?: any;
  onSkip?: any;
  onSubmit: any;
  control: any;
}) => {
  return (
    <Layout
      style={styles.content}
      stylesContainer={styles.container}
      radialBottom={true}
      subTitle={i18n.t("optional_step", { curr: 1, end: 3 })}
      closeButton={() => goTo("back")}
    >
      <View style={styles.desc}>
        <Text
          text={i18n.t("referred_user_desc")}
          color={"white"}
          size={"h4"}
          weight={"bold"}
        />
      </View>
      <ReferredUserPart style={styles.form} data={benefit} onSkip={onSkip} onPress={onSubmit} control={control} />
    </Layout>
  );
};
