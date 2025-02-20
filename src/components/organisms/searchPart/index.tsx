import * as React from "react";
import { Controller } from "react-hook-form";
import InputSearch from "@molecules/inputSearch";

export default function SearchPart({
  style,
  control,
}: {
  style: object;
  control: any;
}) {
  return (
    <Controller
      control={control}
      name={"search"}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <InputSearch
          style={style}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
}
