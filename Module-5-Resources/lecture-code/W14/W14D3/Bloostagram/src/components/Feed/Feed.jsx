import Post from "../Post";

import "./Feed.css";

function Feed({ postData }) {
  return (
    <div className="feed-container">
      {postData.map((post) => {
        return <Post key={post.id} postData={post} />;
      })}
    </div>
  );
}

export default Feed;
