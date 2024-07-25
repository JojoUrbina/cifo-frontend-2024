import Comment from "./Comment";
import CommentForm from "./CommentForm";
import Picture from "./Picture";

const Story = ({
  storyId,
  photo,
  author,
  timestamp,
  comments,
  onAddComment,
}) => {
  return (
    <div className="story">
      <Picture photo={photo} author={author} timestamp={timestamp} />
      {/* TODO #13
      /// Haz un map sobre el array comments para que por cada comentario /// se muestre un componente Comment con las cercas que necesite. */}

      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            author={comment.username}
            text={comment.comment}
          />
        );
      })}
      <CommentForm storyId={storyId} onAddComment={onAddComment} />
    </div>
  );
};

export default Story;
