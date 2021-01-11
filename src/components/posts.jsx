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
            The only thing constant in life is change, hopefully growth. That's
            why I go back to the already published posts and update them. As I
            adopt new technologies, learn about new medicine, or change my mind,
            I go back and update the corresponding posts. I want to keep
            everything up-to-date and awesome.
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
