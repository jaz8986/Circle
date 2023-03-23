import React from 'react'
import Post from './Post'
import Bio from './Bio'

export default function Feed({ currentUser, posts }) {

  const mappedFeed = posts.map((post) => (
    <Post id={post.id} user={post.user.username} image={post.img} description={post.description} />
  ))

  const mappedFollowers = currentUser.followers.map((follower)=> (
    <div>
      {follower.profile_img}
      {follower.username}
    </div>
  ))

  // if (!posts) return <div>loading...</div>
  return (
    <div>
      <Bio currentUser={currentUser} />
      <h2>Followers</h2>
      {mappedFollowers}
      {mappedFeed}
    </div>
  )
}
