import React from 'react'
import { Comment } from 'semantic-ui-react'

export default function CommentComp({profile, name, description, created_at}) {
  return (
    <Comment>
      <Comment.Avatar src={profile} />
      <Comment.Content>
        <Comment.Author as='a'>{name}</Comment.Author>
        <Comment.Metadata>
          {/* <div>{created_at}</div> */}
        </Comment.Metadata>
        <Comment.Text>{description}</Comment.Text>
      </Comment.Content>
    </Comment>
  )
}
