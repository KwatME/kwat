import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/layout";

function Index() {
  const data = useStaticQuery(graphql`
    {
      file: file(absolutePath: { regex: "/pages/index.jpg/" }) {
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
      <BackgroundImage fluid={data.file.childImageSharp.fluid}>
        <section className="hero is-large">
          <div className="hero-body">
            <div className="container">
              <div className="content has-text-centered">
                <h1 className="title has-text-white">Are you ready?</h1>
              </div>
            </div>
          </div>
        </section>
      </BackgroundImage>
    </Layout>
  );
}

export default Index;
