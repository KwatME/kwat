import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Content from "../components/content";

function About() {
  const data = useStaticQuery(graphql`
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
  `);

  return (
    <Layout>
      <SEO pageTitle="About" />

      <BackgroundImage
        className="hero is-dark is-fullheight-with-navbar"
        fluid={data.file.childImageSharp.fluid}
      >
        <div className="hero-body">
          <div className="container max-800px">
            <h1 className="title is-1 has-background-primary narrow-background">
              {data.site.siteMetadata.author}
            </h1>

            <h4 className="title subtitle is-4 has-background-primary narrow-background">
              {data.site.siteMetadata.authorStatus}
            </h4>
          </div>
        </div>
      </BackgroundImage>

      <Content></Content>
    </Layout>
  );
}

export default About;
