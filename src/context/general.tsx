import * as React from "react";
import * as Device from "expo-device";
import useCachedResources from "@hooks/useCachedResources";
import {
  GeneralContextType,
  GeneralContextActions,
  GeneralState,
  GeneralAction,
} from "@interfaces/general";

export const GeneralContext = React.createContext<GeneralContextType>({
  deviceType: Device.DeviceType.PHONE,
  setDeviceType: () => {},
});

export const GeneralProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [firstLoading, setFirstLoading] = React.useState(false);
  const { setLoadingComplete, isLoadingAssets } = useCachedResources();
  const [state, dispatch] = React.useReducer(GeneralReducer, {
    deviceType: Device.DeviceType.PHONE,
  });

  React.useEffect(() => {
    const initState = async () => {
      try {
        const deviceType = await Device.getDeviceTypeAsync();
        dispatch({ type: "SET_DEVICE_TYPE", deviceType: deviceType });
      } catch (e) {}
      setFirstLoading(true);
      setLoadingComplete(true);
    };
    initState();
  }, []);

  const generalActions: GeneralContextActions = React.useMemo(
    () => ({
      setDeviceType: async (deviceType: number) => {
        dispatch({ type: "SET_DEVICE_TYPE", deviceType });
      },
    }),
    []
  );

  return firstLoading === true && isLoadingAssets === true ? (
    <GeneralContext.Provider value={{ ...state, ...generalActions }}>
      {children}
    </GeneralContext.Provider>
  ) : (
    <></>
  );
};

const GeneralReducer = (
  prevState: GeneralState,
  action: GeneralAction
): GeneralState => {
  switch (action.type) {
    case "SET_DEVICE_TYPE":
      return {
        ...prevState,
        deviceType: action.deviceType,
      };
  }
};
