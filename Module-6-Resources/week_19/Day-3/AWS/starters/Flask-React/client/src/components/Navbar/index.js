import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaSearch, FaRegHeart } from 'react-icons/fa';
import { MdHomeFilled, MdOutlineAddBox, MdFeed } from 'react-icons/md';
import './index.css';

const Navbar = () => {
    const user = useSelector((state) => state.userState.currentUser)
    const [search, setSearch ] = useState("Search");
    return(
        <div className="nav-container">
            <div className="nav-content-container">
                <div className="nav-logo-container">
                    <img className="nav-logo" 
                        src="https://res.cloudinary.com/ddxcued5s/image/upload/v1709692225/bloostagram-logo-update.png" 
                        alt="cat-logo" 
                    />
                    <h1 className="nav-title">Bloostagram</h1>
                </div>
                <div className="nav-search">
                    <FaSearch className="nav-icon"/>
                    <input className="search-input" 
                        type="text" 
                        value={ search } 
                        onChange={ setSearch }
                    />
                </div>
                <div className="icons-container">
                    <NavLink to="/">
                        <MdHomeFilled className="nav-icon"/>
                    </NavLink>
                    <NavLink to="/newpost">
                        <MdOutlineAddBox className="nav-icon"/>
                    </NavLink>
                    <NavLink to="/feed">
                        <MdFeed className="nav-icon"/>
                    </NavLink>
                    <NavLink to="/">
                        <FaRegHeart className="nav-icon"/>
                    </NavLink>
                </div>
                <h2>{ user?.username } is logged in!</h2>
            </div>
        </div>
)};

export default Navbar;