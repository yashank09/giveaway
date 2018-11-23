import React from "react";
import { Appbar, Title } from "react-native-paper";
import { StyleSheet, SafeAreaView } from "react-native";

export default class AppBar extends React.PureComponent {
  render() {
    return (
      <SafeAreaView>
        <Appbar style={styles.AppBar}>
          <Title>Bhaaw</Title>
        </Appbar>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  AppBar: {
    elevation: 6,
    justifyContent: "center"
  }
});
