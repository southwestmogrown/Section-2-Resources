import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Post.css";
import { useThemeContext } from "../../context/ThemeContext";
import { usePostsContext } from "../../context/PostsContext";

function PostForm() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { theme } = useThemeContext();
  const { posts, setPosts, users } = usePostsContext();

  useEffect(() => {
    const errors = {};
    if (title.length === 0) errors.title = "Please enter a post title!";
    if (imageUrl.length === 0) errors.imageUrl = "Please provide an image url!";
    if (author.length === 0) errors.author = "Please select an author!";

    setValidationErrors(errors);
  }, [title, imageUrl, author]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (Object.values(validationErrors).length) {
      return alert(`The following errors were found:
      ${validationErrors.title ? "* " + validationErrors.title : ""}
      ${validationErrors.imageUrl ? "* " + validationErrors.imageUrl : ""}
      ${validationErrors.author ? "* " + validationErrors.author : ""}
      `);
    }

    const selectedUser = users.find((user) => user.name === author);

    const newPost = {
      id: posts.length + 1,
      title,
      image: imageUrl,
      author: selectedUser,
      date: new Date(),
      comments: [],
      likes: 0,
    };

    console.log(newPost);
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setTitle("");
    setImageUrl("");
    setAuthor("");
    navigate("/posts");
  };

  return (
    <div className={`form-container`}>
      <form className={`post-form ${theme}`} onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            className="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ color: "red" }}>
          {/* {validationErrors.title} */}
          {hasSubmitted && validationErrors.title}
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
        <div style={{ color: "red" }}>
          {/* {validationErrors.imageUrl} */}
          {hasSubmitted && validationErrors.imageUrl}
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
        <div style={{ color: "red" }}>
          {/* {validationErrors.author} */}
          {hasSubmitted && validationErrors.author}
        </div>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
