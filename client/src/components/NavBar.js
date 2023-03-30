import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import logo from '../images/logo.png'
import { Container, Image, Menu } from 'semantic-ui-react';

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
            <div style={{textAlign: "center"}}>   

                <Link to="/">
                    <img style={{maxHeight: "150px"}} src={logo} alt='' />
                </Link>

            </div>
        )
    } else {

    return (
        <Menu  >
            <Link to="/currentuser">
                <Menu.Item as='a'><i className='user icon'></i>{currentUser.name}</Menu.Item>
            </Link>

            <Container>
            <Link to='/feed' >
                <Menu.Item as='a'>My Feed</Menu.Item>
            </Link>

            <Link to='/posts'>
                <Menu.Item as='a'>Public Feed</Menu.Item>
            </Link>

            <Link to='/posts/new'>
                <Menu.Item as='a'>Post +</Menu.Item>
            </Link>

            <Link to='/locate-my-friends'>
                <Menu.Item as='a'>Locate My Friends</Menu.Item>
            </Link>

           
            <Menu.Item onClick={handleLogOut} as='a'>Log Out</Menu.Item>        

            <Image className="ui right menu" style={{height: '40px'}} src={logo} />

            </Container>
        </Menu>
    );
   }
}

export default NavBar;
