import { View } from "react-native";
import styles from "./styles";
import Layout from "@layouts/auth";
import { LinearGradient } from "expo-linear-gradient";
import useThemeColor from "@hooks/useThemeColor";
import Text from "@atoms/text";
import i18n from "@hooks/useLocalize";
import UseReferCodePart from "@organisms/useReferCodePart";

export default ({
  loading,
  onPress,
  control,
  isValid,
  goTo,
}: {
  loading?: any;
  onPress?: any;
  control?: any;
  isValid?: any;
  goTo?: any;
}) => {
  const black = useThemeColor("black");

  return (
    <Layout
      backButton={() => goTo("back")}
      bg={true}
      style={styles.content}
      stylesContainer={styles.container}
    >
      <View style={styles.main}>
        <LinearGradient
          colors={[black, "transparent"]}
          style={styles.overlay_bottom}
          start={[0.9, 1.0]}
          end={[0.9, 0.0]}
          locations={[0.7, 1.0]}
        />
        <View style={styles.form}>
          <View style={styles.form_title}>
            <Text
              text={i18n.t("redeem_referral_code")}
              color="white"
              weight="bold"
              size="h4"
              align="center"
            />
          </View>
          <View style={styles.form_desc}>
            <Text
              text={i18n.t("redeem_referral_code_desc")}
              color="white"
              weight="light"
              size="h7"
              align="center"
            />
          </View>
          <UseReferCodePart
            loading={loading}
            onSubmit={onPress}
            control={control}
            isValid={isValid}
          />
        </View>
      </View>
    </Layout>
  );
};
