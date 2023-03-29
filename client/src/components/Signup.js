import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Segment, Message } from 'semantic-ui-react'

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
<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign="top" >
  <Grid.Column style={{ maxWidth: 450 }} >
      <form className='ui form'  onSubmit={handleSubmit}>
        <Segment>
          <input style={{marginTop: "20px"}} type="text" name="username" placeholder='Username' onChange={handleChange} value={newUser.username} required />   
          <input  style={{marginTop: "20px"}} type="text" name="profile_img" placeholder='Profile Image' onChange={handleChange} value={newUser.profile_img} required />                 
          <input style={{marginTop: "20px"}} type="password" name="password" placeholder='Password' onChange={handleChange} value={newUser.password} required />
          <input  style={{marginTop: "20px"}} type="text" name="name" placeholder='Name' onChange={handleChange} value={newUser.name} required />
          <input  style={{marginTop: "20px"}} type="text" name="pronouns" placeholder='Pronouns' onChange={handleChange} value={newUser.pronouns} required />
          <input  style={{marginTop: "20px"}} type="text" name="bio" placeholder='Bio' onChange={handleChange} value={newUser.bio} required />
          <input style={{marginTop: "20px"}} className='ui purple button large'  type="submit" value="Create New User" />
          {formErrors.length > 0
            ? formErrors.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
            ))
            : null}
        </Segment>
      </form>     
      <Message onClick={handleLoginSignup} attached='bottom' warning>
        Already signed up? Login here instead.
      </Message>  
  </Grid.Column>
</Grid>
  )
}

export default Signup



