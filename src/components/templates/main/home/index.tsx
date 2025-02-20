import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import PreviewSplash from "@organisms/previewSplash";
import ContentFeed from "@organisms/contentFeed";
import useThemeColor from "@hooks/useThemeColor";

const Template = ({
  items,
  previews,
  onPlay,
  onDetail,
  onTab,
  loading,
}: {
  items: any;
  previews: any;
  onPlay: any;
  onDetail: any;
  onTab: any;
  loading: any;
}) => {
  const black = useThemeColor("black");
  return (
    <Layout style={{ ...styles.container, backgroundColor: black }}>
      <PreviewSplash
        items={previews}
        onPlay={onPlay}
        onPress={onDetail}
        onTab={onTab}
      />
      <ContentFeed items={items} onPress={onDetail} loading={loading} />
    </Layout>
  );
};
export default Template;
