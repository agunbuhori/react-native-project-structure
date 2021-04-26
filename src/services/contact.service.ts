import { Alert } from "react-native";
import { BASE_URL } from '@env';
import axios from "@utils/Http";
import { AxiosError, AxiosResponse } from "axios";
import { Contact, Person, PostPerson, SavedContact } from "./contact";

const errorHandle = (error: AxiosError) => {
    console.log(error);
}

export async function getContacts(callback: Function) {
    await axios.get('contact')
    .then((response: AxiosResponse<Contact>) => {
        callback(response.data);
    })
    .catch(errorHandle)
}

export async function saveContact(data: PostPerson, callback: Function) {
    await axios.post('contact', data)
    .then((response: AxiosResponse<SavedContact>) => {
        callback(response);
    })
    .catch(errorHandle);
}

export async function editContact(id: string, data: PostPerson, callback: Function) {
    await axios.put('contact/'+id, data)
    .then((response: AxiosResponse<SavedContact>) => {
        callback(response);
    })
    .catch(errorHandle);
}

export async function deleteContact(id: string, callback: Function) {
    await axios.delete('contact/'+id)
    .then((response: AxiosResponse<any>) => {
        callback(response);
    })
    .catch(errorHandle);
}