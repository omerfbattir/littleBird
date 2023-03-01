import * as types from './actionTypes';

export function listPosts(userID) {
    
    return function(dispatch) {
        let url = 'http://localhost:3000/posts';
        if(userID)
            {
                url = url + '?userId=' + userID;
            
        return fetch(url)
            .then(response => response.json()).
            then(result => dispatch(listPostSuccess(result)))
        }
    }
}

export function listPostSuccess(posts) {
    return {
        type: types.LIST_POSTS_SUCCESS,
        payload: posts
    }
}
