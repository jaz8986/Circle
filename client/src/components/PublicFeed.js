import React from 'react'
import PublicFeedPosts from './PublicFeedPosts'
import { Grid, Card } from 'semantic-ui-react'

export default function PublicFeed({ posts }) {

    const publicFeed = posts.map((post) => (
        <PublicFeedPosts key={post.id} id={post.id} user={post.user.username} profile={post.user.profile_img} image={post.img} description={post.description} />
    ))

  return (
    <div style={{margin: "10px"}}>
        <Card.Group itemsPerRow={6} >
            {publicFeed}
        </Card.Group>
    </div>
  )
}
