import { Outlet, NavLink, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import "./Layout.css";
import Switch from "../Switch";
import { useThemeContext } from "../../context/ThemeContext";
import { logoutUser } from "../../../store/usersReducer";

function Layout() {
  const { theme } = useThemeContext();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.usersState.sessionUser);
  return (
    <div>
      <nav className={`navbar-links-container ${theme}`}>
        <div className="navbar-subcontainer">
          <img
            className="navbar-logo"
            src="https://res.cloudinary.com/app-academy4/image/upload/v1647291502/Patchstagram/patch_hd_riobbp.png"
            alt="cute-kitty-image"
          />
          <h2 className="navbar-title">Patchstagram</h2>
        </div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Feed</NavLink>
        <NavLink to="/new">New Post</NavLink>
        <div>
          <span>CurrentUser: </span>
          { sessionUser
            ? <span>{ sessionUser.username }</span>
            :  <Navigate to="/" /> 
          }
        </div>
        <button onClick={() =>  dispatch(logoutUser())}>Logout</button>
        <Switch />
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
("https://res.cloudinary.com/ddxcued5s/image/upload/v1709692225/bloostagram-logo-update.png");
