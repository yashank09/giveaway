import React from "react";
import { View, StyleSheet } from "react-native";

import { Card, Title, Paragraph } from "react-native-paper";

import data from "../../assets/MOCK_DATA.json";

export const BidCard = (props) => {
  openBid = (bid) => {
    props.navigate("Bid", {data: bid});
  }

  return (
    <View style={styles.container}>
      {data.products.slice(0, 10).map(i => (
        <Card style={styles.card} key={i.id} onPress={() => this.openBid(i)}>
          <Card.Cover source={{ uri: i.product_img }} />
          <Card.Content style={styles.content}>
            <Title>{i.product_name}</Title>
            <Paragraph>{i.product_bid}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  card: {
    elevation: 4,
    margin: 10,
    width: 170
  },
  content: {
    alignItems: "center"
  }
});
