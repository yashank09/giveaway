import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Card, Title, Paragraph,  } from "react-native-paper";

import { Camera, Permissions } from "expo";

import { withNavigationFocus } from "react-navigation";

class AddBidScreen extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    bidImages: []
  };

  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

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
        console.log(this.state.bidImages);
      }
    }
  };

  componentWillUnmount() {}
  render() {
    const { hasCameraPermission } = this.state;
    const { isFocused } = this.props;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>Please give access to camera to add bids :)</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          {isFocused && (
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
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                  >
                    {" "}
                    Flip{" "}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.snap}>
                  <Text>CLICK</Text>
                </TouchableOpacity>
              </View>

              <View>
                {this.state.bidImages.length !== 0 && (
                // Array.from(this.state.bidImages).map((i) => {
                  <Card style={styles.card}>
                    <Card.Cover source={{ uri: this.state.bidImages.uri }} />
                  </Card>
                  // })
                )}
              </View>
            </Camera>
          )}
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  card: {
    width: 150,
    margin: 10
  }
});

export default withNavigationFocus(AddBidScreen);
