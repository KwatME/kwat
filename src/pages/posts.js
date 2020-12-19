import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const edges = data.allMarkdownRemark.edges

  console.log(JSON.stringify(edges))

  return (
    <Layout>
      <SEO title="Posts" />

      <Content>
        {edges.map(edge => {
          return (
            <Link to={`/posts/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </Link>
          )
        })}
      </Content>
    </Layout>
  )
}

export default Posts
