import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "./layout";
import SEO from "./seo";
import styleUnit from "../functions/styleUnit";

export const result = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title

        date

        topics
      }

      wordCount {
        words
      }

      timeToRead

      html
    }
  }
`;

function Post(props) {
  const node = props.data.markdownRemark;

  const pageTitle = node.frontmatter.title;

  return (
    <Layout>
      <SEO pageTitle={pageTitle} />

      {pageTitle}

      {node.frontmatter.date}

      {styleUnit(node.wordCount.words, "word")}

      {styleUnit(node.timeToRead, "minute")}

      {node.frontmatter.topics.map((topic) => (
        <Link to="/">{topic}</Link>
      ))}

      <div
        dangerouslySetInnerHTML={{
          __html: node.html,
        }}
      />
    </Layout>
  );
}

export default Post;
