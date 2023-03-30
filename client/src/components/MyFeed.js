import React from 'react'
import Post from './Post'
import Bio from './Bio'
import { Grid, Card, Image, Feed } from 'semantic-ui-react'

export default function MyFeed({ currentUser, posts }) {
  
  const followees = currentUser.followees
  const followeePosts = posts.filter((post) => followees.find((followee) => followee.id === post.user.id ))

  const mappedFeed = followeePosts?.map((post) => (
    <Post key={post.id} id={post.id} user={post.user.username} profile={post.user.profile_img} image={post.img} description={post.description} />
  ))

  

  const mappedFollowers = currentUser.followers?.map((follower)=> (
    <Feed.Event>
      <Image key={follower.id}  src={follower.profile_img} alt='' avatar />
      <Feed.Summary>
        {follower.username}
      </Feed.Summary>
    </Feed.Event>    
  ))

  const mappedFollowing = currentUser.followees?.map((followee)=> (
    <Feed.Event>
      <Image key={followee.id} src={followee.profile_img} avatar alt='' />
      <Feed.Summary>
        {followee.username}
      </Feed.Summary>
    </Feed.Event>
  ))


  if (!posts || !currentUser) return <div style={{marginTop: "20px"}} >loading...</div>
  
  return (
    <div>
    <Grid>
      <Grid.Column width={1} ></Grid.Column >
      <Grid.Column width={4}>
        <Bio currentUser={currentUser} />
        <Card>
          <Card.Content>
            <Card.Header>Followers</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
             {mappedFollowers}
             </Feed>
          </Card.Content>
          <Card.Content>
            <Card.Header>Following</Card.Header>
            <Feed>
              {mappedFollowing}
            </Feed>
          </Card.Content>
        </Card>
      </Grid.Column >
      <Grid.Column width={10}>
        <Card.Group itemsPerRow={4} >
          {mappedFeed}
        </Card.Group>
      </Grid.Column>
    </Grid>
    </div>
  )
}
