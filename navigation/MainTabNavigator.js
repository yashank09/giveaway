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

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarOptions: {
    activeTintColor: "#64dd17",
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
  BidFeed: BidScreen
});

BidStack.navigationOptions = {
  tabBarLabel: "Bid Feed",
  tabBarOptions: {
    activeTintColor: "#64dd17",
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
    activeTintColor: "#64dd17",
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
