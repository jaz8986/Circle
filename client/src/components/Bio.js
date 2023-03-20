import React from 'react'

export default function Bio({currentUser}) {
  return (
    <div>
        {currentUser.profile_img}
        {currentUser.name}
        {currentUser.pronouns}
        {currentUser.bio}
    </div>
  )
}
