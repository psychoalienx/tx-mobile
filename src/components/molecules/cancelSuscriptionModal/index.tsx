import * as React from "react";
import { View } from "react-native";
import styles from "./styles";
import Button from "@atoms/button";
import Text from "@atoms/text";
import Icon from "@atoms/icon";
import { FONT_SIZE_32 } from "@constants/typographies";
import useThemeColor from "@hooks/useThemeColor";
import BottomModal from "@atoms/bottomModal";
import i18n from "@hooks/useLocalize";

export default function CancelSuscriptionModal({
  isVisible,
  onCancel,
  onPress,
}: {
  isVisible: boolean;
  onCancel?: any;
  onPress?: any;
}) {
  const red = useThemeColor("red");
  return (
    <BottomModal isVisible={isVisible} onCancel={onCancel}>
      <View style={styles.container}>
        <Icon name="alert" size={FONT_SIZE_32} color={red} />
        <View style={styles.title}>
          <Text
            text={i18n.t("cancel_suscription")}
            size={"h4"}
            align={"center"}
            weight={"bold"}
            color="white"
          />
        </View>
        <View style={styles.desc}>
          <Text
            text={i18n.t("cancel_suscription_confirm")}
            size={"p"}
            align={"center"}
            weight={"light"}
            color="white"
          />
        </View>
        <Button
          buttonStyle={{ ...styles.button, backgroundColor: red }}
          buttonText={i18n.t("continue")}
          onPress={onPress}
        />
      </View>
    </BottomModal>
  );
}
