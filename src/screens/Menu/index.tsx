
import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Home from './Home';
import Profile from './Profile';
const Tab = createBottomTabNavigator();


export interface Props {}

function getIcon(name: string): string {
    switch (name) {
        case 'Home':
            return 'ios-home';
            break;
        case 'Profile':
            return 'user';
            break;
        default:
            return 'ios-home';
    }
}

const Menu: React.FC<Props> = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{
                tabBarIcon: ({size, color}) => <Icon name="home" size={24} color={color}/>
            }} name="Home" component={Home}/>

            <Tab.Screen options={{
                tabBarIcon: ({size, color}) => <Icon name="bell" size={24} color={color}/>
            }} name="Notification" component={Profile}/>
            
            <Tab.Screen options={{
                tabBarIcon: ({size, color}) => <Icon name="user" size={24} color={color}/>
            }} name="Profile" component={Profile}/>
            

        </Tab.Navigator>
    )
}

export default Menu;