import React from "react";

import Layout from "./layout";
import PostCardHalfColumn from "./postcard/postcardhalfcolumn";

function Posts({ pageTitle, nodes }) {
  return (
    <Layout pageTitle={pageTitle}>
      <div className="container">
        <div className="section">
          <p className="title is-1">{pageTitle}</p>
          <p>Opinions are my own.</p>
        </div>
        <div className="section">
          <div className="columns is-multiline">
            {nodes.map(PostCardHalfColumn)}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Posts;
