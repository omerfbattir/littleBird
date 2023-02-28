import React from 'react'
import { Button, Input } from 'reactstrap'

function postData() {
    alert('Post data')
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        }).then((response) => response.json())
        .then((json) => console.log(json));
}

function PostForm() {
    return (
        <div>
            <Input type="textarea" placeholder="What do you want to say?" name='postText' />
            <Button block color="primary" onClick={() => postData()} >Post</Button>
        </div>
    )
}

export default PostForm
