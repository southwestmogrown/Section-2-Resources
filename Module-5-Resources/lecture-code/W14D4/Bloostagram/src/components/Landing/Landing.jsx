import { useNavigate } from "react-router-dom";

import "./Landing.css";

function Landing() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/posts");
  };

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
      <button className="landing-btn" onClick={handleClick}>
        Go To Feed
      </button>
    </div>
  );
}

export default Landing;
