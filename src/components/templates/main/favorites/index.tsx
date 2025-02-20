import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import i18n from "@hooks/useLocalize";
import ContentGrid from "@organisms/contentGrid";

const Template = ({
  onPress,
  loading,
  items,
  goTo,
}: {
  goTo: any;
  onPress: any;
  loading: boolean;
  items: any;
}) => {
  return (
    <Layout
      style={{ ...styles.container }}
      scroll={false}
      title={i18n.t("favorites")}
      backButton={() => goTo("back")}
    >
      <ContentGrid items={items} onPress={onPress} loading={loading} />
    </Layout>
  );
};
export default Template;
