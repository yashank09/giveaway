import React from "react";
import { Appbar, Title } from "react-native-paper";
import {  StyleSheet } from "react-native";

export default class AppBar extends React.PureComponent {
  render() {
    return (
      <Appbar style={styles.AppBar}>
        <Title>Bhaaw</Title>
      </Appbar>
    );
  }
}

const styles = StyleSheet.create({
    AppBar: {
        elevation: 6,
        justifyContent: 'center',
    }
  });