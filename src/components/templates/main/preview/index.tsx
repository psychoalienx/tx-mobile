import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import PreviewDetails from "@organisms/previewDetails";
import TabList from "@organisms/tabList";
import useThemeColor from "@hooks/useThemeColor";

const Template = ({
  items,
  preview,
  tab,
  setTab,
  onPlay,
  onPressItem,
  onPressTab,
  loading,
}: {
  items: any;
  preview: any;
  tab: any;
  setTab: any;
  onPlay: any;
  onFavorites: any;
  onPressItem: any;
  onPressTab: any;
  loading: any;
}) => {
  const black = useThemeColor("blackLight");
  return (
    <Layout style={{ ...styles.container, backgroundColor: black }}>
      {preview && (
        <PreviewDetails
          splash={preview?.splash}
          tabs={preview?.tabs}
          tabSelected={preview?.tabSelected}
          onPressTab={onPressTab}
          onPlay={onPlay}
          title={preview?.title}
          releaseDate={preview?.releaseDate}
          duration={preview?.duration}
          synopsis={preview?.synopsis}
        />
      )}
      <TabList
        style={styles.tabs}
        items={items}
        onPress={onPressItem}
        selected={tab}
        onChange={setTab}
        loading={loading}
      />
    </Layout>
  );
};
export default Template;
