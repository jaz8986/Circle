import React from 'react'
import PublicFeedPosts from './PublicFeedPosts'

export default function PublicFeed({ posts }) {

    const publicFeed = posts.map((post) => (
        <PublicFeedPosts key={post.id} id={post.id} user={post.user.username} image={post.img} description={post.description} />
    ))

  return (
    <>
        {publicFeed}
    </>
  )
}
