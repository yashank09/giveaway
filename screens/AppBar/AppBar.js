import React from "react";
import { Appbar, Title } from "react-native-paper";
import { StyleSheet } from "react-native";

export default class AppBar extends React.PureComponent {
  render() {
    return (
      <Appbar style={styles.AppBar}>
        <Title style={{ fontFamily: "open-sans-bold" }}>ShareCare</Title>
      </Appbar>
    );
  }
}

const styles = StyleSheet.create({
  AppBar: {
    elevation: 6,
    paddingLeft: 12,
    fontFamily: "open-sans"
  }
});
