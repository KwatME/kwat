import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Layout from "../../components/layout";

export default function Four04() {
  const data = useStaticQuery(graphql`
    {
      file: file(absolutePath: { regex: "/pages/404/404.jpg/" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout pageTitle="404">
      <BackgroundImage fluid={data.file.childImageSharp.fluid}>
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              <div className="content">
                <h1
                  className="title has-text-white has-background-primary"
                  style={{ display: "table", padding: "0px 4px" }}
                >
                  Page Not Found. Let's <Link to="/">go home</Link>.
                </h1>
              </div>
            </div>
          </div>
        </section>
      </BackgroundImage>
    </Layout>
  );
}
