import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import useThemeColor from "@hooks/useThemeColor";
import { View } from "react-native";
import VerticalList from "@atoms/verticalList";
import Text from "@atoms/text";
import i18n from "@hooks/useLocalize";
import HistoryItem from "@components/molecules/historyItem";

const Template = ({
  items,
  plan,
  price,
  loading,
  goTo,
}: {
  items: any;
  plan: any;
  price: any;
  loading: any;
  goTo: any;
}) => {
  const gray = useThemeColor("gray");
  return (
    <Layout
      style={styles.container}
      scroll={false}
      title={i18n.t("payment_history")}
      backButton={() => goTo("back")}
    >
      <View style={{ ...styles.section, backgroundColor: gray }}>
        <Text
          text={i18n.t("your_plan")}
          size="p"
          weight="light"
          color="white"
        />
        <Text
          text={
            <>
              {`${plan} `}
              <Text text={price} weight="bold" size="h6" color="white" />
            </>
          }
          weight="bold"
          size="h6"
          color="white"
        />
      </View>
      <View style={{ ...styles.list }}>
        <VerticalList
          loading={loading}
          items={items}
          render={({ item, index }: any) => (
            <HistoryItem
              borderTop={index === 0}
              style={{ backgroundColor: gray }}
              {...item}
            />
          )}
          separator={{ ...styles.separator }}
          header={styles.header}
          footer={styles.footer}
        />
      </View>
    </Layout>
  );
};
export default Template;
