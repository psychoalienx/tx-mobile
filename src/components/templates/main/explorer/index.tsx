import styles from "./styles";
import { View } from "react-native";
import Layout from "@layouts/primary";
import Text from "@atoms/text";
import i18n from "@hooks/useLocalize";
import TabListItem from "@molecules/tabListItem";
import SearchPart from "@organisms/searchPart";
import Button from "@atoms/button";
import useThemeColor from "@hooks/useThemeColor";
import ContentMoreSearched from "@molecules/contentMoreSearched";

const Template = ({
  title,
  loading,
  goTo,
  items,
  onPress,
  control,
  tabSelected,
  setTab,
}: {
  title: string;
  loading: boolean;
  goTo: any;
  items: any;
  onPress: any;
  control: any;
  tabSelected: any;
  setTab: any;
}) => {
  const tabs = [
    {}
  ];
  const black = useThemeColor("black");
  const gray = useThemeColor("gray");
  return (
    <Layout style={styles.container} title={title} scroll={false}>
      <SearchPart style={styles.search} control={control} />
      <Button
        buttonStyle={{
          ...styles.button,
          borderColor: gray,
          backgroundColor: black,
        }}
        textStyle={styles.button_text}
        buttonText={i18n.t("categories")}
        onPress={() => goTo("categories")}
      />
      <View style={[styles.tabs]}>
        {items.map((item: any, index: number) => (
          <TabListItem
            key={`tab_${item?.slug ?? index}`}
            title={item?.title}
            selected={item?.slug === tabSelected}
            onPress={() => setTab?.(item?.slug)}
          />
        ))}
      </View>
      <View style={styles.content}>
        <Text
          text={i18n.t("moreSearched")}
          color="white"
          size="h7"
          weight="medium"
        />
        <ContentMoreSearched
          loading={loading}
          items={(items?.find?.(itm => itm.slug === tabSelected)?.items || [])}
          onPress={onPress}
        />
      </View>
    </Layout >
  );
};
export default Template;
