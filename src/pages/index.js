import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"

function Index() {
  const data = useStaticQuery(
    graphql`
      query {
        file: file(relativePath: { eq: "home.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const fluid = data.file.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Index" />

      <BackgroundImage className="hero is-large" fluid={fluid}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Hi</p>
          </div>
        </div>
      </BackgroundImage>

      <Content>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <p>p</p>
        <p>p</p>
        Index
      </Content>
    </Layout>
  )
}

export default Index
