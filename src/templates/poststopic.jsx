import React from "react";
import { graphql } from "gatsby";

import Posts from "../components/posts";

export const result = graphql`
  query($topicRegex: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { topics: { regex: $topicRegex } } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date
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
        excerpt
      }
    }
  }
`;

function PostsTopic({ topic, data }) {
  return (
    <Posts pageTitle={`Topic: ${topic}`} nodes={data.allMarkdownRemark.nodes} />
  );
}

export default PostsTopic;
