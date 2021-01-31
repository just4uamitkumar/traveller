import { combineReducers } from 'redux';
import {userReducer} from './festive/festiveReducer';


const rootReducer = combineReducers({
    users: userReducer
})

export default rootReducer;