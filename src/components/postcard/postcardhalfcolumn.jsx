import React from "react";

import PostCard from ".";

function PostCardHalfColumn(node) {
  return (
    <section className="column is-half">
      <PostCard node={node} />
    </section>
  );
}

export default PostCardHalfColumn;
