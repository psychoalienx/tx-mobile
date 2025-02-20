import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import useThemeColor from "@hooks/useThemeColor";
import Text from "@atoms/text";
import Icon from "@atoms/icon";
import { FONT_SIZE_24 } from "@constants/typographies";
import styles from "./styles";

export default function PaymentMethodItem({
  name,
  icons,
  onPress,
}: {
  name: any;
  icons?: any;
  onPress: any;
}) {
  const white50 = useThemeColor("white50");
  const white = useThemeColor("white");
  const black = useThemeColor("black");

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: black,
            borderColor: white50,
          },
        ]}
      >
        <View style={styles.name}>
          <Text text={name} color={"white"} size={"p"} weight={"light"} />
        </View>
        {icons && (
          <View style={styles.icons}>
            {icons.map((item, key) => (
              <View key={`payment_method_item_${key}`} style={styles.icon}>
                <Icon name={item} size={FONT_SIZE_24} color={white} />
              </View>
            ))}
          </View>
        )}
        <View style={styles.arrow}>
          <Icon name={"chevronRight"} size={FONT_SIZE_24} color={white} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
