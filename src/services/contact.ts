export interface Person {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    photo: string;
}

export interface PostPerson {
    firstName: string;
    lastName: string;
    age: number;
}

export interface Contact {
    message: string;
    data: Person[]
}

export interface SavedContact {
    message: string;
}