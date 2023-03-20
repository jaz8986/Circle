import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ( { setCurrentUser, handleLoginSignup }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

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
                res.json().then(errorObj => alert(errorObj.error))
            }
        })
        .catch(error => alert(error))
        setUser({
            username: "",
            password: ""
        })
    }

    return (
        <div style={{ textAlign: "center"}}>
                <div style={{ marginLeft: "200px", marginRight: "200px" }}>
                    <form  style={{textAlign:'center'}} onSubmit={handleSubmit}>

                        <div style={{margin: "20px"}} >
                            <input type="text" onChange={handleChange} value={user.username} name="username" placeholder='Username' />
                        </div>

                        <div style={{margin: "20px"}} >
                            <input type="password" onChange={handleChange} value={user.password} name="password" placeholder='Password'/>
                        </div>

                        <input style={{margin: "20px"}}  type="submit" value="Login" />
                    </form>
                    <button  onClick={handleLoginSignup}>Sign Up</button>
                    </div>
        </div>            
    );
}

export default Login;
