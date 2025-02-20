import * as React from "react";
import { View } from "react-native";
import Button from "@atoms/button";
import Text from "@atoms/text";
import Icon from "@atoms/icon";
import i18n from "@hooks/useLocalize";
import styles from "./styles";
import useThemeColor from "@hooks/useThemeColor";
import { FONT_SIZE_28 } from "@constants/typographies";

export default function ManagePayInfoPart({
  goTo,
  items,
  onPress,
}: {
  goTo?: any;
  items?: any;
  onPress?: any;
}) {
  const black = useThemeColor("black");
  const gray = useThemeColor("gray");
  const primary = useThemeColor("primary");
  const white = useThemeColor("white");

  return (
    <View style={styles.container}>
      {items?.length !== undefined &&
        items?.length > 0 &&
        items.map((item, index) => (
          <View
            style={{ ...styles.box, backgroundColor: black }}
            key={`payinfomethod_${index}`}
          >
            <View style={styles.title}>
              <View style={styles.card}>
                <View style={styles.icon}>
                  <Icon name={item?.icon} size={FONT_SIZE_28} color={white} />
                </View>
                <Text
                  text={`**** **** **** ${item?.cardNumber}`}
                  color="white"
                />
              </View>
              <Button
                onPress={() => onPress(item)}
                buttonText={i18n.t("edit")}
                buttonStyle={{
                  ...styles.button,
                  backgroundColor: "transparent",
                }}
                textStyle={{
                  ...styles.edit,
                  color: primary,
                }}
              />
            </View>
            {item?.favorite && (
              <View
                style={{
                  ...styles.button,
                  backgroundColor: gray,
                }}
              >
                <Text
                  text={i18n.t("preferred")}
                  color="white"
                  size="p"
                  weight="regular"
                  align="center"
                />
              </View>
            )}
          </View>
        ))}
      <View style={styles.buttons}>
        <Button
          onPress={() => goTo("addPaymentMethod")}
          buttonText={i18n.t("add_payment_method")}
          buttonStyle={{
            ...styles.add,
            backgroundColor: "transparent",
            borderColor: primary,
          }}
          textStyle={{
            color: primary,
          }}
        />
      </View>
    </View>
  );
}
