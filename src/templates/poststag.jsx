import React from "react";
import { graphql } from "gatsby";

import Posts from "../components/posts";

export const result = graphql`
  query($tagRegexString: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { regex: $tagRegexString } } }
      sort: { fields: [frontmatter___time], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          time
          cover {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          tags
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

export default function PostsTag({ pageContext, data }) {
  const { tagRegexString } = pageContext;

  return (
    <Posts
      pageTitle={`Tag: ${tagRegexString.substring(
        1,
        tagRegexString.length - 1
      )}`}
      nodes={data.allMarkdownRemark.nodes}
    />
  );
}
