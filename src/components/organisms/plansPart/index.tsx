import Button from "@atoms/button";
import i18n from "@hooks/useLocalize";
import useThemeColor from "@hooks/useThemeColor";
import HorizontalList from "@atoms/horizontalList";
import PlanItem from "@molecules/planItem";
import * as React from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import styles from "./styles";

export default function PlansPart({
  style,
  onPress,
  control,
  plans,
  loading,
}: {
  style: object;
  onPress: any;
  control: any;
  plans?: any;
  loading: any;
}) {
  const primary = useThemeColor("primary");
  return (
    <View style={[styles.container, style]}>
      <Controller
        control={control}
        name={"password"}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <HorizontalList
            loading={loading}
            type={"plan"}
            items={plans}
            render={({ item }) => (
              <PlanItem
                key={item.id}
                styleContainer={[
                  styles.plan,
                  item.id == value && {
                    borderColor: primary,
                    borderWidth: 4,
                  },
                ]}
                name={item.name}
                price={item.price}
                resolution={item.resolution}
                quality={item.quality}
                onPress={() => {
                  onChange(item.id);
                }}
              />
            )}
            separator={styles.separator}
          />
        )}
      />
      <Button
        buttonText={i18n.t("continue")}
        buttonStyle={styles.button}
        onPress={onPress}
      />
    </View>
  );
}
