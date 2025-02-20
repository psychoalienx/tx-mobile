import { DeviceType } from "expo-device";
declare module "expo-device" {
  class Device {
    get isDevice(): boolean;
    get brand(): null;
    get manufacturer(): null;
    get modelName(): string | null;
    get deviceYearClass(): null;
    get totalMemory(): number | null;
    get supportedCpuArchitectures(): string[] | null;
    get osName(): string;
    get osVersion(): string;
    get osBuildId(): null;
    get osInternalBuildId(): null;
    get deviceName(): null;
    getDeviceTypeAsync(): Promise<DeviceType>;
    isRootedExperimentalAsync(): Promise<boolean>;
  }
}
