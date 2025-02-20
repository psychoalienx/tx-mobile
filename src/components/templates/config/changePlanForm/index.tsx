import { View } from "react-native";
import Layout from "@layouts/primary";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import ChangePlanFormPart from "@organisms/changePlanFormPart";
import styles from "./styles";

export default ({
  onSubmit,
  onChangePlan,
  control,
  plan,
}: {
  onChangePlan: any;
  onSubmit: any;
  control: any;
  plan: any;
}) => {
  return (
    <Layout style={styles.container} title={i18n.t("change_plan_form")}>
      <View style={styles.desc}>
        <Text
          text={i18n.t("change_plan_form_desc")}
          color={"white"}
          size={"p"}
          weight={"light"}
        />
      </View>
      <ChangePlanFormPart
        style={styles.form}
        onPress={onSubmit}
        control={control}
        plan={plan}
        onChangePlan={onChangePlan}
      />
    </Layout>
  );
};
