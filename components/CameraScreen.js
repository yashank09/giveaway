import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { Camera } from "expo";

import { AddBidImages } from "./Bids/AddBidImages";

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
        style={{ flex: 3 }}
        type={this.state.type}
        ref={ref => {
          this.camera = ref;
        }}
      >
        <View
          style={{
            backgroundColor: "transparent"
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
          >
            <Text>Flip</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.snap}>
            <Text>CLICK</Text>
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "transparent" }}>
          {this.state.bidImages.length !== 0 && (
            <AddBidImages data={this.state.bidImages} />
          )}
        </View>
      </Camera>
    );
  }
}
