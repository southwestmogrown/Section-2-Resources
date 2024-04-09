import Post from "../Post";

import "./Feed.css";

function Feed({ data }) {
  return (
    <div className="feed-container">
      {data.map((post) => {
        return <Post key={post.id} postData={post} />;
      })}
    </div>
  );
}

export default Feed;
