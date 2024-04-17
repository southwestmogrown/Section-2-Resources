import { useNavigate } from "react-router-dom";

import { useThemeContext } from "../../context/ThemeContext";

import "./Post.css";

function Post({ postData }) {
  const { id, title, author, image, date } = postData;

  // console.log("POST DATA", postData);
  const navigate = useNavigate();
  const { theme } = useThemeContext();

  const handleClick = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div className={`post-container ${theme}`} onClick={handleClick}>
      <div className="post-heading">
        <div className="user-info">
          <img
            src={author?.profile}
            alt="placeholder profile pic"
            className="profile-image"
          />
          <h2>{author?.username}</h2>
        </div>
        <h2>{date}</h2>
      </div>
      <div className="post-body">
        <h2>{title}</h2>
        <img src={image} alt="placeholder post image" className="post-image" />
      </div>
    </div>
  );
}

export default Post;
