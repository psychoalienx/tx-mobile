import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import useThemeColor from "@hooks/useThemeColor";
import Text from "@atoms/text";
import Icon from "@atoms/icon";
import { FONT_SIZE_26, FONT_SIZE_24} from "@constants/typographies";
import styles from "./styles";

export default function PaymentMethodItem({
  name,
  icon,
  onPress,
}: {
  name: any;
  icon?: any;
  onPress: any;
}) {
  const white = useThemeColor("white");
  const primary = useThemeColor("primary");
  const black = useThemeColor("black");

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: black,
          },
        ]}
      >
        <View style={styles.icon}>
          <Icon name={icon} size={FONT_SIZE_26} color={primary} />
        </View>
        <View style={styles.name}>
          <Text text={name} color={"white"} size={"p"} weight={"light"} />
        </View>
         <View style={styles.arrow}>
            <Icon name={"chevronRight"} size={FONT_SIZE_24} color={white} />
         </View>
      </View>
    </TouchableOpacity>
  );
}
