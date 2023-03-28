import React from 'react'

export default function Bio({currentUser}) {
  return (
    <div>
       <img style={{width: "150px"}} src={currentUser.profile_img} alt='' />
        {currentUser.name}
        {currentUser.pronouns}
        {currentUser.bio}
    </div>
  )
}
