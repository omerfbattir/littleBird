import React from 'react'
import './PostCard.css'
import { Button, Card, Input, Modal } from 'reactstrap'
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
          title: postTitle,
          body: postText,
          userId: props.currentUser.id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json())
      .then(() => props.actions.listPosts(props.currentUser.id));
  }


  const [postTitle, setPostTitle] = React.useState('')
  const [postText, setPostText] = React.useState('')
  const [edit, setEdit] = React.useState(false)
  const hendleChange = (e) => {
    e.preventDefault();
    EditPost()
    setEdit(false)
  }
  const hendleChangePage = (e) => {
    e.preventDefault();
    setEdit(true)
  }

  return (
    <div>
      <Card>
        <div style={{ margin: 15 }} >
          <h3>{props.info.title}</h3>
          <p>{props.info.body}</p>
          <Button color="primary" onClick={(e) => hendleChangePage(e)} style={{marginRight: 10}} > Edit </Button>
          <Button color="danger" onClick={(e) => DeletePost(e)} > Delete </Button>
        </div>
      </Card >

      <Modal isOpen={edit} >
        <form onSubmit={(e) => hendleChange(e)} style={{ margin: 25, display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: 10 }} >
          <Input required='required' type="text" placeholder="Title" onChange={e => setPostTitle(e.target.value)} />
          <Input required='required' type="textarea" placeholder="What do you want to say?" onChange={e => setPostText(e.target.value)} />
          <Button block color="primary" type='submit'  > Post </Button>
          <Button block color="danger" onClick={() => setEdit(false)} > Cancel </Button>
        </form>
      </Modal>
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


export default connect(mapStateToProps, mapDispatchToProps)(PostCard)
