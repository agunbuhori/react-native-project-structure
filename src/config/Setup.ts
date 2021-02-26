import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { getVersion } from 'react-native-device-info';
import { ANDROID_PREV_VERSION, IOS_PREV_VERSION } from '@env';

export interface Props {
    PREV_VERSION: String
}

const setup = async () => {
    const VERSION = Platform.OS + '_' + getVersion();
    const PREV_VERSION = Platform.OS === 'android' ? ANDROID_PREV_VERSION : IOS_PREV_VERSION;
    
    await AsyncStorage.getItem('setup' + PREV_VERSION)
    .then((result: any) => {
        if (result) {
            messaging().unsubscribeFromTopic(PREV_VERSION.toString());
            messaging().unregisterDeviceForRemoteMessages();
            AsyncStorage.removeItem('setup' + PREV_VERSION);
        }
    })

    await AsyncStorage.getItem('setup' + VERSION)
    .then((result: any) => {
        if (! result) {
            messaging().subscribeToTopic(VERSION);
            messaging().registerDeviceForRemoteMessages();
            AsyncStorage.setItem('setup', JSON.stringify({app_version: VERSION, last_setup: (new Date).toString()}));
        } 
    })
    .catch(error => {
        
    })
}

setup();