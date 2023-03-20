import { Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'


import Login from './Login'
import Signup from './Signup'
import Feed from './Feed'
import NavBar from './NavBar'
import CreateAPost from './CreateAPost'

function App() {

    const history = useHistory()

    const [currentUser, setCurrentUser] = useState(null);
    const [showLogin, setShowLogin] = useState(true)
    const [posts, setPosts] = useState([])
    const [ formErrors, setFormErrors ] = useState([])


    const handleLoginSignup = () => {
        setShowLogin(currentVal => !currentVal)
      }

    useEffect(() => { // fetch /authorized to see if user is logged in when page refresh/navigate away
        const fetchAuthorizedUser = async () => {
            try {
              const resp = await fetch("/authorized")
              const data = await resp.json()
              if(resp.ok){
              setCurrentUser(data)
              history.push('/feed')
                }else {
                  // setMessage something
              }
            } catch (error) {
              alert(error)
            }
          }
          fetchAuthorizedUser()
        }, [])

    useEffect(()=>{
      fetch('/posts')
        .then((res)=> res.json())
        .then(res => setPosts(res))
    },[])
      


if (!currentUser) { 
    return(
      <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" >
                  <>
                      {showLogin?
                          <Login setCurrentUser={setCurrentUser} handleLoginSignup={handleLoginSignup}/> : 
                          <Signup formErrors={formErrors} setFormErrors={setFormErrors} setCurrentUser={setCurrentUser} handleLoginSignup={handleLoginSignup}/>
                      }
                  </>
              </Route>
            </Switch>
      </div>      
        )}

  return (
    <div>
        <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <Switch>
          <Route exact path= "/feed">
              <Feed currentUser={currentUser} posts={posts}/>
          </Route>

          <Route exact path='/posts/new'>
            <CreateAPost />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
