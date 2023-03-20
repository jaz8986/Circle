import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default function Post() {


  return (
    <Card>
    <Card.Content>
    <Card.Header>{'User'}</Card.Header>
    </Card.Content>
    <Image src='image.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Description>
        {'Description'}
      </Card.Description>
    </Card.Content>
  </Card>
  )
}
