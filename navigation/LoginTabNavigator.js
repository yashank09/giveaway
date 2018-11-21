import { createBottomTabNavigator } from "react-navigation";

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
      style: {
        height: 65
      },
      labelStyle: {
        fontSize: 14,
        textAlign: "center"
      }
    }
  }
);
