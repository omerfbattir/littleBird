import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import Users from '../Users/Users'
import PostBoard from '../PostBoard/PostBoard'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="3">
                        <Users/>
                    </Col>
                    <Col xs="9">
                        <PostBoard/>
                    </Col>
                </Row>
            </div>
        )
    }
}
