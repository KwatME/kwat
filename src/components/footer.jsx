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
    <footer className="footer pb-6" role="contentinfo">
      <section>
        <h6 className="title is-6 has-text-centered">
          {data.site.siteMetadata.author} © {new Date().getFullYear()}
        </h6>
      </section>
    </footer>
  );
}

export default Footer;
