import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Card, Image, Comment, Header, Segment, Grid } from 'semantic-ui-react'
import CommentComp from './CommentComp'

export default function SinglePostView({setNewComment, newComment}) {
  
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const { description } = newComment

    let { id } = useParams()

    useEffect(() => {
        fetch(`/posts/${id}`)
            .then((res)=> res.json())
            .then((data)=> setPost(data))
            .catch(error => console.error(error));
    },[id])

    useEffect(() => {
        fetch(`/comments/${id}`)
            .then((res)=> res.json())
            .then((data)=> setComments(data))
            .catch(error => console.error(error));
    },[id])

    function handleFormChange (e) {
        setNewComment({ description: e.target.value, post_id: id})
    }

    function handleCommentSubmit (e) {
        e.preventDefault();
        fetch('/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
                },
          body: JSON.stringify(newComment),
              })
          .then((response) => response.json())
          .then((new_comment)=> setComments([...comments, new_comment]));
          setNewComment({ description: ''})

      }

      function deleteComment(id) {
        fetch(`/comments/${id}`, { method: 'DELETE' })
        .then(() => handleDeleteComment(id))
      }

      function handleDeleteComment (cId) {
        const updated = comments.filter((c) => c.id !== cId);
        setComments(updated)
      }


    const commentsMapped = comments.map((comment)=> ( <CommentComp deleteComment={deleteComment} id={comment.id} created_at={comment.created_at} description={comment.description} name={comment.user.name} profile={comment.user.profile_img} />))

    if (!post) return <div>loading...</div>


    return (
        <Segment>
            <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <Card centered>
                        <Card.Content>
                            <Card.Header>@{post.user.username}</Card.Header>
                        </Card.Content>
                                <Image src={post.img} wrapped ui={true} />
                        <Card.Content> 
                            <Card.Description>
                            {post.description}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Comment.Group>
                        <Header as='h3' dividing>
                            Comments
                        </Header>
                        {commentsMapped}
                        <form class='ui form' onSubmit={handleCommentSubmit}>
                            <div class="ui input" >
                                <input type='text' placeholder='Comment' name="description" value={description} onChange={handleFormChange} />
                            </div>
                            <button type='submit' class="ui button" >Reply To Post</button>
                        </form>
                    </Comment.Group>
                </Grid.Column>  
        </Grid>
        </Segment>
  )
}