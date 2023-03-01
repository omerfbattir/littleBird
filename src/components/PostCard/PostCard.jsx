import React from 'react'
import './PostCard.css'
import { Button, Card } from 'reactstrap'
import { connect } from 'react-redux';
import { listPosts } from '../../redux/actions/PostActions'
import { bindActionCreators } from 'redux'

function PostCard(props) {

function DeletePost() {
  console.log('deleted Data')
  fetch('http://localhost:3000/posts/' + props.info.id,
    {
      method: 'DELETE'
    }).then((response) => response.json())
    .then(() => props.actions.listPosts(props.currentUser.id));
}

function EditPost() {
  console.log('edited Data')
  fetch('http://localhost:3000/posts/' + props.info.id,
    {
      method: 'PUT',
      body: JSON.stringify({
        id: props.info.id,
        //TODO: popup for edit
        //TODO: get data from input
        title: 'foo',
        body: 'bar',
        userId: props.currentUser.id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    .then(() => props.actions.listPosts(props.currentUser.id));
}

  return (
    <Card>
      <div style={{ margin: 15 }} >
        <h3>{props.info.title}</h3>
        <p>{props.info.body}</p>
        <Button size='sm' style={{ marginRight: 10 }}
          color='primary' onClick={() => EditPost(props)}
          >Düzenle</Button>
        <Button size='sm' color='danger'
          onClick={() => DeletePost(props)}
        >Sil</Button>
      </div>
    </Card >
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


export default connect (mapStateToProps, mapDispatchToProps) (PostCard)
