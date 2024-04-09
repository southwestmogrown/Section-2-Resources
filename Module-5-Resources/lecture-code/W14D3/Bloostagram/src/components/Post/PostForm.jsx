import "./Post.css";

function PostForm({ users }) {
  return (
    <div>
      <form className="post-form">
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input className="title" placeholder="Title" />
        </div>
        <div className="input-container">
          <label htmlFor="image">Image URL</label>
          <input className="image" placeholder="Image URL" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <select name="author" value="">
            <option value="" disabled>
              Select an author...
            </option>
            {users.map((user, index) => (
              <option key={index}>{user.name}</option>
            ))}
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
