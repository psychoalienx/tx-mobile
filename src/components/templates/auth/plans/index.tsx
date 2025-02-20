import * as React from "react";
import { View } from "react-native";
import Layout from "@layouts/auth";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import PlansPart from "@organisms/plansPart";
import styles from "./styles";

export default ({
  goTo,
  control,
  onSubmit,
  plans,
  loading,
}: {
  goTo: any;
  control: any;
  onSubmit: any;
  plans?: any;
  loading?: any;
}) => {
  return (
    <Layout
      style={styles.content}
      stylesContainer={styles.container}
      radialTop={true}
      subTitle={i18n.t("step_by_step", { curr: 2, end: 3 })}
      closeButton={() => goTo("back")}
    >
      <Text
        text={i18n.t("choose_a_plan")}
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
      <PlansPart
        loading={loading}
        style={styles.form}
        plans={plans}
        onPress={onSubmit}
        control={control}
      />
    </Layout>
  );
};
