import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

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
    <Layout pageTitle="Posts">
      These are the recent posts.
      {data.allMarkdownRemark.edges.map(PostCard)}
    </Layout>
  );
}

export default Posts;
