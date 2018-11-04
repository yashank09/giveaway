import { createSwitchNavigator } from 'react-navigation';

import Init from "./Init";
import MainTabNavigator from './MainTabNavigator';
import LoginTabNavigator from './LoginTabNavigator';

export default createSwitchNavigator({
  Init: Init,
  Main: MainTabNavigator,
  Login: LoginTabNavigator
});