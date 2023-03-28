import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FollowBtn from './FollowBtn'

export default function OtherUserProfiles({ currentUser }) {

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
    <FollowBtn currentUser={currentUser} user={userData} />
    {userData.name}
    {userData.pronouns}
    {userData.username}
    {userData.bio}
    {/* {mappedProFeed} */}
    </div>
  )
}
 
