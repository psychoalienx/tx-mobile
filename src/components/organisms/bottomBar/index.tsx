import * as React from "react";
import Icon, { Icons } from "@atoms/icon";
import { FONT_SIZE_20 } from "@constants/typographies";
import useThemeColor from "@hooks/useThemeColor";
import { TouchableNativeFeedback, View } from "react-native";
import styles from "./styles";

export default function BottomBar({
  state: { routes, index },
  navigation,
}: any) {
  const [currentTab, setCurrenTab] = React.useState("home");
  const gray = useThemeColor("gray");
  const inactiveColor = useThemeColor("white");
  const activeColor = useThemeColor("primary");
  const onlyOn = ["homeTab", "explorer", "iptv", "iptvCategories", "profile"];
  const tabs = [
    { tab: ["homeTab"], icon: "home" },
    { tab: ["explorer"], icon: "search" },
    { tab: ["iptv", "iptvCategories"], icon: "stream" },
    { tab: ["profile"], icon: "user" },
  ];

  const color = (current: string) => {
    return current.includes(currentTab) ? activeColor : inactiveColor;
  };

  React.useEffect(() => {
    const selected = routes?.[index]?.name ? routes[index].name : "homeTab";
    setCurrenTab(selected);
  }, [index]);

  const render = ({ tab, icon }: { tab: string; icon: keyof typeof Icons }) => (
    <TouchableNativeFeedback
      key={`tab_${tab}`}
      onPress={() => navigation.navigate(tab[0])}
      style={styles.tab}
    >
      <View style={styles.tab}>
        <Icon name={icon} size={FONT_SIZE_20} color={color(tab)} />
      </View>
    </TouchableNativeFeedback>
  );

  return onlyOn.includes(currentTab) ? (
    <View style={[styles.container, { backgroundColor: gray }]}>
      {tabs.map((item: { tab: any; icon: any }) => render(item))}
    </View>
  ) : (
    <></>
  );
}
