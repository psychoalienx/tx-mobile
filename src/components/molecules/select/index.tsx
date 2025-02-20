import * as React from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";
import Button from "@atoms/button";
import Text from "@atoms/text";
import Icon from "@atoms/icon";
import { FONT_SIZE_16 } from "@constants/typographies";
import useThemeColor from "@hooks/useThemeColor";
import BottomModal from "@atoms/bottomModal";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Select({
  label,
  placeholder,
  value,
  items,
  onChange,
}: {
  label?: any;
  placeholder?: any;
  value?: any;
  items?: any;
  onChange?: any;
}) {
  const white = useThemeColor("white");
  const white50 = useThemeColor("grayBorder");

  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Button
          onPress={() => {
            setIsVisible(true);
          }}
          buttonText={value ?? placeholder}
          buttonStyle={{ ...styles.select, borderColor: white }}
          iconLeftHide={true}
          iconRight={
            <Icon
              name={isVisible ? "chevronUp" : "chevronDown"}
              size={FONT_SIZE_16}
              color={white}
            />
          }
        />
      </View>
      {label !== undefined && (
        <View style={styles.label}>
          <Text
            text={label}
            weight={"regular"}
            color={"white"}
            size={"small"}
          />
        </View>
      )}
      <BottomModal
        isVisible={isVisible}
        onCancel={() => {
          setIsVisible(false);
        }}
      >
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
                      item?.value === value && { backgroundColor: white50 },
                      index !== items.length - 1 && {
                        borderBottomColor: white50,
                      },
                    ]}
                  >
                    <TouchableOpacity
                      disabled={item?.value === value}
                      onPress={() => {
                        onChange(item?.value);
                      }}
                    >
                      <Text
                        text={item.text}
                        color="white"
                        size="h7"
                        weight="light"
                      />
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
