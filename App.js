import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

type Props = {};
export default class App extends Component<Props> {
  state = {
    countdownNumber: 10000000
  };

  componentDidMount = () => {
    if (!!!this.interval) {
      this.interval = setInterval(() => {
        this.setState(prevState => ({
          countdownNumber: prevState.countdownNumber - 1
        }));
      }, 10);
    }
  };

  componentDidUpdate() {
    if (this.state.countdownNumber <= 0) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { countdownNumber } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{countdownNumber}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
