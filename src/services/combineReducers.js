import { combineReducers } from 'redux';
import authReducer from '../modules/auth/Reducer';



// import {actions as authActions} from "../modules/auth/Reducer";

const appReducer = combineReducers({
    auth: authReducer,

});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
