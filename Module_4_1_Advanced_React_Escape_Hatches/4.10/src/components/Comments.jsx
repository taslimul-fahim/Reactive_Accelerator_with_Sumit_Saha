import { useEffect, useState } from "react";
import { api } from "../api";

const Comments = ({ userId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;

    // fetch comment here
    async function startFetching() {
      const json = await api(userId);
      if (!ignore) {
        setComments(json);
      }
    }
    startFetching();
    return () => {
      ignore = true;
    };
  }, [userId]);

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
