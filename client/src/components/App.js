import { Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'



import Login from './Login'
import Signup from './Signup'
import Feed from './Feed'
import NavBar from './NavBar'
import CreateAPost from './CreateAPost'
import SinglePostView from './SinglePostView'
import Profile from './Profile'
import LocateMyFriends from './LocateMyFriends'
import OtherUserProfiles from './OtherUserProfiles'
import PublicFeed from './PublicFeed'

function App() {
    const initialData = {
      img: '',
      description: '',
    }

    const history = useHistory()

    const [currentUser, setCurrentUser] = useState(null);
    const [showLogin, setShowLogin] = useState(true)
    const [posts, setPosts] = useState([])
    const [formErrors, setFormErrors] = useState([])
    const [formData, setFormData] = useState(initialData)
    const [newComment, setNewComment] = useState({ description: ''})
    const [errors, setErrors] = useState([])
    
    
  
    const handleLoginSignup = () => {
        setShowLogin(currentVal => !currentVal)
      }

    useEffect(() => { // fetch /authorized to see if user is logged in when page refresh/navigate away
        const fetchAuthorizedUser = async () => {
            try {
              const resp = await fetch("/authorized")
              const data = await resp.json()
              if (resp.ok) {
              setCurrentUser(data)
              history.push('/feed')
                } else {
                  // setMessage something
              }
            } catch (error) {
              alert(error)
            }
          }
          fetchAuthorizedUser()
        }, [])


    useEffect(() => {
      fetch('/posts')
        .then((res)=> {
          if (res.ok) {
            return res.json()
          } else {
            throw new Error("Server Error")
          } 
        } )
        .then(res => setPosts(res))
       // .catch(error => console.error(error));
    },[currentUser])

   

    function handleFormSubmit(e){
      e.preventDefault();
      fetch('/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
              },
        body: JSON.stringify(formData),
            })
        .then((response) => {
          if (response.ok) {
            response.json().then((new_post)=> setPosts([...posts, new_post]));
            history.push('/feed')
          } else {
            response.json().then((errorData) => setErrors(errorData.errors))
          }
        })
        setFormData(initialData)
    } 

    function onFollow(data){
      currentUser.followees.push(data)
      setCurrentUser(currentUser)
    }


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
              <Feed currentUser={currentUser} posts={posts} />
          </Route>

          <Route exact path='/posts/new'>
            <CreateAPost errors={errors} setFormData={setFormData} formData={formData} currentUser={currentUser} handleFormSubmit={handleFormSubmit} />
          </Route>

          <Route path='/posts/:id' >
            <SinglePostView setNewComment={setNewComment} newComment={newComment}  />
          </Route>

          <Route exact path='/currentuser' >
            <Profile currentUser={currentUser}/>
          </Route>

          <Route exact path='/locate-my-friends' >
            <LocateMyFriends setCurrentUser={setCurrentUser} currentUser={currentUser} />
          </Route>

          <Route exact path='/users/:user'>
            <OtherUserProfiles setCurrentUser={setCurrentUser} currentUser={currentUser} onFollow={onFollow} />
          </Route>

          <Route exact path='/posts'>
            <PublicFeed posts={posts} />
          </Route>

        </Switch>
    </div>
  );
}

export default App;
