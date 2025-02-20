import * as React from "react";
import { View } from "react-native";
import Button from "@atoms/button";
import Text from "@atoms/text";
import Icon from "@atoms/icon";
import i18n from "@hooks/useLocalize";
import styles from "./styles";
import useThemeColor from "@hooks/useThemeColor";
import { FONT_SIZE_28 } from "@constants/typographies";

export default function EditPaymentMethodPart({
  items,
  onPress,
}: {
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
          <React.Fragment key={`payinfomethod_${index}`}>
            <View style={{ ...styles.box, backgroundColor: black }}>
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
                {item?.favorite ? (
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
                ) : (
                  <Button
                    onPress={() => onPress(item)}
                    buttonText={i18n.t("select")}
                    buttonStyle={{
                      ...styles.button,
                      backgroundColor: "transparent",
                    }}
                    textStyle={{
                      ...styles.edit,
                      color: primary,
                    }}
                  />
                )}
              </View>
            </View>
            {index !== items.length - 1 && (
              <View style={styles.separator}></View>
            )}
          </React.Fragment>
        ))}
    </View>
  );
}
