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
            .then(err => alert(err))
          }
        });
      }

    if(!currentUser) {
        return(
            <div>   

                {/* <Link to="/login">
                    <h1>Login</h1> 
                </Link> */}

            </div>
        )
    }


    return (
        <nav class='ui menu'>
            <Link to='/feed' >
                <h4>Feed</h4>
            </Link>

            <Link to='/posts/new'>
                <h4>Create A Post +</h4>
            </Link>

            <Link>
                <h4>Locate My Friends</h4>
            </Link>
            
            <button  onClick={handleLogOut}>Log Out</button>

        </nav>
    );
}

export default NavBar;
