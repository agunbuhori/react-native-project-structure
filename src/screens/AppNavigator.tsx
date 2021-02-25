import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Menu/Home';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './Menu';

const Stack = createStackNavigator();

export interface Props {}
const AppNavigator: React.FC<Props> = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Menu" component={Menu}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;