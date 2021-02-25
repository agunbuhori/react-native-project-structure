/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import '@config/PushNotification';
import '@config/Setup';

AppRegistry.registerComponent(appName, () => App);
