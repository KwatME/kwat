import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Footer() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer className="footer pb-6">
      <div className="content">
        <h6 className="title has-text-centered">
          {data.site.siteMetadata.author} © {new Date().getFullYear()}
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
