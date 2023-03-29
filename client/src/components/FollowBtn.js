import React, {useEffect, useState} from 'react'

export default function FollowBtn({ currentUser, user, onFollow }) {

    const foundFollow = currentUser && user.followers ? user.followers.find((follow) => follow.id === currentUser.id) : null

    const [followed, setFollowed] = useState(false)

    useEffect(() => {
        setFollowed(foundFollow ? true : false)
      }, [foundFollow])

    function handleFollow(e) {
        const following = currentUser ? {followee_id: user.id, follower_id: currentUser.id} : null

        followed ? (
            fetch(`/${user.id}/unfollow`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then((r) => {
                    setFollowed(false)
                })
        ) : (
            fetch("/followers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(following)
            })
                .then((r) => {
                    if (r.ok) {
                        r.json().then((data) => {
                            setFollowed(true)
                            onFollow(data)
                        })
                    } else {
                      //  r.json().then((err) => onerror(err.errors))
                    }
                })
        )
    }
  return (
    <button className='ui button' onClick={handleFollow}>{followed ? "Unfollow" : "Follow"}</button>
  )
}
