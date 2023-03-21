import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Card, Image, Comment, Header } from 'semantic-ui-react'
import CommentComp from './CommentComp'

export default function SinglePostView() {
  
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])

    let { id } = useParams()

    useEffect(() => {
        fetch(`/posts/${id}`)
            .then((res)=> res.json())
            .then((data)=> setPost(data))
    },[id])

    useEffect(() => {
        fetch(`/comments/${id}`)
            .then((res)=> res.json())
            .then((data)=> setComments(data))
    },[id])

    const commentsMapped = comments.map((comment)=> ( <CommentComp created_at={comment.created_at} description={comment.description} name={comment.user.name} profile={comment.user.profile_img} />))

    if (!post) return <div>loading...</div>


    return (
        <>
        <Card>
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

        <Comment.Group>
            <Header as='h3' dividing>
            Comments
            </Header>
            {commentsMapped}
        </Comment.Group>
        </>
  )
}