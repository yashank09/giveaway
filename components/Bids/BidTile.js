import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import { Card, Title, Paragraph } from "react-native-paper";

import data from "../../assets/MOCK_DATA.json";

export const BidTitle = () => {
  openBid = (bid) => {
    props.navigate("Bid",{ data: bid})
  }  

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.products.slice(10, 15).map(i => (
          <Card style={styles.card} key={i.id} onPress={() => this.openBid(i)}>
            <Card.Cover source={{ uri: i.product_img }} />
            <Card.Content style={styles.content}>
              <Title>{i.product_name}</Title>
              <Paragraph>{i.product_bid}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
  card: {
    margin: 10,
    width: 380
  },
  content: {
    alignItems: "center"
  }
});