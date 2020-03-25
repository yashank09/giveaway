import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AddBidScreen from "../screens/AddBidScreen";
import BidScreen from "../screens/BidScreen";
import AddDonationScreen from "../screens/AddDonationScreen";
import Bid from "../components/Bids/Bid";

const DonationStack = createStackNavigator({
  BidFeed: BidScreen,
  Bid: Bid
});

DonationStack.navigationOptions = {
  tabBarLabel: "Donations"
};

const ProfileStack = createStackNavigator({
  Profile: AddDonationScreen,
  AddBid: AddBidScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Donate"
};

export default createBottomTabNavigator(
  {
    DonationStack,
    ProfileStack
  },
  {
    initialRouteName: "DonationStack",
    tabBarOptions: {
      activeTintColor: "black",
      labelStyle: {
        fontSize: 14,
        marginBottom: 14,
        fontFamily: "open-sans-bold"
      }
    }
  }
);
