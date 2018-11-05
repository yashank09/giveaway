import React from "react";
import { View } from "react-native";

import { Text, Button } from "react-native-paper";

import firebase from "../Firebase.js";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);
  }

  logOut = async () => {
    await firebase.auth().signOut();
    this.props.navigation.navigate("SignIn");
  }

  render() {
    console.log(firebase.auth().currentUser)
    return (
      <View>
        <Text>Profile Settings</Text>
        <Button onPress={this.logOut}>Sign Out</Button>
      </View>
    );
  }
}