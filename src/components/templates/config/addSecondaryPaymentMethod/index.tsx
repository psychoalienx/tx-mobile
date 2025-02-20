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
      closeButton={() => goTo("back")}
      scroll={false}
    >
      <View style={styles.title}>
        <Text
          text={i18n.t("add_payment_method")}
          color={"white"}
          weight={"bold"}
          size={"h4"}
        />
      </View>
      <View style={styles.desc}>
        <Text
          text={i18n.t("add_payment_method_desc")}
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
