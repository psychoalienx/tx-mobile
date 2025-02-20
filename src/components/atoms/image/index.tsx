import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import styles from "./styles";

const CustomFastImage = ({
  src,
  style,
}: {
  src: string | ImageSourcePropType;
  style: object;
}) => {
  return (
    <Image
      source={typeof src === "string" ? { uri: src } : src}
      style={[styles.image, style]}
    />
  );
};

export default CustomFastImage;
