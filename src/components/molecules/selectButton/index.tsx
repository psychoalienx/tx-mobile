import * as React from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";
import Button from "@atoms/button";
import Text from "@atoms/text";
import Icon from "@atoms/icon";
import { FONT_SIZE_24 } from "@constants/typographies";
import useThemeColor from "@hooks/useThemeColor";
import BottomModal from "@atoms/bottomModal";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Select({
  button,
  value,
  items,
  title,
  desc,
  onChange,
}: {
  button?: any;
  value?: any;
  items?: any;
  title?: any;
  desc?: any;
  onChange?: any;
}) {

  const white50 = useThemeColor("grayBorder");
  const primary = useThemeColor("primary");

  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Button
          onPress={() => {
            setIsVisible(true);
          }}
          buttonText={button}
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
      <BottomModal
        isVisible={isVisible}
        onCancel={() => {
          setIsVisible(false);
        }}
      >
        <View style={styles.title}>
          <Text text={title} size={"h4"} weight={"bold"} color="white"  align="left"  />
        </View>
        <View style={styles.desc}>
          <Text text={desc} size={"p"} weight={"light"} color="white" align="left" />
        </View>
        <View style={styles.options}>
          <ScrollView
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            bounces={false}
            style={styles.scroll}
            contentContainerStyle={styles.scroll_content}
          >
            {items?.length !== undefined &&
              items?.length > 0 &&
              items.map((item, index) => (
                <React.Fragment key={`option_${index}`}>
                  <View
                    style={[
                      styles.option,
                      index !== items.length - 1 && {
                        borderBottomColor: white50,
                      },
                    ]}
                  >
                    <TouchableOpacity
                      disabled={item?.value === value}
                      onPress={() => {
                        onChange(item);
                        setIsVisible(false)
                      }}
                    >
                      <View style={[styles.option_text]}>
                        <Text
                          text={item.text}
                          color="white"
                          size="h7"
                          weight="light"
                        />
                        {item?.value === value && (<Icon name={"check"} size={FONT_SIZE_24} color={primary} />)}
                      </View>
                    </TouchableOpacity>
                  </View>
                  {index !== items.length - 1 && (
                    <View style={styles.separator}></View>
                  )}
                </React.Fragment>
              ))}
          </ScrollView>
        </View>
      </BottomModal>
    </View>
  );
}
