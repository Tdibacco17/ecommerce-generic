import { createStore } from 'redux';
import { combineReducers } from 'redux'

//importacion de reducers
import rootReducer from '../reducer/index'; 
import userReducer from "../reducer/userReducer"
import adminReducer from "../reducer/userReducer"

const allReducers = combineReducers({
    rootReducer: rootReducer,
    userReducer: userReducer,
    adminReducer: adminReducer
})

export const store = createStore(allReducers);