import {
  NativeModules,
  NativeEventEmitter
} from "react-native";

const { Example } = NativeModules;

class ExampleModule {
  private exampleEmitter: NativeEventEmitter;

  constructor() {
    this.exampleEmitter = new NativeEventEmitter(NativeModules?.Example);
  }

  addEventListener(type: string, callback: (eventData: any) => void) {
    this.exampleEmitter.addListener(type, callback)
  }

  removeEventListener(type: string, callback: (eventData: any) => void) {
    this.exampleEmitter.removeListener(type, callback)
  }

  getNickname() {
    return Example?.getNickname();
  }

  setNickname(nickname: string) {
    return Example?.setNickname(nickname);
  }

  getIPAddress() {
    return Example?.getIPAddress();
  }

  getLoadedScripts() {
    return Example?.getLoadedScripts();
  }
}

export default Object.freeze(new ExampleModule());
