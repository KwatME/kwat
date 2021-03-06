import React from "react";

import Layout from "./layout";
import PostCardHalfColumn from "./postcard/postcardhalfcolumn";

function Posts({ pageTitle, nodes }) {
  return (
    <Layout pageTitle={pageTitle}>
      <div className="container">
        <section className="section">
          <h1 className="title is-1">{pageTitle}</h1>
          <h4 className="subtitle is-4">
            Everthing is work in progress. As I learn about new things or change
            my mind, I am going to update the posts.
          </h4>
        </section>
        <section className="section">
          <div className="columns is-multiline">
            {nodes.map(PostCardHalfColumn)}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Posts;
