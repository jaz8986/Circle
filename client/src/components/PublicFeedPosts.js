import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function PublicFeedPosts({user, image, description, id, profile}) {

    const path = `/posts/${id}`
    const userPath = `/users/${user}`

  return (
    <Card>
      <Card.Content>
        <Link to={userPath}>
          <Card.Header>
          <Image src={profile} avatar/>
            {user}
          </Card.Header>
        </Link>
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
