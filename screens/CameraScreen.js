import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { Camera } from "expo";

export default class CameraScreen extends Component {
  state = {
    type: Camera.Constants.Type.back,
    bidImages: []
  };

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      if (this.state.bidImages.length === 0) {
        this.setState({ bidImages: photo });
        return;
      } else {
        this.setState(prevState => ({
          bidImages: [prevState.bidImages, photo]
        }));
      }
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
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center"
            }}
            onPress={() => {
              this.setState({
                type:
                  this.state.type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
              });
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.snap}>
            <Text>CLICK</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    );
  }
}
