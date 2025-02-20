import React from "react";
import I18n from "@hooks/useLocalize";

import Toast from 'react-native-toast-message';

// Create here and listener callbacks
var listeners = {
  success: (text: string, subtext?: string, duration?: number) => {},
  error: (text: string, subtext?: string, duration?: number) => {},
  info: (text: string, subtext?: string, duration?: number) => {},
};

export class RsToastComponent extends React.Component {
  toast: any = null;

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const self = this;
    listeners = {
      success: (text: string, subtext?: string, duration?: number) => self.success(text, subtext, duration),
      error: (text: string, subtext?: string, duration?: number) => self.error(text, subtext, duration),
      info: (text: string, subtext?: string, duration?: number) => self.info(text, subtext, duration),
    };
  }

  success(text: string, subtext?: string, duration?: number) {
    this.show('success', text, subtext, duration);
  }

  error(text: string, subtext?: string, duration?: number) {
    this.show('error', text, subtext, duration);
  }

  info(text: string, subtext?: string, duration?: number) {
    this.show('info', text, subtext, duration);
  }

  private show(
    type: string,
    text: string,
    subtext: string | undefined,
    duration: number = 4000
  ) {
    Toast.show({
      type,
      text1: I18n.t(text),
      text2: I18n.t(subtext),
      visibilityTime: duration,
      position: 'bottom'
    });
  }

  render() {
    return (
      <Toast />
    );
  }
}

export class RsToast {
  static success(text: string, subtext?: string, duration?: number) {
    listeners.success(text, subtext, duration);
  }

  static error(text: string, subtext?: string, duration?: number) {
    listeners.error(text, subtext, duration);
  }

  static info(text: string, subtext?: string, duration?: number) {
    listeners.info(text, subtext, duration);
  }
}
