import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default function Post({user, image, description}) {


  return (
    <Card>
    <Card.Content>
    <Card.Header>{user}</Card.Header>
    </Card.Content>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>
  )
}
