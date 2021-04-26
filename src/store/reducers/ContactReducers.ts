import { TYPES } from "@store/actions/ContactAction";

export const contactReducer = (state = {}, {type, payload}: any) => {
    switch(type) {
        case TYPES.ADD_CONTACTS:
            return payload;
        case TYPES.ADD_CONTACT:
            return {...state, ...payload};
        default:
            return state;
    }
}