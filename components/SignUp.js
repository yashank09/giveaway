import React from "react";
import { View, StyleSheet } from "react-native";

import { Surface, Button, TextInput } from "react-native-paper";

import firebase from "../Firebase";

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  static navigationOptions = {
    header: null
  };

  userSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("Main"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Surface style={styles.surface}>
          <TextInput
            mode="outlined"
            autoCapitalize="none"
            label="Email Address"
            value={this.state.email}
            keyboardType={"email-address"}
            onChangeText={text => this.setState({ email: text })}
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="Password"
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
            style={styles.input}
          />

          <Button onPress={this.userSignUp} mode="contained">
            Sign Up
          </Button>
        </Surface>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  surface: {
    padding: 8,
    marginHorizontal: 15,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4
  },
  input: {
    width: 350,
    marginBottom: 15
  }
});
