import { Platform } from "react-native";
import * as Linking from "expo-linking";
import i18n from "@hooks/useLocalize";

export const onPhone = (phone_number: string) => {
  let phoneNumber = "";
  if (Platform.OS === "android") {
    phoneNumber = `tel:${phone_number}`;
  } else {
    phoneNumber = `telprompt:${phone_number}`;
  }
  Linking.canOpenURL(phoneNumber).then(() => {
    Linking.openURL(phoneNumber);
  });
};

export const onMail = (email: string) => {
  Linking.canOpenURL(`mailto:${email}`).then(() => {
    Linking.openURL(`mailto:${email}`);
  });
};

export const _formatDate = (date) => {
  date = (new Date(date));
  return date.getDate() + ' ' + date.toLocaleString(i18n.currentLocale(), { month: 'long' }) + ' ' + date.getFullYear();
};

export const _formatShortDate = (date) => {
  return (new Date(date)).toLocaleDateString(i18n.currentLocale());
};