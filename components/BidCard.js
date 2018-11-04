import React from "react";
import { View, StyleSheet } from "react-native";

import { Button, Card, Title, Paragraph } from "react-native-paper";

import data from "../assets/MOCK_DATA.json";

export const BidCard = () => {
  return (
    <View style={styles.container}>
      {data.slice(0, 10).map(i => (
        <Card style={styles.card} key={i.id}>
          <Card.Cover source={{ uri: i.product_img }} />
          <Card.Content style={styles.content}>
            <Title>{i.product_name}</Title>
            <Paragraph>{i.product_bid}</Paragraph>
            <Card.Actions>
              <Button>Pass</Button>
              <Button mode="contained" color={"#ffeb3b"}>
                BID
              </Button>
            </Card.Actions>
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
    justifyContent: "center"
  },
  card: {
    elevation: 2,
    margin: 10
  },
  content: {
    alignItems: "center"
  }
});
