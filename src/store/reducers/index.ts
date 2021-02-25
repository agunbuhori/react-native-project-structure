import { combineReducers } from 'redux';
import errorReducer from './ErrorReducers';
import statusReducer from './StatusReducer';

export default combineReducers({
    error: errorReducer,
    status: statusReducer
});