import * as React from "react";
import { View } from "react-native";
import Layout from "@layouts/auth";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import VerticalList from "@atoms/verticalList";
import PaymentMethodItem from "@molecules/paymentMethodItem";
import styles from "./styles";

export default ({
  goTo,
  methods,
  onSubmit,
}: {
  goTo: any;
  methods?: any;
  onSubmit: any;
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
        text={i18n.t("your_membership_begin_after_payment")}
        color={"white"}
        weight={"bold"}
        size={"h4"}
      />
      <View style={styles.desc}>
        <Text
          text={i18n.t("choose_a_plan_desc")}
          color={"white"}
          size={"p"}
          weight={"light"}
        />
      </View>
      <View style={styles.methods}>
        <VerticalList
          type={"payment_method"}
          items={methods}
          render={({ item }) => (
            <PaymentMethodItem
              key={item.id}
              name={item.name}
              icons={item.icons}
              onPress={() => onSubmit(item)}
            />
          )}
          separator={styles.separator}
        />
      </View>
    </Layout>
  );
};
