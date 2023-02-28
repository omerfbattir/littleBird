import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap'
import { listPosts } from '../../redux/actions/PostActions'
import PostCard from '../PostCard/PostCard'


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
              <PostCard
               key={post.id} info={post}>                
               </PostCard>
              
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
