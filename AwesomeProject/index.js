/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import  Login  from './src/screens/Login';
import SignUp  from './src/screens/SignUp';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
AppRegistry.registerComponent(appName, () => App);
