import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
                        {errors.length > 0 && (
                            <div style={{ color: "red" }}>
                            {errors.map((error) => (
                                <div key={error}>{error}</div>
                            ))}
                            </div>
                        )}
                    </form>
                    <button  onClick={handleLoginSignup}>Sign Up</button>
                    </div>
        </div>            
    );
}

export default Login;
