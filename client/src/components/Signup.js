import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Signup = ({ handleLoginSignup, setCurrentUser, formErrors, setFormErrors }) => {

    const [newUser, setNewUser] = useState({
        profile_img: "",
        username: "",
        password: "",
        name: "",
        pronouns: "",
        bio: "",
    })

    const history = useHistory()
    
    const handleChange = (e) => {
      setNewUser({...newUser, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/signup', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => {
            if (response.status === 201) {
                response.json().then(userObj => {
                setCurrentUser(userObj)
                history.push('/feed')
            })      } else {
                // response.json().then((error) => {
                // alert(error)
                // })
                response.json().then((err) => setFormErrors(err.errors))
                console.log(formErrors)
                // console.log("inside else statement")
            }
            })
            .catch((error) => alert(error));
        };

  return (

    <div>
          <div style={{ textAlign: "center" }} >
          <form  onSubmit={handleSubmit}>

              <div>
              <input type="text" name="username" placeholder='Username' onChange={handleChange} value={newUser.username} required />
              </div>

              <div>
              <input type="text" name="profile_img" placeholder='Profile Image' onChange={handleChange} value={newUser.profile_img} required />
              </div>
              
              <div>
              <input type="password" name="password" placeholder='Password' onChange={handleChange} value={newUser.password} required />
              </div>

              <div>
              <input type="text" name="name" placeholder='Name' onChange={handleChange} value={newUser.name} required />
              </div>

              <div>
              <input type="text" name="pronouns" placeholder='Pronouns' onChange={handleChange} value={newUser.pronouns} required />
              </div>

              <div>
              <input type="text" name="bio" placeholder='Bio' onChange={handleChange} value={newUser.bio} required />
              </div>

            <input style={{marginTop: "20px"}}  type="submit" value="Create New User" />

            {formErrors.length > 0
              ? formErrors.map((err) => (
              <p key={err} style={{ color: "red" }}>
                {err}
              </p>
              ))
              : null}
          </form>
          <button  style={{marginTop: "20px"}} onClick={handleLoginSignup}>Log In?</button>
    </div>         
    </div>
  )
}

export default Signup



