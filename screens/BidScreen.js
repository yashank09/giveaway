import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { BidCard } from "../components/BidCard";

export default class BidScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView>
        <BidCard/>
      </ScrollView>
    );
  }
}
