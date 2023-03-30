import React from 'react'
import { Segment } from 'semantic-ui-react'

export default function Bio({currentUser}) {
  return (
    <div style={{textAlign: "center"}}>
      <Segment.Group>
        <Segment>
        <img style={{ height: '100px', borderRadius: "50%", border: "5px solid #FD7F32"}} src={currentUser.profile_img}  alt='' />
          <h2>
            {currentUser.name}
              <h5>
                {currentUser.pronouns}
              </h5>
          </h2>
        </Segment>
        <Segment>
          {currentUser.bio}
        </Segment>
      </Segment.Group>
    </div>
  )
}
