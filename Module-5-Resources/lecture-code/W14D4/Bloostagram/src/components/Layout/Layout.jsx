import { Outlet, NavLink } from "react-router-dom";

import "./Layout.css";
import Switch from "../Switch";

function Layout() {
  return (
    <div>
      <nav className={`navbar-links-container`}>
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
        <Switch />
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
("https://res.cloudinary.com/ddxcued5s/image/upload/v1709692225/bloostagram-logo-update.png");
