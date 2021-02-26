import { dimensions } from '@global';
import moment from 'moment';
require('moment/locale/id');
import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import tailwind from 'tailwind-rn';
const hijri = require('moment-hijri')
import Image from 'react-native-scalable-image';
// import GetLocation from 'react-native-get-location';
import Server from '@config/Server';

export interface Props {}
const PrayingSchedule: React.FC<Props> = (props) => {
    const [location, setLocation] = useState({});

    // GetLocation.getCurrentPosition({
    //     enableHighAccuracy: true,
    //     timeout: 15000,
    // })
    // .then(location => {
      
    // })
    // .catch(error => {
    //     const { code, message } = error;
    //     console.warn(code, message);
    // })

    return (
        <ScrollView>
            <ImageBackground 
            style={tailwind('w-full')}
            source={require('@assets/img/morning.jpg')}>
                <View style={tailwind('p-4 items-center')}>
                </View>
                <View style={tailwind('p-4 w-full flex-row items-center')}>
                    <View style={tailwind('flex-1 flex-row')}>
                        <Text style={{fontSize: 20, ...tailwind('text-white')}}>{moment().format('HH:mm')}</Text>
                    </View>
                    <View style={tailwind('flex-2 flex-row')}>
                        <View style={tailwind('mr-2 justify-center')}>
                            <Image source={require('@assets/icons/calendar.png')} width={24}/>
                        </View>
                        <View>
                            <Text style={tailwind('text-xs text-white font-bold')}>{hijri().format('dddd, iDD iMMMM iYYYY')}</Text>
                            <Text style={tailwind('text-xs text-white')}>{moment().format('DD MMMM YYYY')}</Text>
                        </View>
                    </View>

                    <View style={tailwind('flex-2 flex-row justify-end')}>
                        <View style={tailwind('mr-2 justify-center')}>
                            <Image source={require('@assets/icons/location.png')} width={24}/>
                        </View>
                        <View>
                            <Text style={tailwind('text-xs text-white font-bold')}>Lokasi</Text>
                            <Text style={tailwind('text-xs text-white')}>Kota Bandung</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export { PrayingSchedule }

const styles = StyleSheet.create({
    praying_time: tailwind('px-3 py-1 bg-white rounded-full')
})