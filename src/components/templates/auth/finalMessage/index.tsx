import { View } from "react-native";
import Layout from "@layouts/auth";
import useThemeColor from "@hooks/useThemeColor";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import Icon from "@atoms/icon";
import Button from "@atoms/button";
import styles from "./styles";

export default ({ onPress = () => {} }: { onPress: () => void }) => {
  const primary = useThemeColor("primary");
  const white = useThemeColor("white");
  return (
    <Layout
      style={styles.content}
      stylesContainer={styles.container}
      radialBottom={true}
    >
      <View style={styles.icon}>
        <Icon name="movieOpenCheck" color={primary} bg={white} size={110} />
      </View>
      <View style={styles.body}>
        <Text
          text={i18n.t("welcome")}
          color={"white"}
          weight={"bold"}
          size={"h3"}
        />
        <View style={styles.desc}>
          <Text
            text={i18n.t("now_you_can_enjoy_library")}
            color={"white"}
            size={"p"}
            weight={"light"}
          />
        </View>
        <Button
          buttonStyle={styles.button}
          buttonText={i18n.t("continue")}
          onPress={onPress}
        />        
      </View>
    </Layout>
  );
};
