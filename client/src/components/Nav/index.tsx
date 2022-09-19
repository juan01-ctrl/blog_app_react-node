import { FC, useContext } from 'react';
import {Link} from "react-router-dom"
import logo from "../../assets/logo-wortise.png"
import { NavContainer,Navbar,NavLinkContainer,NavLink } from "./NavElements";
import { AuthContext } from '../../context/Context';
import LogoutSvg from '../../assets/LogoutSvg';
import { Logout } from '../../context/Actions';




const Nav:FC = () => {
  const {state:{user:isAuth},dispatch} = useContext(AuthContext)

const handleLogout = () =>{
  dispatch(Logout())
}
  return(
    <NavContainer>
        <Navbar>
          <Link to="/">
        <img src={logo} alt="Logo"  style={{cursor:"pointer",width:"10em"}}/>
          </Link>
       {isAuth &&
       <>
        <NavLinkContainer>
          <Link to="/"><NavLink>Blog</NavLink></Link>
          <Link to="/createpost"><NavLink>Create Post</NavLink></Link>
        </NavLinkContainer>
        <LogoutSvg 
        handleClick={handleLogout}
        />
       </>
       
       }

        </Navbar>

  </NavContainer>);
};

export default Nav;
