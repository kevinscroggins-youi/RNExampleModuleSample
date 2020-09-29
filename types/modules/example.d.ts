import "react-native";

export interface Example {
  getNickname: () => Promise<string>;
  setNickname: (string) => Promise<boolean>;
  getIPAddress: () => Promise<string>;
  getLoadedScripts: () => Promise<string[]>;
}

declare module "react-native" {
  export interface NativeModulesStatic {
    Example?: Example;
  }
}
