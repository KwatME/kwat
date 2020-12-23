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
    <footer className="footer">
      <div className="content has-text-centered">
        {data.site.siteMetadata.author} © {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;
