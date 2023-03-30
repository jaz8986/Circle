import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import Bio from './Bio'
import CurrUserPosts from './CurrUserPosts'
import FollowBtn from './FollowBtn'


export default function OtherUserProfiles({ setCurrentUser, currentUser, onFollow, unfollow }) {


    const [userData, setUserData] = useState([])

    let { user } = useParams()

    useEffect(() => {
        fetch(`/users/${user}`)
            .then((res)=> res.json())
            .then((data)=> setUserData(data))
            .catch(error => console.error(error));
    },[user])

    const mappedProFeed = user.posts?.map((post)=> (
      <CurrUserPosts profile={userData.profile_img} user={userData.username} id={post.id} image={post.img} description={post.description} />
    ))


  return (
    <div>
      <Bio currentUser={userData} />
      <FollowBtn setCurrentUser={setCurrentUser} currentUser={currentUser} user={userData} onFollow={onFollow} unfollow={unfollow} />
      <Card.Group>
        {mappedProFeed}
      </Card.Group>
    </div>
  )
}
 
