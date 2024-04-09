import { Outlet, NavLink } from "react-router-dom";

import "./Layout.css";

function Layout() {
  return (
    <div>
      <nav className="navbar-links-container">
        <div className="navbar">
          <img
            src="https://res.cloudinary.com/ddxcued5s/image/upload/v1709692225/bloostagram-logo-update.png"
            alt="cool-dog-pic"
            className="navbar-logo"
          />
          <h2 className="navbar-title">Bloostagram</h2>
        </div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Feed</NavLink>
        <NavLink to="/posts/new">New Post</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
