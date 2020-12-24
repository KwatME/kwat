import React from "react";

import PostCard from ".";

function PostCardHalfColumn({ node }) {
  return (
    <div className="column is-half">
      <PostCard node={node} />
    </div>
  );
}

export default PostCardHalfColumn;
