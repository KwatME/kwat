import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import postCard from "../components/postCard";

function Posts() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              topics
              image {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            wordCount {
              words
            }
            timeToRead
            excerpt
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO pageTitle="Posts" />
      These are the recent posts.
      {data.allMarkdownRemark.edges.map(postCard)}
    </Layout>
  );
}

export default Posts;
