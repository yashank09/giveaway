import { createBottomTabNavigator } from 'react-navigation';

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default createBottomTabNavigator({
    SignIn,
    SignUp
})