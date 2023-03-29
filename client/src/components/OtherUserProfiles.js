import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FollowBtn from './FollowBtn'

export default function OtherUserProfiles({ setCurrentUser, currentUser, onFollow }) {

    const [userData, setUserData] = useState([])

    let { user } = useParams()

    useEffect(() => {
        fetch(`/users/${user}`)
            .then((res)=> res.json())
            .then((data)=> setUserData(data))
            .catch(error => console.error(error));
    },[user])


  return (
    <div>
    <img style={{width: "150px"}} src={userData.profile_img} alt='' />
    <FollowBtn setCurrentUser={setCurrentUser} currentUser={currentUser} user={userData} onFollow={onFollow}/>
    {userData.name}
    {userData.pronouns}
    {userData.username}
    {userData.bio}
    {/* {mappedProFeed} */}
    </div>
  )
}
 
