export interface GeneralState {
  deviceType: number;
}

export type GeneralAction = { type: "SET_DEVICE_TYPE"; deviceType: number };

export interface GeneralContextActions {
  setDeviceType: (deviceType: number) => void;
}

export interface GeneralContextType
  extends GeneralState,
    GeneralContextActions {}
