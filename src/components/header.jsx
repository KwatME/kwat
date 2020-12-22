import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import SocialIcons from "./socialIcons";
import Menus from "./menus";

function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <nav className="navbar" role="navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" title="home" className="navbar-item">
              <span className="logo">
                <h1>{data.site.siteMetadata.title}</h1>
              </span>
            </Link>

            <SocialIcons className="navbar-item is-hidden-desktop" />
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <SocialIcons className="navbar-item is-hidden-mobile" />
            </div>

            <div className="navbar-end">
              <Menus />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
