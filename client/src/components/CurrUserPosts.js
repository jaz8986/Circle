import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function CurrUserPosts({ id, image, description, user }) {

    const path = `/posts/${id}`

  return (
    <Card>
    <Card.Content>
        <Card.Header>@{user}</Card.Header>
    </Card.Content>
        <Link to={path} >
          <Image src={image} wrapped ui={true} />
        </Link>
    <Card.Content> 
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>
  )
}
