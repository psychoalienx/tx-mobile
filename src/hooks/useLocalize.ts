import * as Localization from "expo-localization";
import es from "@locales/es";
import i18n from "i18n-js";

i18n.fallbacks = true;

i18n.translations = {
  es,
};

i18n.locale = "es";
i18n.missingTranslation = (value) => {
  return value;
};

// i18n.locale = Localization.locale;

export default i18n;
