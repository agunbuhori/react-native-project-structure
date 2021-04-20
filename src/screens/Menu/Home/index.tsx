import React from 'react';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { HomeMenu, PrayingSchedule } from './Home.widgets';


export interface Props {}
const Home: React.FC<Props> = (props) => {
    return (
        <View style={tailwind('bg-white flex-1')}>
            <PrayingSchedule/>
            <HomeMenu/>
        </View>
    )
}

export default Home;