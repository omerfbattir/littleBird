import React from 'react'
import { Button, Input } from 'reactstrap'
import { listPosts } from '../../redux/actions/PostActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function postData(props) {
    console.log(props.currentUser.id)
    fetch('http://localhost:3000/posts',
        {
            method: 'POST',
            body: JSON.stringify({
                //TODO: get data from input
                title: 'updateMassageTitle',
                body: 'updateMassageBody',
                userId: props.currentUser.id
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json()).
        then(() => props.actions.listPosts(props.currentUser.id));   
}



function PostForm(props) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 10 }} >
            <Input type="text" placeholder="Title" name='postTitle' />
            <Input type="textarea" placeholder="What do you want to say?" name='postText' />
            <Button block color="primary" onClick={() => postData(props)} >Post</Button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.changeUserReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            listPosts: bindActionCreators(listPosts, dispatch)
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(PostForm)