import { useState } from "react";

const Like = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setLiked((prev) => !prev);
        }}
      >
        {liked ? "좋아합니다" : "좋아하지않습니다"}
      </button>
    </div>
  );
};

export default Like;
