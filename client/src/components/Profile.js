import React from 'react'
import CurrUserPosts from './CurrUserPosts'

export default function Profile({currentUser}) {

    const mappedProFeed = currentUser.posts.map((post)=> <CurrUserPosts user={currentUser.username} id={post.id} image={post.img} description={post.description} />)
    
    return (
    <div>
        <img style={{width: "150px"}} src={currentUser.profile_img} alt=''/>
        {currentUser.name}
        {currentUser.pronouns}
        {currentUser.username}
        {currentUser.bio}
        {mappedProFeed}
    </div>
  )
}
