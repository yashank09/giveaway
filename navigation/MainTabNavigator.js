import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";

import HomeScreen from "../screens/HomeScreen";
import BidScreen from "../screens/BidScreen";
import ProfileScreen from '../screens/ProfileScreen';
import Bid from "../components/Bids/Bid";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarOptions: {
    activeTintColor: "black",
    inactiveTintColor: "gray"
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  )
};

const BidStack = createStackNavigator({
  BidFeed: BidScreen,
  Bid: Bid
});

BidStack.navigationOptions = {
  tabBarLabel: "Bid Feed",
  tabBarOptions: {
    activeTintColor: "black",
    inactiveTintColor: "gray"
  },
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
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  ),
  tabBarOptions: {
    activeTintColor: "black",
    inactiveTintColor: "gray"
  }
};

export default createBottomTabNavigator(
  {
    HomeStack,
    BidStack,
    ProfileStack
  },
  {
    initialRouteName: "BidStack"
  }
);
