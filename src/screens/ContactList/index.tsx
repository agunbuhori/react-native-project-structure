import { StackNavigationProp } from '@react-navigation/stack';
import { Contact, Person } from '@services/contact';
import { getContacts } from '@services/contact.service';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '@screens/navigator';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import t from 'tailwind-rn';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '@store/actions/ContactAction';

export interface Props {
    navigation: StackNavigationProp<RootStackParamList, 'ContactList'>
}

export default function ({navigation}: Props) {
    const [proggress, setProgress] = useState(true);
    const [contacts, setContacts] = useState([] as Person[]);
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    
    useEffect(() => {
        getContacts((data: Contact) => {
            data.data.push({firstName: '', lastName: '', age: 0, id: '', photo: ''});
            let sortedData = sortArray(data.data);
            dispatch(addContacts(sortedData));
            setContacts(sortedData);
            setProgress(false)
            let contactse = useSelector(state => state.contact);
            console.log(contactse)
        });
    }, [contacts]);
    
    const getInitial = (initial: string) => {
        return initial.toUpperCase();
    }

    const searchFilter = () => {
        if (query) {
            return contacts.filter((item: Person) => {
              return item.firstName === '' || query.toLowerCase().split(' ').every(v => item.firstName.toLowerCase().includes(v) || item.lastName.toLowerCase().includes(v))
            })
        } else {
            return contacts;
        }
    }

    const sortArray = (arr: Person[]) : Person[] => {
        let result = arr.sort((a, b) => {
            if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) { return -1; }
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) { return 1; }
            return 0;
        })

        return result;
    }

    const Item = ({item, index} : {item: Person, index: number}) => {
        return index === 0
        ?
        <View style={t("pb-3 pt-2 px-6 bg-white")}>
            <TextInput style={t("py-2 px-4 rounded-full bg-gray-200 mt-2")} placeholder="Search" value={query} onChangeText={text => setQuery(text)}/>
        </View>
        :
        <TouchableOpacity style={t("p-6 border-b border-gray-200 flex-row")} onPress={() => navigation.navigate('AddContact', {item})}>
            <View style={t("mr-4 justify-center")}>
                <Text style={t("text-2xl text-gray-400")}>{getInitial(item.firstName[0])}</Text>
            </View>
            <View style={t("w-12 h-12 mr-4 overflow-hidden rounded-full justify-center")}>
                {
                    item.photo.match(/(\.jp[e]*g|\.png)/)
                    ? <Image style={t("w-12 h-12")} source={{uri: item.photo}}/>
                    : <Image style={t("w-12 h-12")} source={require('@assets/img/morning.png')}/>
                }
            </View>
            <View style={t("justify-center")}>
                <Text style={t("text-lg font-bold")}>{item.firstName + " " + item.lastName}</Text>
                <Text style={t("text-sm text-gray-400 font-semibold")}>{item.age} years old</Text>
            </View>
        </TouchableOpacity>
    }
    
    const Header = () => {
        return (
            <View style={t("px-6 pt-6 bg-white")}>
                <Text style={t("text-3xl font-bold")}>Contact</Text>
            </View>
        )    
    }
    
    return (
        <View style={t('h-full bg-white')}>
            {
                ! proggress 
                ?
                <FlatList
                    data={searchFilter()}
                    renderItem={Item}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={Header}
                    stickyHeaderIndices={[1]}
                />
                :
                <></>
            }

            <TouchableOpacity onPress={() => navigation.navigate('AddContact')} style={t("absolute right-5 bottom-5 w-14 h-14 rounded-full bg-blue-400 items-center justify-center")}>
                <Icon style={{fontSize: 24}}  color="white" name="plus"/>
            </TouchableOpacity>
        </View>
    )
}