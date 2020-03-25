import { createBottomTabNavigator } from "react-navigation-tabs";

import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";

export default createBottomTabNavigator(
  {
    "Log In": LogIn,
    "Sign Up": SignUp
  },
  {
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
