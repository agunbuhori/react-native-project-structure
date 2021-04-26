import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@screens/navigator';
import { deleteContact, editContact, saveContact } from '@services/contact.service';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Image, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import t from 'tailwind-rn';

export interface Props {
    navigation: StackNavigationProp<RootStackParamList, 'AddContact'>,
    route: RouteProp<RootStackParamList, 'AddContact'>
}

export default function ({navigation, route}: Props) {
    const [progress, setProgress] = useState(false);
    const [firstName, setFirstName] = useState("" as string);
    const [lastName, setLastName] = useState("" as string);
    const [age, setAge] = useState("");
    
    const renderSaveButton = () => (
        <Button onPress={() => {
            setProgress(true);
            if (! route.params) {
                saveContact({firstName, lastName, age: +age}, (response: any) => {
                    navigation.navigate('ContactList');
                    setProgress(false);
                });
            } else {
                editContact(route.params.item.id, {firstName, lastName, age: +age}, (response: any) => {
                    navigation.navigate('ContactList');
                    setProgress(false);
                });
            }
        }} title="Save" />
    ) 

    const remove = () => {
        if (route.params) {
            const { id } = route.params.item;
            Alert.alert("Delete contact", "Are you sure", [
                {text: "Yes, sure", onPress: () => {
                    deleteContact(id, (response: any) => {
                        navigation.navigate('ContactList');
                        setProgress(false)
                    });
                }},
                {
                    text: "Cancel", onPress: () => false
                }
            ]);
            
        }
    }

    useLayoutEffect(() => {
        
        navigation.setOptions({
            headerShown: true,
            headerRight: renderSaveButton,
            title: route.params ? route.params.item.firstName + ' ' + route.params.item.lastName : 'Add New Contact',
            headerBackTitle: "Back"
        });
    }, [navigation, firstName, lastName, age]);

    useEffect(() => {
        if (route.params) {
            setFirstName(route.params.item.firstName);
            setLastName(route.params.item.lastName);
            setAge(route.params.item.age.toString());
        }
    }, [route]);

    return (
        <View style={t('h-full bg-white p-6')}>
            <View style={t("items-center mb-6")}>
                <Image style={t("w-20 h-20 rounded-full")} source={require('@assets/img/morning.png')}/>
            </View>
            <TextInput onChangeText={firstName => setFirstName(firstName)} defaultValue={ firstName} style={t("py-2 px-4 bg-gray-100 rounded border border-gray-200 mb-4")} placeholder="First name"/>
            <TextInput onChangeText={lastName => setLastName(lastName)} defaultValue={ lastName} style={t("py-2 px-4 bg-gray-100 rounded border border-gray-200 mb-4")} placeholder="Last name"/>
            <TextInput onChangeText={age => setAge(age)} defaultValue={ age} keyboardType="number-pad" style={t("py-2 px-4 bg-gray-100 rounded border border-gray-200")} placeholder="Age"/>

            {
                route.params
                ?
                <View style={t("justify-end flex-row")}>
                    <TouchableOpacity style={t("py-2 mt-4")} onPress={() => remove()}>
                        <Text style={t("font-bold text-red-600")}>Delete This Contact</Text>
                    </TouchableOpacity>
                </View>
                :
                <></>
            }
            

            {
                progress
                ?
                <View style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', ...t("absolute top-0 left-0 right-0 bottom-0 items-center justify-center")}}>
                    <ActivityIndicator size="large"/>
                </View>
                : 
                <></>
            }
            
        </View>
    )
}