import { Person } from "@services/contact";

export type RootStackParamList = {
    ContactList: undefined;
    AddContact: {item: Person} | undefined; 
}
