import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { Button } from "react-native-paper";

import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      setError("errorMessage: 'Permission to access location was denied'");
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log(location);
  };

  return (
    <View>
      <Button onPress={getLocationAsync} mode="contained">
        Get Location
      </Button>
    </View>
  );
};
