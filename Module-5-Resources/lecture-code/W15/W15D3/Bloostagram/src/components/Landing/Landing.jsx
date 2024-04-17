import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import "./Landing.css";
import { useState } from "react";
import {  loginUser } from "../../../store/usersReducer";

function Landing() {
  const [currentUser, setCurrentUser] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersState.users);
  console.log(users)

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedUser = users.find(person => person.username === currentUser);
    dispatch(loginUser(selectedUser));
    setCurrentUser('');
    navigate('/posts')
  }

  return (
    <div className="landing-container">
      <h1>Welcome to Bloostagram!</h1>
      <img
        className="landing-image"
        src={
          "https://res.cloudinary.com/ddxcued5s/image/upload/v1709692225/bloostagram-logo-update.png"
        }
        alt="a cute pup"
      />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="currentUser">User to log in: </label>
          <select
            name="currentUser"
            onChange={(e) => setCurrentUser(e.target.value)}
            value={currentUser}
          >
            <option value="" disabled>
              Select a user...
            </option>
            {users?.map((user, index) => (
              <option key={index}>{user.username}</option>
            ))}
          </select>
        </div>
        <button
          className="landing-button"
          disabled={currentUser.length === 0 ? true : false}
        >
          Enter Site
        </button>
      </form>
    </div>
  );
}

export default Landing;
