import { View } from "react-native";
import Layout from "@layouts/auth";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import AddPaymentMethodPart from "@organisms/addPaymentMethodPart";
import styles from "./styles";

export default ({
  goTo,
  onSubmit,
  control,
}: {
  goTo: any;
  onSubmit: any;
  control: any;
}) => {
  return (
    <Layout
      style={styles.content}
      stylesContainer={styles.container}
      closeButton={() => goTo("back")}
    >
      <View style={styles.title}>
        <Text
          text={i18n.t("add_payment_method")}
          color={"white"}
          size={"h4"}
          weight={"bold"}
        />
      </View>
      <View style={styles.desc}>
        <Text
          text={i18n.t("enter_your_credit_card_data")}
          color={"white"}
          size={"p"}
          weight={"light"}
        />
      </View>
      <AddPaymentMethodPart
        style={styles.form}
        onPress={onSubmit}
        control={control}
      />
    </Layout>
  );
};
