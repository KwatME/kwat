import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"

function About() {
  const data = useStaticQuery(
    graphql`
      query {
        file: file(relativePath: { eq: "about.jpg" }) {
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
      <BackgroundImage
        className="hero is-dark is-fullheight-with-navbar"
        fluid={fluid}
      >
        <div className="hero-body">
          <div className="container max-800px">
            <h1 className="title is-1 has-background-primary narrow-background">
              Kwat Medetgul-Ernar
            </h1>
            <h4 className="title subtitle is-4 has-background-primary narrow-background">
              Binge watching One Piece, the best anime of all time
            </h4>
          </div>
        </div>
      </BackgroundImage>
      <div className="section">
        <div className="container max-800px">
          <div className="content">This is About</div>
        </div>
      </div>
    </Layout>
  )
}

export default About
