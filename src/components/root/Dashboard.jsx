import React from 'react'
import { Col, Row } from 'reactstrap'
import Users from '../Users/Users'
import PostBoard from '../PostBoard/PostBoard'
import PostForm from '../PostForm/PostForm'

function Dashboard () {
        return (
            <div style={{margin: 30}} >
                <Row>
                    <Col xs="3">
                        <Users/>
                        <br />
                        <PostForm />
                    </Col>
                    <Col xs="9">
                        <PostBoard/>
                    </Col>
                </Row>
            </div>
        )
}

export default Dashboard