import React, { Component } from "react";
import { Text, View } from "react-native";
import { Permissions } from "expo";
import { withNavigationFocus } from "react-navigation";
import renderIf from "render-if";

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

  render() {
    const { hasCameraPermission } = this.state;
    const { isFocused } = this.props;

    const renderIfNoCameraPermission = renderIf(
      hasCameraPermission === null || hasCameraPermission === false
    );

    const renderIfHasCameraPermissionsAndIsFocussed = renderIf(
      (hasCameraPermission !== null || !!hasCameraPermission) && isFocused
    );

    return (
      <View style={{ flex: 1 }}>
        {renderIfNoCameraPermission(<Text>Please give access to camera to add bids :)</Text>)}
        {renderIfHasCameraPermissionsAndIsFocussed(<CameraScreen />)}
      </View>
    );
  }
}

export default withNavigationFocus(AddBidScreen);
