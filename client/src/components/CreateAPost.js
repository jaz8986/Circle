import React, {useState} from 'react'
import { Card, Image } from 'semantic-ui-react'

export default function CreateAPost() {

    

  return (
    <div>
        <Card>
            <Card.Content>
                <Card.Header>{'user'}</Card.Header>
            </Card.Content>
                <Image src={'image.jpg'} wrapped ui={false} />
            <Card.Content>
                <Card.Description>
                    {'description'}
                </Card.Description>
            </Card.Content>
        </Card>

        <label>Image Url</label>
        <input type="text" value='' name='' placeholder=''/>

        <label>Description</label>
        <input type="text" value='' name='' placeholder=''/>

    </div>
  )
}
