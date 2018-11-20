import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Card } from "react-native-paper";

import { Permissions } from "expo";

import { withNavigationFocus } from "react-navigation";

import CameraScreen from "./CameraScreen";

class AddBidScreen extends Component {
  state = {
    hasCameraPermission: null,
  };

  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

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
            <CameraScreen />
          )}
          <View>
                {this.state.bidImages.length !== 0 && (
                // Array.from(this.state.bidImages).map((i) => {
                  <Card style={styles.card}>
                    <Card.Cover source={{ uri: this.state.bidImages.uri }} />
                  </Card>
                  // })
                )}
              </View>
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
