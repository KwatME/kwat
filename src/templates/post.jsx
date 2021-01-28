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
        cover {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      fields {
        tags
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

  const {
    fields: { tags },
  } = node;
  let tagLinks;
  if (0 < tags.length) {
    tagLinks = tags
      .map((tag) => <Link to={`/tags/${tag}`}>{tag}</Link>)
      .reduce((pre, cur) => [pre, ", ", cur]);
  }

  return (
    <Layout pageTitle={pageTitle}>
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <h1 className="title is-2">{pageTitle}</h1>
          <Img fluid={node.frontmatter.cover.childImageSharp.fluid} />
          <div className="columns is-vcentered mt-1">
            <div className="column">
              <section className="heading subtitle is-6">
                <p>
                  <time>{node.frontmatter.time}</time>
                </p>
                <p>
                  {styleUnit(node.wordCount.words, "word")} |{" "}
                  {styleUnit(node.timeToRead, "minute")}
                </p>
              </section>
            </div>
            <div className="column">
              <section className="is-pulled-right heading subtitle is-6">
                {tagLinks}
              </section>
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
