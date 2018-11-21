import React from "react";
import { Platform, Text } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";

import AddBidScreen from "../screens/AddBidScreen";
import BidScreen from "../screens/BidScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Bid from "../components/Bids/Bid";

const HomeStack = createStackNavigator({
  AddBid: AddBidScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Add Bid",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-add-circle" : "md-add-circle"}
    />
  )
};

const BidStack = createStackNavigator({
  BidFeed: BidScreen,
  Bid: Bid
});

BidStack.navigationOptions = {
  tabBarLabel: "Bid Feed",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-analytics" : "md-analytics"}
    />
  )
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createBottomTabNavigator(
  {
    HomeStack,
    BidStack,
    ProfileStack
  },
  {
    initialRouteName: "BidStack",
    tabBarOptions: {
      style: {
        height: 65
      },
      activeTintColor: "black",
      labelStyle: {
        fontSize: 14,
        textAlign: "center"
      }
    }
  }
);
