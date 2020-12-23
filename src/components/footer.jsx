import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer>
      {data.site.siteMetadata.author} © {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
