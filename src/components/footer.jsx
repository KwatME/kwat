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
      <div className="columns has-text-centered-touch">
        <div className="column">
          <section className="has-text-left-desktop">
            <p className="has-text-weight-medium is-italic">
              Opinions are my own.
            </p>
          </section>
        </div>

        <div className="column">
          <section className="has-text-right-desktop">
            <p className="has-text-weight-medium">
              {data.site.siteMetadata.author} © {new Date().getFullYear()}
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
