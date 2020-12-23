import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/Layout";

function Four04() {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "images/404.jpg" }) {
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
    <Layout pageTitle="404" pageDescription="">
      <BackgroundImage fluid={data.file.childImageSharp.fluid}>
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              <div className="content">
                <h1
                  className="title has-text-white has-background-primary"
                  style={{ display: "table", padding: "0px 4px" }}
                >
                  Page Not Found
                </h1>
                <h3
                  className="subtitle has-text-white has-background-primary"
                  style={{ display: "table", padding: "0px 4px" }}
                >
                  <Link to="/">Let&#39;s go home</Link>
                </h3>
              </div>
            </div>
          </div>
        </section>
      </BackgroundImage>
    </Layout>
  );
}

export default Four04;
