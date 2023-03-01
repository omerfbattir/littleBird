import * as types from './actionTypes';

export function changeCurrentUser(user) {
    return {
        type: types.CHANGE_CURRENT_USER,
        payload: user
    }
}

export function listUsers() {
    return function (dispatch) {
        let url = ' https://jsonplaceholder.typicode.com/users';
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(listUsersSuccess(result)));
    }
}

export function listUsersSuccess(users) {
    return {
        type: types.LIST_USERS_SUCCESS,
        payload: users
    }
}
