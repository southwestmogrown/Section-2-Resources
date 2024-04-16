import Post from "../Post";
import { usePostsContext } from "../../context/PostsContext";

import "./Feed.css";

function Feed() {

  const { posts } = usePostsContext();

  const compare = (a, b) => {
    if (new Date(a.date) < new Date(b.date)) return 1;
    if (new Date(a.date) > new Date(b.date)) return -1;
    if (new Date(a.date) === new Date(b.date)) return 0;
  };

  const sortedFeed = posts.sort(compare);

  return (
    <div className="feed-container">
      {sortedFeed.map((post) => {
        return <Post key={post.id} postData={post} />;
      })}
    </div>
  );
}

export default Feed;
