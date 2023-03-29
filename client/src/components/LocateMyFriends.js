import React, {useState} from 'react'
import { MapProvider, Marker, Map } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css';


export default function LocateMyFriends({ setCurrentUser, currentUser }) {

    const [location, setLocation] = useState({})
    const [viewState, setViewState] = useState({
      longitude: -122.4,
      latitude: 37.8,
      zoom: 14
      });

    const followees = currentUser.followees
    const followers = currentUser.followers
    const friends = followees.filter((followee) => followers.find((follower) => follower.id === followee.id) )


    const MAPBOX_TOKEN = 'pk.eyJ1IjoianNpbmdoODk4NiIsImEiOiJjbGZrMmw2bmgwMWJ4M3FtZ2E0bzV4ZzgwIn0.EH_IEZhNnrzSntqm4nJj1A'
    
    function shareLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
      setLocation({longitude: position.coords.longitude, latitude: position.coords.latitude});
// does navigator return a promise, i can make my own promise
      fetch('/location', {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(location),
      })
        .then((res) => res.json())
        .then(res => setCurrentUser(res))
      });
    }

    function changeViewState(id) {
      if ( currentUser.id === id ) {
          setViewState({
            longitude: currentUser.longitude,
            latitude: currentUser.latitude,
            zoom: 15
          })
      } else {
          const friend = friends.find((friend) => friend.id === id)
          setViewState({
            longitude: friend.longitude,
            latitude: friend.latitude,
            zoom: 15
          })
      }
    }
    
    const markers = friends?.map((f) => <Marker longitude={parseInt(f.longitude)} latitude={parseInt(f.latitude)}><img style={{width: "150px"}} src={f.profile_img} alt='' /></Marker> )
   
    const menuItems = friends.map((f) => (<div onClick={() => changeViewState(f.id)} className='item'>@{f.username}</div>))

  return (
    <div>
      <div className='ui vertical menu'>
        <div onClick={() => changeViewState(currentUser.id)} className='item'>@Me</div>
        {friends ? menuItems : null}
      </div>
      <MapProvider>
        <Map
          {...viewState}
          onMove={evt => setViewState(evt.viewState)}
          style={{width: 550, height: 450}}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={MAPBOX_TOKEN} >
          {markers}
          <Marker latitude={currentUser.latitude} longitude={currentUser.longitude}><img alt='' src='https://i.fbcd.co/products/original/9847a67d09a39d0ef02f4cacc70490cdbe8cae2a1f7c9a2e5bf23e9a126137ec.jpg' style={{width: "100px"}} /></Marker>
        </Map>
        <button onClick={shareLocation}>Share Your Location With Your Friends?</button>
      </MapProvider>
    </div>
  )
}
