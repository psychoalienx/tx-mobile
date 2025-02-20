import React from "react";
import { Switch } from "@rneui/themed";
import useThemeColor from "@hooks/useThemeColor";

export default function SwitchInput({
  value = false,
  onChange,
  color,
}: {
  value: boolean;
  onChange: any;
  color?: string;
}) {
  color = color || useThemeColor("white");

  return (
    <Switch
      color={color}
      value={value}
      trackColor={{
        false: useThemeColor("grayBorder"),
        true: useThemeColor("primary"),
      }}
      onValueChange={onChange}
    />
  );
}
