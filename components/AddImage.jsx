import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

import { Text } from "react-native-paper";

import { NavigationEvents } from "react-navigation";

export default function AddImage(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <Text
        style={{
          fontFamily: "open-sans",
          textAlign: "center",
          marginTop: 12,
          fontSize: 15
        }}
      >
        Please Give Camera Access for easier donations!
      </Text>
    );
  }

  const snap = async () => {
    let photo = await camera.takePictureAsync();
    props.addImage(photo);
  };

  return (
    <View style={{ flex: 1, margin: 14 }}>
      <NavigationEvents
        onWillFocus={() => setLoaded(true)}
        onDidBlur={() => setLoaded(false)}
      />
      {loaded && (
        <Camera
          style={{ flex: 1 }}
          type={type}
          ref={ref => {
            camera = ref;
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row"
            }}
          >
            <TouchableOpacity style={styles.cameraBtn} onPress={snap}>
              <Ionicons name="ios-camera" size={32} color="black" />
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cameraBtn: {
    height: 45,
    width: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: 12,
    borderRadius: 4
  }
});
