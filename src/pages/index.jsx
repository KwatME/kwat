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
        Hi
      </BackgroundImage>
      This is the index page.
    </Layout>
  );
}

export default Index;
