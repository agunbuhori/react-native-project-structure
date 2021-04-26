import { Person } from "@services/contact";

export const TYPES = {
    ADD_CONTACTS: 'ADD_CONTACTS',
    ADD_CONTACT: 'ADD_CONTACT',
}

export const addContacts = (data: Person[]) => ({
    type: TYPES.ADD_CONTACTS,
    payload: data
});