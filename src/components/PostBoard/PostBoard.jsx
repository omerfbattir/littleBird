import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'
import { listPosts } from '../../redux/actions/PostActions'


class PostBoard extends Component {
  componentDidMount() {
    this.props.actions.listPosts();
}

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <h1>Posts: {this.props.posts.length} </h1>
          </CardHeader>
          <ListGroup>
            {this.props.posts.map(post => (
              <ListGroupItem key={post.id}> 
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              
               </ListGroupItem>
            ))}
          </ListGroup>
        </Card>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    posts: state.listPostReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      listPosts: bindActionCreators(listPosts, dispatch)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostBoard)
