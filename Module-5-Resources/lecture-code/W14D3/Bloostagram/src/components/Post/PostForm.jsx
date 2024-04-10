import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Post.css";

function PostForm({ users, postData }) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedUser = users.find((user) => user.name === author);

    const newPost = {
      id: postData.length + 1,
      title,
      imageUrl,
      author: selectedUser,
      date: new Date(),
      comments: [],
      likes: 0,
    };

    console.log(newPost);
    setTitle("");
    setImageUrl("");
    setAuthor("");
    navigate("/posts");
  };

  return (
    <div className="form-container">
      <form className="post-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            className="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="image">Image URL</label>
          <input
            className="image"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="author">Author</label>
          <select
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="" disabled>
              Select an author...
            </option>
            {users.map((user, index) => (
              <option key={index}>{user.name}</option>
            ))}
          </select>
        </div>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
