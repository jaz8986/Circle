import React from 'react'
import Post from './Post'
import Bio from './Bio'

export default function Feed({ currentUser, posts }) {
  
  const followees = currentUser.followees
  const followeePosts = posts.filter((post) => followees.find((followee) => followee.id === post.user.id ))

  const mappedFeed = followeePosts?.map((post) => (
    <Post key={post.id} id={post.id} user={post.user.username} image={post.img} description={post.description} />
  ))

  const mappedFollowers = currentUser.followers?.map((follower)=> (
    <div key={follower.id} >
      <img style={{width: "150px"}} src={follower.profile_img} />
      {follower.username}
    </div>
  ))

  const mappedFollowing = currentUser.followees?.map((followee)=> (
    <div>
      <img key={followee.id} style={{width: "150px"}} src={followee.profile_img} alt=''/>
      {followee.username}
    </div>
  ))


  if (!posts || !currentUser) return <div>loading...</div>
  
  return (
    <div>
      <Bio currentUser={currentUser} />
      <h2>Followers</h2>
      {mappedFollowers}
      <h2>Following</h2>
      {mappedFollowing}
      {mappedFeed}
    </div>
  )
}
