import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

import {
  Surface,
  Title,
  TextInput,
  FAB,
  Portal,
  Dialog,
  Text,
  Button
} from "react-native-paper";

import GeoLocation from "../components/GeoLocation";
import AddImage from "../components/AddImage";

import firebase from "../Firebase";

export default AddDonateScreen = () => {
  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [imageUri, setImage] = useState([]);
  const [location, setLocation] = useState(null);
  const [visible, setVisible] = useState(false);

  const setDonateLocation = location => setLocation(location);

  const addImage = photo => {
    setImage(photo.uri);
  };

  const addDonate = () => {
    if (itemName === "" || itemDesc === "" || imageUri.length === 0) {
      setVisible(true);
      return;
    } else {
      const database = firebase.database();

      const userId = firebase.auth().currentUser.uid;
      const timestamp = Date.now();
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;

      database.ref("donations/" + userId).push({
        itemName,
        itemDesc,
        latitude,
        longitude,
        timestamp
      });

      setImageFirebase(userId, timestamp);
      setItemName("");
      setItemDesc("");
      setImage([]);
    }
  };

  const setImageFirebase = async (userId, timestamp) => {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    var ref = firebase
      .storage()
      .ref("donationImages/" + userId)
      .child(timestamp.toString());
    return ref.put(blob);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>
        Thank You for Donating Food & Utilities for our Community!
      </Title>

      <Surface style={styles.surface}>
        <TextInput
          mode="outlined"
          label="Item Name"
          value={itemName}
          onChangeText={text => setItemName(text)}
          style={styles.input}
        />

        <TextInput
          mode="outlined"
          label="Item Description"
          value={itemDesc}
          multiline={true}
          onChangeText={text => setItemDesc(text)}
          style={styles.inputDesc}
        />

        <GeoLocation setLocation={setDonateLocation} location={location} />
      </Surface>

      {imageUri.length === 0 ? (
        <AddImage addImage={addImage} image={imageUri} />
      ) : (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUri }} />
        </View>
      )}

      <FAB color="#000000" style={styles.fab} icon="plus" onPress={addDonate} />

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
            Missing Details
          </Text>
          <Dialog.Content>
            <Text style={{ fontFamily: "open-sans", fontSize: 15 }}>
              Please Fill All Details
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Okay</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%"
  },
  title: {
    fontFamily: "open-sans",
    textAlign: "center",
    marginTop: 12,
    marginBottom: 32,
    width: "98%"
  },
  surface: {
    padding: 8,
    marginHorizontal: 15,
    alignItems: "center",
    elevation: 4
  },
  input: {
    width: "70%",
    marginBottom: 15
  },
  inputDesc: {
    width: "70%",
    maxHeight: 80,
    marginBottom: 15
  },
  fab: {
    backgroundColor: "#fdd835",
    position: "absolute",
    margin: 12,
    right: 0,
    bottom: 0,
    width: 76,
    height: 76,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100
  },
  imageContainer: {
    flex: 1,
    margin: 14
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

AddDonateScreen.navigationOptions = {
  headerShown: false
};
