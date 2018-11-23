import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Platform } from "react-native";

import { Camera } from "expo";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import { AddBidImages } from "./Bids/AddBidImages";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default class CameraScreen extends Component {
  constructor() {
    super();
    this.state = {
      type: Camera.Constants.Type.back,
      bidImages: []
    };
  }

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      this.setState({ bidImages: this.state.bidImages.concat(photo) });
    }
  };

  render() {
    return (
      <Camera
        style={{ flex: 1 }}
        type={this.state.type}
        ref={ref => {
          this.camera = ref;
        }}
      >
        <View
          style={{
            backgroundColor: "transparent",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.setState({
                type:
                  this.state.type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
              });
            }}
            style={styles.cameraBtn}
          >
            <MaterialIcons name="sync" size={28} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.cameraBtn} onPress={this.snap}>
            <Ionicons name="ios-camera" size={32} color="black" />
          </TouchableOpacity>
        </View>
        {this.state.bidImages.length !== 0 && (
          <View
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              left: 20,
              bottom: 20
            }}
          >
            <AddBidImages data={this.state.bidImages} />
          </View>
        )}
      </Camera>
    );
  }
}

const styles = StyleSheet.create({
  cameraBtn: {
    margin: 10,
    height: 45,
    width: 100,
    backgroundColor: "#fff",
    padding: 5,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  }
});
