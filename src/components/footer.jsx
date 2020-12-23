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
    <footer
      style={{
        backgroundColor: "#d8d8d8",
        color: "#000000",
        textAlign: "center",
        fontSize: 24,
        padding: 24,
      }}
    >
      <div>
        {data.site.siteMetadata.author} © {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;
