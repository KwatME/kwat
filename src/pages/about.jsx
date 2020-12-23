import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/Layout";

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
      markdownRemark(fields: { slug: { eq: "about" } }) {
        html
      }
    }
  `);

  return (
    <Layout pageTitle="About" pageDescription="">
      <BackgroundImage fluid={data.file.childImageSharp.fluid}>
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              <div className="content">
                <h1
                  className="title has-text-white has-background-primary"
                  style={{ display: "table", padding: "0px 4px" }}
                >
                  {data.site.siteMetadata.author}
                </h1>
                <h3
                  className="subtitle has-text-white has-background-primary"
                  style={{ display: "table", padding: "0px 4px" }}
                >
                  {data.site.siteMetadata.authorStatus}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </BackgroundImage>
      <section className="section">
        <div className="container">
          <div className="content">
            <div
              dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html,
              }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
