import React from "react";
import { graphql } from "gatsby";

import Posts from "../components/posts";

export const result = graphql`
  query {
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
`;

function PostsTopic({ topic, data }) {
  return (
    <Posts pageTitle={`Topic: ${topic}`} edges={data.allMarkdownRemark.edges} />
  );
}

export default PostsTopic;
