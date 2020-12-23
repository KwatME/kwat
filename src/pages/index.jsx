import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Index() {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "images/home.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO pageTitle="Home" />
      <BackgroundImage fluid={data.file.childImageSharp.fluid}>
        <section className="hero is-large">
          <div className="hero-body">
            <div className="container">
              <div className="content has-text-centered">
                <h1 className="title">Are you ready?</h1>
              </div>
            </div>
          </div>
        </section>
      </BackgroundImage>
    </Layout>
  );
}

export default Index;
