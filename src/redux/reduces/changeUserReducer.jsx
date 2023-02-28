import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function changeUserReducer(state = initialState.currentUser, action) {
    switch(action.type) {
        case types.CHANGE_CURRENT_USER:
            return action.payload;
        default:
            return state;
    }
}