import * as React from "react";
import { SvgXml } from "react-native-svg";
import arrowDown from "@assets/images/icons/arrowDown";
import arrowLeft from "@assets/images/icons/arrowLeft";
import arrowRight from "@assets/images/icons/arrowRight";
import arrowUp from "@assets/images/icons/arrowUp";
import calendar from "@assets/images/icons/calendar";
import check from "@assets/images/icons/check";
import chevronDown from "@assets/images/icons/chevronDown";
import chevronLeft from "@assets/images/icons/chevronLeft";
import chevronRight from "@assets/images/icons/chevronRight";
import chevronUp from "@assets/images/icons/chevronUp";
import close from "@assets/images/icons/close";
import configuration from "@assets/images/icons/configuration";
import copy from "@assets/images/icons/copy";
import email from "@assets/images/icons/email";
import eye from "@assets/images/icons/eye";
import eyeClose from "@assets/images/icons/eyeClose";
import favorite from "@assets/images/icons/favorite";
import help from "@assets/images/icons/help";
import home from "@assets/images/icons/home";
import info from "@assets/images/icons/info";
import logout from "@assets/images/icons/logout";
import more from "@assets/images/icons/more";
import movieOpen from "@assets/images/icons/movieOpen";
import movieOpenCheck from "@assets/images/icons/movieOpenCheck";
import movies from "@assets/images/icons/movies";
import phone from "@assets/images/icons/phone";
import refer from "@assets/images/icons/refer";
import score from "@assets/images/icons/score";
import search from "@assets/images/icons/search";
import stream from "@assets/images/icons/stream";
import tv from "@assets/images/icons/tv";
import user from "@assets/images/icons/user";
import random from "@assets/images/icons/random";
import americanExpress from "@assets/images/icons/americanExpress";
import giftCard from "@assets/images/icons/giftCard";
import ionBarcode from "@assets/images/icons/ionBarcode";
import mastercard from "@assets/images/icons/mastercard";
import visa from "@assets/images/icons/visa";
import personCircle from "@assets/images/icons/personCircle";
import play from "@assets/images/icons/play";
import alert from "@assets/images/icons/alert";
import signal from "@assets/images/icons/signal";
import whatsapp from "@assets/images/icons/whatsapp";
import telegram from "@assets/images/icons/telegram";
import gmail from "@assets/images/icons/gmail";
import options from "@assets/images/icons/options";

const icons = {
  options,
  telegram,
  gmail,
  whatsapp,
  arrowDown,
  arrowLeft,
  arrowRight,
  arrowUp,
  calendar,
  check,
  chevronDown,
  chevronLeft,
  chevronRight,
  chevronUp,
  close,
  configuration,
  copy,
  email,
  eye,
  eyeClose,
  favorite,
  help,
  home,
  info,
  logout,
  more,
  movieOpen,
  movieOpenCheck,
  movies,
  phone,
  refer,
  score,
  search,
  stream,
  tv,
  user,
  random,
  americanExpress,
  giftCard,
  ionBarcode,
  mastercard,
  visa,
  personCircle,
  play,
  alert,
  signal,
};

export const Icons = icons;

export default function Icon({
  name,
  color = "red",
  bg = "red",
  size,
}: {
  name: keyof typeof icons;
  color?: string;
  bg?: string;
  size: number | string;
}) {
  let icon = icons[name].includes("#color")
    ? icons[name].split("#color").join(color)
    : icons[name];
  icon = icon.includes("#bg") ? icon.split("#bg").join(bg) : icon;
  return <SvgXml xml={icon} width={size} height={size} />;
}
