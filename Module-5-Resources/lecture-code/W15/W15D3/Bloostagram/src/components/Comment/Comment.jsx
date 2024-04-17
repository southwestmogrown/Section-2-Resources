import "./Comment.css";
function Comment({ comment }) {
  // console.log(comment);
  return <div className="comment-body">{<h4>{comment.body}</h4>}</div>;
}

export default Comment;
