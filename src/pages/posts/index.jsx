import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Posts from "../../components/posts";

export default function PostsAll() {
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
          excerpt(pruneLength: 80)
        }
      }
    }
  `);

  return <Posts pageTitle="Posts" nodes={data.allMarkdownRemark.nodes} />;
}
