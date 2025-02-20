import { useWindowDimensions, View } from "react-native";
import styles from "./styles";
import Layout from "@layouts/auth";
import Text from "@atoms/text";
import Button from "@atoms/button";
import Logo from "@assets/images/logo";
import i18n from "@hooks/useLocalize";

export default ({ goTo }: { goTo: any }) => {
  const window = useWindowDimensions();
  const width = window.width * 0.8 > 220 ? 220 : window.width * 0.8;
  const height = 80;
  return (
    <Layout bg={true} style={styles.content} stylesContainer={styles.container}>
      <View style={styles.logo}>
        <Logo width={width} height={height} />
      </View>
      <View style={styles.footer}>
        <Text text={i18n.t("welcome")} color="white" size="h3" weight="bold" />
        <View style={styles.desc}>
          <Text text={i18n.t("welcome_desc")} color="white" size="p" />
        </View>
        <Button
          buttonStyle={styles.button}
          buttonText={i18n.t("begin")}
          onPress={() => goTo("login")}
        />
      </View>
    </Layout>
  );
};
