import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { usePostsContext } from "../../context/PostsContext";

import Post from "../Post";
import "./Feed.css";
import { getAllPosts } from "../../../store/postsReducer";

function Feed() {
  const normalizedPosts = useSelector((state) => state.postsState.posts);
  const posts = Object.values(normalizedPosts);
  // console.log(posts);
  const dispatch = useDispatch();
  // const { posts } = usePostsContext();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const compare = (a, b) => {
    if (new Date(a.date) < new Date(b.date)) return 1;
    if (new Date(a.date) > new Date(b.date)) return -1;
    if (new Date(a.date) === new Date(b.date)) return 0;
  };

  const sortedFeed = posts.sort(compare);

  return (
    <div className="feed-container">
      {sortedFeed?.map((post) => {
        return <Post key={post.id} postData={post} />;
      })}
    </div>
  );
}

export default Feed;
