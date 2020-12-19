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
        file: file(relativePath: { eq: "images/home.jpg" }) {
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
      <SEO title="Home" />

      <BackgroundImage className="hero is-large" fluid={fluid}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Hi</p>
          </div>
        </div>
      </BackgroundImage>

      <Content></Content>
    </Layout>
  )
}

export default Index
