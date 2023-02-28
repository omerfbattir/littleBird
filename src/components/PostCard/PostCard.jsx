import React from 'react'
import './PostCard.css'
import { Card } from 'reactstrap'

function PostCard(props) {
  return (
    <Card>
      <div style={{ margin: 15 }} >
        <h3>{props.info.title}</h3>
        <p>{props.info.body}</p>
      </div>
    </Card >
  )
}

export default PostCard
