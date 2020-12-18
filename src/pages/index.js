import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

import "react-bulma-components/dist/react-bulma-components.min.css"
import BackgroundImage from "gatsby-background-image"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faPodcast, faPhone } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab, faPodcast, faPhone)

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
      <BackgroundImage className="hero is-large" fluid={fluid}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">This is Index</h1>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}

export default Index
