import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

import { Portal, Dialog, Text, Button } from "react-native-paper";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default props => {
  const [visible, setVisible] = useState(false);
  const [loading, toggleLoading] = useState(false);

  const getLocationAsync = async () => {
    console.log(loading);
    toggleLoading(true);
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      toggleLoading(false);
      setVisible(true);
    }

    let location = await Location.getCurrentPositionAsync();
    toggleLoading(false);
    props.setLocation(location);
  };

  return (
    <View>
      {props.location === null && loading !== true ? (
        <Button onPress={getLocationAsync} mode="contained">
          Get Location
        </Button>
      ) : loading === true ? (
        <ActivityIndicator />
      ) : (
        <Button mode="outlined">Received</Button>
      )}
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Text
            style={{
              fontFamily: "open-sans-bold",
              textAlign: "center",
              marginTop: 12,
              marginBottom: 12,
              fontSize: 16
            }}
          >
            Location Permission Required
          </Text>
          <Dialog.Content>
            <Text style={{ fontFamily: "open-sans", fontSize: 15 }}>
              Please Enable Location so we know where to send the donees.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Okay</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};
