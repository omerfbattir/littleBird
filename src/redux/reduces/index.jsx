import {combineReducers} from 'redux';
import listUserReducer from './listUserReducer';
import changeUserReducer from './changeUserReducer';
import listPostReducer from './listPostReducer';

const reducers = combineReducers({
    listUserReducer,
    listPostReducer,
    changeUserReducer
});

export default reducers;