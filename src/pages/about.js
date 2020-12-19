import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"

function About() {
  const data = useStaticQuery(
    graphql`
      query {
        file: file(relativePath: { eq: "images/about.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        site {
          siteMetadata {
            author

            authorStatus
          }
        }
      }
    `
  )

  const fluid = data.file.childImageSharp.fluid

  const author = data.site.siteMetadata.author

  const authorStatus = data.site.siteMetadata.authorStatus

  return (
    <Layout>
      <SEO title="About" />

      <BackgroundImage
        className="hero is-dark is-fullheight-with-navbar"
        fluid={fluid}
      >
        <div className="hero-body">
          <div className="container max-800px">
            <h1 className="title is-1 has-background-primary narrow-background">
              {author}
            </h1>

            <h4 className="title subtitle is-4 has-background-primary narrow-background">
              {authorStatus}
            </h4>
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
        About
      </Content>
    </Layout>
  )
}

export default About
