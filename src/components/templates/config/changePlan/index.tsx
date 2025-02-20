import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import { View } from "react-native";
import Text from "@atoms/text";
import Button from "@atoms/button";
import i18n from "@hooks/useLocalize";
import PlanItem from "@molecules/planHorizontalItem";

const Template = ({
  items,
  onPress,
  current,
  selected,
  onPressPlan,
  goTo,
}: {
  items: any;
  onPress: any;
  current: any;
  selected: any;
  onPressPlan: any;
  goTo: any;
}) => {
  return (
    <Layout
      style={styles.container}
      title={i18n.t("change_plan")}
      backButton={() => goTo("back")}
    >
      <View style={styles.list}>
        {items.map((item: any, key: number) => (
          <View key={`plan_options_${key}`}>
            <PlanItem
              name={item?.name}
              price={item?.price}
              resolution={item?.resolution}
              quality={item?.quality}
              current={item?.id === current}
              selected={item?.id === selected}
              onPress={() => onPressPlan(item)}
            />
            {key !== items.length - 1 && <View style={styles.separator}></View>}
          </View>
        ))}
      </View>
      <View style={styles.desc}>
        <Text
          text={i18n.t("change_plan_desc")}
          style={"small"}
          color={"grayBorder"}
        />
      </View>
      <Button
        buttonStyle={styles.button}
        buttonText={i18n.t("continue")}
        onPress={onPress}
      />
    </Layout>
  );
};
export default Template;
