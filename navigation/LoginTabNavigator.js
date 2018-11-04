import { createBottomTabNavigator } from 'react-navigation';

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

export default createBottomTabNavigator({
    SignIn,
    SignUp
})