import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"

function Posts() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  const edges = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Posts" />
      <Content>
        {edges.map(edge => {
          return <p>{edge.node.frontmatter.title}</p>
        })}
      </Content>
    </Layout>
  )
}

export default Posts
