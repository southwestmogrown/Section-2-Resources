import { useParams } from "react-router-dom";

function PostDetails({ data }) {
  const { postId } = useParams();

  const post = data.find((post) => post.id === +postId);
  console.log(post);

  return <h1>Post Details Component</h1>;
}

export default PostDetails;
