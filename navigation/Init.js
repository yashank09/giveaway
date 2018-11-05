import React from "react";
import { ActivityIndicator } from "react-native";

import firebase from "../Firebase.js";

export default class Init extends React.Component {
  constructor(props) {
    super(props);
    this.checkLogin();
  }

  checkLogin = () => {
    var userLoggedIn = true;
    firebase
      .auth()
      .onAuthStateChanged(
        user => (user ? (userLoggedIn = true) : (userLoggedIn = false))
      );
    this.props.navigation.navigate(userLoggedIn ? "Main" : "Login");
  };

  render() {
    return <ActivityIndicator />;
  }
}
