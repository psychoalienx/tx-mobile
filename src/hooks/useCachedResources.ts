import { IAPIUserInformationDef } from "@interfaces/api_interfaces/user";
import { ApiService } from "@services/api/core/api.service";
import { DataShareService } from "@services/data-share.service";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

let apiInitialized = false;

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [isLoadingAssets, setLoadingAssets] = React.useState(false);

  React.useEffect(() => {
    if (isLoadingComplete && isLoadingAssets) {
      SplashScreen.hideAsync();
    }
  }, [isLoadingComplete, isLoadingAssets]);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          "Poppins-Bold": require("@assets/fonts/Poppins-Bold.ttf"),
          "Poppins-Italic": require("@assets/fonts/Poppins-Italic.ttf"),
          "Poppins-Light": require("@assets/fonts/Poppins-Light.ttf"),
          "Poppins-Medium": require("@assets/fonts/Poppins-Medium.ttf"),
          "Poppins-Regular": require("@assets/fonts/Poppins-Regular.ttf"),
          "Poppins-SemiBold": require("@assets/fonts/Poppins-SemiBold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingAssets(true);
      }
    }
    loadResourcesAndDataAsync();
    // INITIALIZE API
    if (!apiInitialized) {
      ApiService.system.initialize().then((deviceId) => {
        // Proceed to timeout check version
        ApiService.system.checkForUpdates();
        // Check login
        ApiService.user.checkLogin();
        // Check initial route
        ApiService.user.getInformation().subscribe({
          next: (userInfo: IAPIUserInformationDef) => {
            DataShareService.subjects.create('user_info', userInfo);
            setLoadingComplete(true);
          },
        });
      });
      apiInitialized = true;
    }
  }, []);

  return { setLoadingComplete, isLoadingAssets };
}
