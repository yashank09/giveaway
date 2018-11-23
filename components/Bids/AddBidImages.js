import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Card } from "react-native-paper";

export const AddBidImages = props => {
  return (
    <ScrollView
      horizontal
      snapToInterval={120}
      snapToAlignment={"center"}
      contentContainerStyle={styles.container}
    >
      {props.data.length === 0 && (
        <Card style={styles.card}>
          <Card.Cover source={{ uri: props.data.uri }} />
        </Card>
      )}

      {props.data.length >= 0 &&
        props.data.map(i => (
          <Card key={i.uri} style={styles.card}>
            <Card.Cover source={{ uri: i.uri }} />
          </Card>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "flex-end"
  },
  card: {
    elevation: 2,
    margin: 10,
    width: 120
  }
});
