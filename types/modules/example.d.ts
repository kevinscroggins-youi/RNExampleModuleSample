import "react-native";

import { EventSubscriptionVendor } from "react-native";

export interface Example extends EventSubscriptionVendor {
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
