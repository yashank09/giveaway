import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Title } from "react-native-paper";

import { BidCard } from "../components/Bids/BidCard";
import { BidTitle } from "../components/Bids/BidTile";

export default BidScreen = props => {
  return (
    <ScrollView style={styles.container}>
      <Title style={styles.heading}>FEATURED BIDS FOR YOU</Title>
      <BidTitle navigate={props.navigation.navigate} />
      <Title style={styles.heading}>CURRENT BIDS</Title>
      <BidCard navigate={props.navigation.navigate} />
    </ScrollView>
  );
};

BidScreen.navigationOptions = {
  headerShown: false
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  heading: {
    marginTop: 8,
    margin: 8
  }
});
