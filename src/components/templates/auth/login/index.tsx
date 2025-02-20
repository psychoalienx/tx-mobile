import { useWindowDimensions, View } from "react-native";
import styles from "./styles";
import Layout from "@layouts/auth";
import Text from "@atoms/text";
import Button from "@atoms/button";
import useThemeColor from "@hooks/useThemeColor";
import Logo from "@assets/images/logo";
import LoginPart from "@organisms/loginPart";
import i18n from "@hooks/useLocalize";

export default ({
  goTo,
  onSubmit,
  control,
  sending,
}: {
  goTo: any;
  onSubmit: any;
  control: any;
  sending: any;
}) => {
  const white = useThemeColor("white");
  const primary = useThemeColor("primary");

  const window = useWindowDimensions();
  const width = window.width * 0.8 > 150 ? 150 : window.width * 0.8;
  const height = 80;

  return (
    <Layout
      style={styles.content}
      stylesContainer={styles.container}
      radialTop={true}
      backButton={true}
    >
      <View style={styles.logo}>
        <Logo width={width} height={height} />
      </View>
      <LoginPart
        sending={sending}
        style={styles.form}
        onPress={() => goTo("forgot")}
        onSubmit={onSubmit}
        control={control}
        styleForgot={styles.forgot}
      />
      <View style={styles.footer}>
        <Text
          text={i18n.t("first_time_on_trimax")}
          color="white"
          size="h7"
          align="center"
          weight="bold"
        />
        <Button
          buttonStyle={{
            ...styles.buttonSuscribe,
            borderColor: white,
            backgroundColor: "transparent",
          }}
          textStyle={{ ...styles.buttonSuscribe_text, color: primary }}
          buttonText={i18n.t("suscribe")}
          onPress={() => goTo("subscription")}
        />
      </View>
    </Layout>
  );
};
