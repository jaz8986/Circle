import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const NavBar = ( { setCurrentUser, currentUser } ) => {

    const history = useHistory()

    const handleLogOut = (e) => { // delete session/logout
        fetch("/logout", {
           method: "DELETE", }
           ).then((r) => {
          if (r.ok) {
            setCurrentUser(null)
            history.push('/');
          } else {
            r.json()
            .then(err => (err.error))
          }
        });
      }



    if (!currentUser) {
        return(
            <div>   

                <Link to="/">
                    <h1 style={{textAlign: "center"}}>Login</h1> 
                </Link>

            </div>
        )
    } else {

    return (
        <nav className='ui menu'>
            <Link to='/feed' >
                <h4>My Feed</h4>
            </Link>

            <Link to='/posts'>
                <h4>Public Feed</h4>
            </Link>

            <Link to='/posts/new'>
                <h4>Create A Post +</h4>
            </Link>

            <Link to={'/locate-my-friends'}>
                <h4>Locate My Friends</h4>
            </Link>

            <div>
                <button onClick={handleLogOut}>Log Out</button>
            </div>            

            <Link to="/currentuser">
                <i className='user icon'>{currentUser.name}</i>
            </Link>
        </nav>
    );
   }
}

export default NavBar;
