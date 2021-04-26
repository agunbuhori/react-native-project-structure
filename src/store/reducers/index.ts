import { combineReducers } from 'redux';
import { contactReducer } from './ContactReducers';
import errorReducer from './ErrorReducers';
import statusReducer from './StatusReducer';

export default combineReducers({
    error: errorReducer,
    status: statusReducer,
    contact: contactReducer
});