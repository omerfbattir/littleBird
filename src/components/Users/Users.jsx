import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { listUsers, changeCurrentUser } from '../../redux/actions/UserAction'
import { listPosts } from '../../redux/actions/PostActions'
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';


class Users extends Component {
    componentDidMount() {
        this.props.actions.listUser();
    }

    selectUser = user => {
        this.props.actions.changeCurrentUser(user);
        this.props.actions.listPosts(user.id);
        console.log(user);
    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader>
                        <h1>Users: {this.props.users.length}</h1>
                    </CardHeader>
                    <ListGroup>
                        {this.props.users.map(user => (
                            <ListGroupItem
                                active={user.id === this.props.currentUser.id}
                                onClick={() => this.selectUser(user) }
                                key={user.id}> {user.username} </ListGroupItem>
                        ))}
                    </ListGroup>
                </Card>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        users: state.listUserReducer,
        currentUser: state.changeUserReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            listUser: bindActionCreators(listUsers, dispatch),
            changeCurrentUser: bindActionCreators(changeCurrentUser, dispatch),
            listPosts: bindActionCreators(listPosts, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)
