import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

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
      <BackgroundImage fluid={data.file.childImageSharp.fluid}>
        {data.site.siteMetadata.author}

        {data.site.siteMetadata.authorStatus}
      </BackgroundImage>
      This is the about page.
    </Layout>
  );
}

export default About;
