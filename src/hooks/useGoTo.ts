import { Share, Linking } from "react-native";

export default (
  navigation: any,
  route: any,
  loading = false,
  name: string,
  params?: object | undefined
) => {
  const excludeRoutes = [] as string[];
  if (!loading) {
    if (excludeRoutes.includes(name)) {
      Linking.openURL(`https://www.google.com/search?q=${name}`).catch(
        (err) => {}
      );
    } else if (name === "menu") {
      navigation.toggleDrawer();
    } else if (name === "back" && navigation.canGoBack()) {
      navigation.goBack();
    } else if (name === "share") {
      Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
    } else {
      navigation.navigate(name, {
        ...params,
      });
    }
  }
};

export const canGoBack = (navigation?: any) => {
  if (navigation?.canGoBack()) {
    return true;
  }
  return false;
};
