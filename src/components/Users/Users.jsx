import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { listUsers, changeCurrentUser } from '../../redux/actions/UserAction'
import { listPosts } from '../../redux/actions/PostActions'
import { Card, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';


function Users(props) {

    props.actions.listUser();
    function selectUser(user) {
        props.actions.changeCurrentUser(user);
        props.actions.listPosts(user.id);
    }

    return (
        <div>
            <Card>
                <CardHeader>
                    <h1>Users: {props.users.length}</h1>
                </CardHeader>
                <ListGroup>
                    {props.users.map(user => (
                        <ListGroupItem
                            active={user.id === props.currentUser.id}
                            onClick={() => selectUser(user)}
                            key={user.id}> {user.username} </ListGroupItem>
                    ))}
                </ListGroup>
            </Card>
        </div>
    )
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
