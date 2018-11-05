import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import {  Title } from "react-native-paper";

import { BidCard } from "../components/Bids/BidCard";
import { BidTitle } from "../components/Bids/BidTile";

export default class BidScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Title style={styles.heading}>FEATURED BIDS FOR YOU</Title>
        <BidTitle navigate={this.props.navigation.navigate} />
        <Title style={styles.heading}>CURRENT BIDS</Title>
        <BidCard navigate={this.props.navigation.navigate} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  heading: {
    marginTop: 8,
    margin: 8
  }
});