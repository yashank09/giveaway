import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import {
  Surface,
  Button,
  Text,
  TextInput,
  Headline,
  Title,
  Portal,
  Dialog
} from "react-native-paper";

import firebase from "../Firebase";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  const userSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => props.navigation.navigate("Main"))
      .catch(error => {
        setError(error.message);
        setVisible(true);
        return;
      });
  };

  return (
    <View style={styles.container}>
      <Headline style={styles.mainTitle}>
        Essentials don't care about Crisis
      </Headline>

      <Title style={styles.secondTitle}>
        Share Essentials like Food & Utilities and help our community.
      </Title>
      <Surface style={styles.surface}>
        <TextInput
          mode="outlined"
          autoCapitalize="none"
          label="Email Address"
          value={email}
          keyboardType={"email-address"}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          style={styles.input}
        />

        <Button onPress={userSignIn} mode="contained">
          Log In
        </Button>
      </Surface>

      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Text
            style={{
              fontFamily: "open-sans-bold",
              textAlign: "center",
              marginTop: 12,
              marginBottom: 12,
              fontSize: 16
            }}
          >
            Invalid Credentials
          </Text>
          <Dialog.Content>
            <Text style={{ fontFamily: "open-sans", fontSize: 15 }}>
              {error}
              {/* Please check your Email and Password. */}
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  mainTitle: {
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32,
    fontFamily: "open-sans-bold"
  },
  secondTitle: {
    textAlign: "center",
    marginBottom: 32,
    maxWidth: "98%",
    fontFamily: "open-sans"
  },
  surface: {
    padding: 8,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4
  },
  input: {
    width: 350,
    marginBottom: 15
  }
});
