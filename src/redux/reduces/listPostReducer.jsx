import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function listPostReducer(state = initialState.posts, action) {
    switch (action.type) {
        case types.LIST_POSTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}