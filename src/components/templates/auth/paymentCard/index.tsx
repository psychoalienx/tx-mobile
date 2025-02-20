import { View } from "react-native";
import Layout from "@layouts/auth";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import PaymentCardPart from "@organisms/paymentCardPart";
import styles from "./styles";

export default ({
  goTo,
  onSubmit,
  onChangePlan,
  control,
  plan,
  reference,
}: {
  goTo: any;
  onChangePlan: any;
  onSubmit: any;
  control: any;
  plan: any;
  reference: any;
}) => {
  return (
    <Layout
      style={styles.content}
      stylesContainer={styles.container}
      radialBottom={true}
      subTitle={i18n.t("step_by_step", { curr: 3, end: 3 })}
      closeButton={() => goTo("back")}
    >
      <Text
        text={i18n.t("credict_card")}
        color={"white"}
        size={"h4"}
        weight={"bold"}
      />
      <View style={styles.desc}>
        <Text
          text={i18n.t("enter_your_credit_card_data")}
          color={"white"}
          size={"p"}
          weight={"light"}
        />
      </View>
      <PaymentCardPart
        style={styles.form}
        onPress={onSubmit}
        control={control}
        plan={plan}
        onChangePlan={onChangePlan}
        reference={reference}
      />
    </Layout>
  );
};
