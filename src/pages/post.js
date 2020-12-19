import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"

function Post() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            timeToRead
            wordCount {
              words
            }
          }
        }
      }
    }
  `)

  const node = data.allMarkdownRemark.edges[0].node

  return (
    <Layout>
      <SEO title="Post" />
      <Content>
        {node.frontmatter.title}
        {node.frontmatter.date}
        {node.wordCount.words}
        {node.timeToRead}
        {node.html}
      </Content>
    </Layout>
  )
}

export default Post
