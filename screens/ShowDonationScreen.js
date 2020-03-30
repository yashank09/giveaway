import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";

import { Title, Portal, Dialog, Text, Button } from "react-native-paper";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView, { Marker } from "react-native-maps";

import firebase from "../Firebase";

// import { BidCard } from "../components/Bids/BidCard";
// import { BidTitle } from "../components/Bids/BidTile";
/* <BidTitle navigate={props.navigation.navigate} />
<Title style={styles.heading}>CURRENT BIDS</Title>
<BidCard navigate={props.navigation.navigate} /> */

export default showDonationScreen = props => {
  const [latitude, setlatitude] = useState(35);
  const [longitude, setlongitude] = useState(-121);
  const [donations, setDonations] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function getLocation() {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status !== "granted") {
        setVisible(true);
      } else if (status === "granted") {
        let location = await Location.getCurrentPositionAsync();
        setlatitude(location.coords.latitude);
        setlongitude(location.coords.longitude);
      }
    }

    async function getData() {
      const db = firebase.database().ref("donations");
      let data = [];
      //Change this ASAP! Has to be a cleaner way!
      db.on("value", snapshot => {
        for (let i in snapshot.val()) {
          for (let j in snapshot.val()[i]) {
            data.push(snapshot.val()[i][j]);
          }
        }
        return data;
      });
      setDonations(data);
    }

    getLocation();
    getData();
  }, []);

  donations.map(donation =>
    console.log({ long: donation.longitude, lat: donation.latitude })
  );
  return (
    <View style={styles.container}>
      <ScrollView>
        <Title style={styles.heading}>Donations Around You</Title>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
          showsUserLocation={true}
        >
          {donations.length >= 0 &&
            donations.map((donation, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: donation.latitude,
                  longitude: donation.longitude
                }}
                title={donation.itemName}
                description={donation.itemDesc}
              />
            ))}
        </MapView>
      </ScrollView>

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
            Location Permission Required
          </Text>
          <Dialog.Content>
            <Text style={{ fontFamily: "open-sans", fontSize: 15 }}>
              Please Enable Location so we can show closest Donations.
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

showDonationScreen.navigationOptions = {
  headerShown: false
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%"
  },
  heading: {
    marginTop: 8,
    marginBottom: 8,
    textAlign: "center",
    fontFamily: "open-sans"
  },
  mapStyle: {
    marginLeft: "auto",
    marginRight: "auto",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.45
  }
});
