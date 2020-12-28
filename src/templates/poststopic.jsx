import React from "react";
import { graphql } from "gatsby";

import Posts from "../components/posts";

export const result = graphql`
  query($topicRegexString: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { topics: { regex: $topicRegexString } } }
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

export default function PostsTopic({ pageContext, data }) {
  const { topicRegexString } = pageContext;

  return (
    <Posts
      pageTitle={`Topic: ${topicRegexString.substring(
        1,
        topicRegexString.length - 1
      )}`}
      nodes={data.allMarkdownRemark.nodes}
    />
  );
}
