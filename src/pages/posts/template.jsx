import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Posts from "../../components/posts";

function PostsTopic({ topic }) {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { topics: { in: topic } } }) {
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
    <Posts pageTitle={`Topic: ${topic}`} edges={data.allMarkdownRemark.edges} />
  );
}

export default PostsTopic;
