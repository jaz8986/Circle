import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Segment, Grid, Message } from 'semantic-ui-react'

const Login = ( { setCurrentUser, handleLoginSignup }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState([])

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.status === 200){
                res.json().then(userObj => {
                    setCurrentUser(userObj)
                    history.push('/feed')
                })
            } else {
                res.json().then(errorObj => setErrors([errorObj.error]))
            }
        })
        setUser({
            username: "",
            password: ""
        })
    }

    return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 350 }}>
                    <div style={{ textAlign: "center"}}>
                        <div style={{ textAlign: "center"}}>
                            <form className='ui form'  style={{textAlign:'center'}} onSubmit={handleSubmit}>
                                <Segment>
                                    <div style={{margin: "20px"}} >
                                        <input type="text" onChange={handleChange} value={user.username} name="username" placeholder='Username' />
                                    </div>

                                    <div style={{margin: "20px"}} >
                                        <input type="password" onChange={handleChange} value={user.password} name="password" placeholder='Password'/>
                                    </div>

                                    <input className='ui green button large' style={{margin: "20px"}}  type="submit" value="Login" />
                                    {errors.length > 0 && (
                                        <div style={{ color: "red" }}>
                                        {errors.map((error) => (
                                            <div key={error}>{error}</div>
                                        ))}
                                        </div>
                                    )}
                                </Segment>
                            </form>
                    <Message onClick={handleLoginSignup} attached='bottom' warning>
                        Don't have an account? Sign Up here instead.
                    </Message> 
                </div>
            </div>
        </Grid.Column>
    </Grid>            
    );
}

export default Login;
