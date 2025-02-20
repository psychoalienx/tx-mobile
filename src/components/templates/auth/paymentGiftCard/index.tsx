import { View } from "react-native";
import Layout from "@layouts/auth";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import PaymentCodePart from "@organisms/paymentCodePart";
import styles from "./styles";

export default ({
  goTo,
  onSubmit,
  onChangePlan,
  control,
  success,
  plan,
}: {
  goTo: any;
  onChangePlan: any;
  onSubmit: any;
  control: any;
  success?: any;
  plan?: any;
}) => {
  return (
    <Layout
      style={styles.content}
      stylesContainer={styles.container}
      radialBottom={true}
      title={i18n.t("gift_card")}
      backButton={() => goTo("back")}
    >
      <View style={styles.desc}>
        <Text
          text={i18n.t("enter_gift_card_code")}
          color={"white"}
          size={"p"}
          weight={"light"}
        />
      </View>
      <PaymentCodePart
        success={success}
        style={styles.form}
        onPress={onSubmit}
        control={control}
        plan={plan}
        onChangePlan={onChangePlan}
      />
    </Layout>
  );
};
