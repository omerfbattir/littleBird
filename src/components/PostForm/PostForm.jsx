import React from 'react'
import { Button, Input } from 'reactstrap'
import { listPosts } from '../../redux/actions/PostActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function PostForm(props) {
    function postData() {
    
        console.log(props.currentUser.id)
        fetch('http://localhost:3000/posts',
            {
                method: 'POST',
                body: JSON.stringify({
                    //TODO: get data from input
                    title: postTitle,
                    body: postText,
                    userId: props.currentUser.id
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then((response) => response.json()).
            then(() => props.actions.listPosts(props.currentUser.id));   
    }
    
    const [postTitle, setPostTitle] = React.useState('')
    const [postText, setPostText] = React.useState('')
    const hendleChange = (e) => {
        e.preventDefault();
        postData()
    }

    
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 10 }} >
            <form onSubmit={(e) => hendleChange(e)} >
            <Input required='required' type="text" placeholder="Title" onChange={e => setPostTitle(e.target.value)} />
            <Input required='required' type="textarea" placeholder="What do you want to say?" onChange={e => setPostText(e.target.value)} />
            <Button block color="primary"  type='submit' > Post </Button>
            </form>
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