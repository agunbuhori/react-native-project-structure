import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ContactList from './ContactList';
import AddContact from './AddContact';
import { RootStackParamList } from './navigator';

const Stack = createStackNavigator<RootStackParamList>();

export interface Props {}
const AppNavigator: React.FC<Props> = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="ContactList" component={ContactList}/>
                <Stack.Screen name="AddContact" component={AddContact}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;