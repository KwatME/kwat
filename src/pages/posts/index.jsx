import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Posts from "../../components/posts";

function PostsAll() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(?<!/pages/about/about).md/" } }
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
  `);

  return <Posts pageTitle="Posts" nodes={data.allMarkdownRemark.nodes} />;
}

export default PostsAll;
