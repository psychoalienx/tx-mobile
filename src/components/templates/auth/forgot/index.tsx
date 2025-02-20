import { View } from "react-native";
import styles from "./styles";
import Layout from "@layouts/auth";
import Text from "@atoms/text";
import ForgotMethodItem from "@molecules/forgotMethodItem";
import VerticalList from "@atoms/verticalList";
import i18n from "@hooks/useLocalize";

export default ({ goTo }: { goTo: any }) => {
  return (
    <Layout
      style={styles.content}
      radialBottom={true}
      stylesContainer={styles.container}
      title={i18n.t("change_password")}
      backButton={() => goTo("back")}
    >
      <View style={styles.desc}>
        <Text
          text={i18n.t("change_password_desc")}
          color="white"
          size="p"
          weight="light"
        />
      </View>
      <VerticalList
        type={"forgot"}
        items={[
          {
            name: i18n.t("email"),
            icon: "email",
            onPress: () => goTo("forgotEmail"),
          },
          {
            name: i18n.t("phone_number"),
            icon: "phone",
            onPress: () => goTo("forgotPhone"),
          },
        ]}
        render={({ item, key }) => (
          <ForgotMethodItem
            key={key}
            name={item.name}
            icon={item.icon}
            onPress={item.onPress}
          />
        )}
        separator={styles.separator}
      />
    </Layout>
  );
};
