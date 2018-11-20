import React, { Component } from "react";
import { Text, View } from "react-native";

import { Permissions } from "expo";

import { withNavigationFocus } from "react-navigation";

import CameraScreen from "../components/CameraScreen";

class AddBidScreen extends Component {
  state = {
    hasCameraPermission: null
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
      return isFocused && <CameraScreen />;
    }
  }
}

export default withNavigationFocus(AddBidScreen);
