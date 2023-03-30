import React from 'react'
import CurrUserPosts from './CurrUserPosts'
import Bio from './Bio'
import { Card, Grid, GridColumn } from 'semantic-ui-react'

export default function Profile({currentUser}) {

    const mappedProFeed = currentUser.posts.map((post)=> <CurrUserPosts profile={currentUser.profile_img} user={currentUser.username} id={post.id} image={post.img} description={post.description} />)
    
    return (
    <Grid columns={3}>
      <GridColumn width={1}></GridColumn>
      <Grid.Column width={4}>
        <Bio currentUser={currentUser} />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card.Group itemsPerRow={4} >
          {mappedProFeed}
        </Card.Group>
      </Grid.Column>
    </Grid>
  )
}
