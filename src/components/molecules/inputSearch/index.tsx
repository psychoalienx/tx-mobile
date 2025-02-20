import * as React from "react";
import { useFocusEffect } from "@react-navigation/native";
import Input from "@atoms/input";
import i18n from "@hooks/useLocalize";

export default function InputSearch({
  style,
  value,
  onChange,
  onBlur,
  delay = 3,
}: {
  style?: any;
  value?: string;
  onChange?: any;
  onBlur?: any;
  delay?: number;
}) {
  const [inputValue, setInputValue] = React.useState(value);
  const inputValueRef = React.useRef<any>(null);
  const timerRef = React.useRef<any>(null);

  useFocusEffect(
    React.useCallback(() => {
      return () => clearTimeout(timerRef.current);
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      inputValueRef.current = inputValue;
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onChange(inputValue);
      }, delay * 1000);
    }, [inputValue])
  );

  return (
    <Input
      style={style}
      placeholder={i18n.t("search")}
      value={inputValue}
      onChange={(item) => setInputValue(item)}
      onBlur={onBlur}
    />
  );
}
