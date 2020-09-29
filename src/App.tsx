import React, { PureComponent } from "react";

import { StyleSheet, View } from "react-native";

import Test from "./Test";

type Props = { };

type State = { };

export default class App extends PureComponent<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Test />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "blue"
  }
});
