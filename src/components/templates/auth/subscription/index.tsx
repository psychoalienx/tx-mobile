import { View } from "react-native";
import Layout from "@layouts/auth";
import useThemeColor from "@hooks/useThemeColor";
import i18n from "@hooks/useLocalize";
import Text from "@atoms/text";
import Icon from "@atoms/icon";
import Button from "@atoms/button";
import styles from "./styles";

export default ({ goTo }: { goTo: any }) => {
  const primary = useThemeColor("primary");
  return (
    <Layout
      style={styles.content}
      stylesContainer={styles.container}
      radialBottom={true}
      backButton={() => goTo("back")}
    >
      <View style={styles.icon}>
        <Icon name="movieOpen" color={primary} size={114} />
      </View>
      <View style={styles.body}>
        <Text
          text={i18n.t("start_subscription_process")}
          color={"white"}
          weight={"bold"}
          size={"h3"}
        />
        <View style={styles.desc}>
          <Text
            text={i18n.t("use_email_create_password")}
            color={"white"}
            size={"p"}
            weight={"light"}
          />
        </View>
        <Button
          textStyle={styles.button_text}
          buttonStyle={styles.button}
          buttonText={i18n.t("continue")}
          onPress={() => goTo("register")}
        />        
      </View>
    </Layout>
  );
};
