import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { Surface, Title, TextInput } from "react-native-paper";

import GeoLocation from "../components/GeoLocation";

export default creen = () => {
  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");

  return (
    <View>
      <Title style={styles.title}>
        Thank You for Donating Food & Utilities for our Community!
      </Title>

      <Surface style={styles.surface}>
        <TextInput
          mode="outlined"
          label="Item Name"
          value={itemName}
          onChangeText={text => setItemName(text)}
          style={styles.input}
        />

        <TextInput
          mode="outlined"
          label="Item Description"
          value={itemDesc}
          multiline={true}
          onChangeText={text => setItemDesc(text)}
          style={styles.inputDesc}
        />

        <GeoLocation />
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    marginTop: 12,
    marginBottom: 32,
    width: "98%"
  },
  surface: {
    padding: 8,
    marginHorizontal: 15,
    alignItems: "center",
    elevation: 4
  },
  input: {
    width: "70%",
    marginBottom: 15
  },
  inputDesc: {
    width: "70%",
    height: 120,
    marginBottom: 15
  }
});

creen.navigationOptions = {
  headerShown: false
};
