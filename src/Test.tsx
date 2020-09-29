import React, { PureComponent } from "react";

import {
  View,
  Text, StyleSheet
} from "react-native";

import { NativeModules } from "react-native";

const { Example } = NativeModules;

type Props = { };

type State = {
  nickname: string;
  ipAddress: string;
  loadedScripts: string[];
};

export default class Test extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      nickname: "",
      ipAddress: "",
      loadedScripts: []
    };
  }

  async componentDidMount() {
    try {
      const nickname = await Example?.getNickname() || "";

      console.log("Default Nickname: " + nickname);

      this.setState({
        nickname: nickname
      });

      await Example?.setNickname("Awesome Bridge");

      const newNickname = await Example?.getNickname() || "";

      console.log("New Nickname: " + newNickname);

      this.setState({
        nickname: newNickname
      });

      const ipAddress = await Example?.getIPAddress() || "";

      console.log("IP Address: " + ipAddress);

      this.setState({
        ipAddress: ipAddress
      });

      const loadedScripts = await Example?.getLoadedScripts() || [];

      this.setState({
        loadedScripts: loadedScripts
      });

      if(loadedScripts) {
        console.log(`${loadedScripts.length} Scripts Loaded:`);

        for(let i = 0; i < loadedScripts.length; i++) {
          console.log(`${i + 1}. ${loadedScripts[i]}`);
        }
      }
      else {
        console.log("Failed to determine loaded scripts.");
      }
    }
    catch(error) {
      console.error(error);
    }
  }

  renderLoadedScripts() {
    const { loadedScripts } = this.state;

    return loadedScripts.map((script: string, index: number) => {
      return (
        <Text style={styles.text}>{index + 1}. {script}</Text>
      );
    });
  }

  render() {
    const {
      nickname,
      ipAddress,
      loadedScripts
    } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Nickname: {nickname}</Text>
        <Text style={styles.text}>IP Address: {ipAddress}</Text>
        <Text style={styles.text}>Loaded Scripts: {loadedScripts.length}</Text>
        { this.renderLoadedScripts() }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  text: {
    color: "white",
    fontSize: 6
  }
});
