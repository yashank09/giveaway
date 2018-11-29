import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export const AddBidImages = props => {
  return (
    <ScrollView
      horizontal
      snapToInterval={120}
      snapToAlignment={"center"}
      contentContainerStyle={styles.container}
    >
      {props.data.length >= 0 && (
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="ios-checkmark-circle"
            size={38}
            color="#fdd835"
            style={{margin: 18}}
          />
          {props.data.map(i => (
            <Card key={i.uri} style={styles.card}>
              <Card.Cover source={{ uri: i.uri }} />
            </Card>
          ))}
        </View>
      )}
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
    width: 120,
    height: 70
  }
});
