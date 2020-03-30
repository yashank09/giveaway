import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import showDonationScreen from "../screens/ShowDonationScreen";
import AddDonateScreen from "../screens/AddDonateScreen";
import Bid from "../components/Bids/Bid";

const DonationStack = createStackNavigator({
  BidFeed: showDonationScreen,
  Bid: Bid
});

DonationStack.navigationOptions = {
  tabBarLabel: "Donations"
};

const DonateStack = createStackNavigator({
  Donate: AddDonateScreen
});

DonateStack.navigationOptions = {
  tabBarLabel: "Donate"
};

export default createBottomTabNavigator(
  {
    DonationStack,
    DonateStack
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
