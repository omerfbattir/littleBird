import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function listUserReducer(state = initialState.userList, action) {
    switch (action.type) {
        case types.LIST_USERS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}