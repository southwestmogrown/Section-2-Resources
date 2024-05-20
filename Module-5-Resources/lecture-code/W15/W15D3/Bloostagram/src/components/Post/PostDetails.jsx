import { Link, useParams } from "react-router-dom";

// import { usePostsContext } from "../../context/PostsContext";
import Post from "./Post";
import Comment from "../Comment";
import { useSelector } from "react-redux";

function PostDetails() {
  const { postId } = useParams();
  const post = useSelector((state) => state.postsState.posts[postId]);
  // const posts = useSelector((state) => state.postsState.posts);

  // const post = posts.find((post) => post.id === +postId);
  console.log(post);

  return (
    post && (
      <div className="post-details-container">
        <Link to="/posts">Back to feed...</Link>
        <Post postData={post} />
        <div>
          <div className="likes-container">
            <p>Likes: Coming soon...</p>
            <button
              className="like-btn"
              onClick={() => alert("Like functionality coming soon...")}
            >
              Like
            </button>
          </div>
          {post.Comments.map((comment, i) => {
            return <Comment key={i} comment={comment} />;
          })}
        </div>
      </div>
    )
  );
}

export default PostDetails;
