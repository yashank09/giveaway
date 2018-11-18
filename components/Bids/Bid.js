import React from "react";
import { View, StyleSheet } from "react-native";

import { Button, Card, Title, Paragraph } from "react-native-paper";

export default class Bid extends React.Component {
  render() {
    const data = this.props.navigation.state.params.data;
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: data.product_img }} />
          <Card.Content style={styles.content}>
            <Title>{data.product_name}</Title>
            <Paragraph>{data.product_bid}</Paragraph>
          </Card.Content>
          <Card.Actions style={styles.content}>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  card: {
    elevation: 4,
    margin: 10
  },
  content: {
    alignItems: "center"
  }
});
