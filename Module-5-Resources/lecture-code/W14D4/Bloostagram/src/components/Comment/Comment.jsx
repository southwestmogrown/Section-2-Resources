import "./Comment.css";
function Comment({ comment }) {
  return (
    <div className="comment-body">
      <h4>{comment}</h4>
    </div>
  );
}

export default Comment;
