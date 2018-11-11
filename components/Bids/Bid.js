import React from "react";
import { View, Text } from "react-native";

export default class Bid extends React.Component {
  render() {
    const data = this.props.navigation.state.params.data;
    console.log(data);
    return (
      <View>
        <Text>dsd</Text>
      </View>
    );
  }
}