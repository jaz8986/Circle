import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function OtherUserProfiles() {

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
    <img src={userData.profile_img} alt='' />
    {userData.name}
    {userData.pronouns}
    {userData.username}
    {userData.bio}
    {/* {mappedProFeed} */}
</div>
  )
}
