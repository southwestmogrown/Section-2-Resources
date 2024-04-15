import Post from "../Post";
import { usePostsContext } from "../../context/PostsContext";

import "./Feed.css";

function Feed() {
  const { posts } = usePostsContext();
  return (
    <div className="feed-container">
      {posts.map((post) => {
        return <Post key={post.id} postData={post} />;
      })}
    </div>
  );
}

export default Feed;
