import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/layout";

function Index() {
  const data = useStaticQuery(graphql`
    {
      file: file(absolutePath: { regex: "/pages/index.jpeg/" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          hello
        }
      }
    }
  `);

  return (
    <Layout>
      <BackgroundImage fluid={data.file.childImageSharp.fluid}>
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              <div className="content has-text-centered">
                <h1 className="title has-text-white">
                  {data.site.siteMetadata.hello}
                </h1>
              </div>
            </div>
          </div>
        </section>
      </BackgroundImage>
    </Layout>
  );
}

export default Index;
