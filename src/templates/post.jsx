import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import styleUnit from "../helpers/styleunit";

export const result = graphql`
  query($id: String!, $previousPostId: String, $nextPostId: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        time(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        topics
      }
      wordCount {
        words
      }
      timeToRead
      html
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

export default function Post({ data }) {
  const node = data.markdownRemark;
  const pageTitle = node.frontmatter.title;

  return (
    <Layout pageTitle={pageTitle}>
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <p className="title">{pageTitle}</p>
          <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
          <div className="columns is-vcentered mt-2">
            <div className="column">
              <div className="subtitle heading is-6">
                <p>
                  <time>{node.frontmatter.time}</time>
                </p>
                <p>
                  {styleUnit(node.wordCount.words, "word")} |{" "}
                  {styleUnit(node.timeToRead, "minute")}
                </p>
              </div>
            </div>
            <div className="column">
              <div className="is-pulled-right">
                {node.frontmatter.topics
                  .map((topic) => <Link to={`/topics/${topic}`}>{topic}</Link>)
                  .reduce((pre, cur) => [pre, ", ", cur])}
              </div>
            </div>
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: node.html,
            }}
          />
        </div>
      </section>
    </Layout>
  );
}
