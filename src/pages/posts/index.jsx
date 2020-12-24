import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Posts from "../../components/posts";

function PostsAll() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fields: { slug: { ne: "about" } } }) {
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

  return <Posts pageTitle="Posts" edges={data.allMarkdownRemark.edges} />;
}

export default PostsAll;
