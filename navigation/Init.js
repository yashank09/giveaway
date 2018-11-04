import React from "react";
import { ActivityIndicator } from "react-native";

export default class Init extends React.Component {
  constructor(props) {
    super(props);
    this.checkLogin();
  }
  checkLogin = () => {
    const userLoggedIn = true;
    this.props.navigation.navigate(userLoggedIn ? "Main" : "Login");
  };

  render() {
    return <ActivityIndicator />;
  }
}
