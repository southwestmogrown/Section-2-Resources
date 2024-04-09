import { useNavigate } from "react-router-dom";

import "./Post.css";

function Post({ postData }) {
  const { id, title, author, image, date } = postData;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div className={`post-container`} onClick={handleClick}>
      <div className="post-heading">
        <div className="user-info">
          <img
            src={author.profile}
            alt="placeholder profile pic"
            className="profile-image"
          />
          <h2>{author.username}</h2>
        </div>
        <h2>{date.toDateString()}</h2>
      </div>
      <div className="post-body">
        <h2>{title}</h2>
        <img src={image} alt="placeholder post image" className="post-image" />
      </div>
    </div>
  );
}

export default Post;
