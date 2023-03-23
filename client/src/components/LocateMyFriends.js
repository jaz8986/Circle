import React, {useState, useEffect} from 'react'
import { Map } from 'react-map-gl'

export default function LocateMyFriends({ currentUser }) {

//     const [users, setUsers] = useState([])
//     // const [location, setLocation] = useState({})
//     const [viewState, setViewState] = useState({
//         longitude: -100,
//         latitude: 40,
//         zoom: 3.5
//       });

//     // useEffect(()=> {
//     //     fetch('/users')
//     //       .then((res)=> res.json())
//     //       .then ((res)=> setUsers(res))
//     //   },[])

//   //  const publicUsers = users.filter((user) => user.private_location === false)

//     if (currentUser.private_location === false) {
//         navigator.geolocation.getCurrentPosition((position) => {
//             setViewState({latitude: position.coords.latitude, longitude: position.coords.longitude});
//           });
//     }

  return (
    <div>
        {/* <Map 
        {...viewState}
        onMove={evt}
        /> */}

    </div>
  )
}
