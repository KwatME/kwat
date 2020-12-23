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

  const [isActive, setisActive] = React.useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          {data.site.siteMetadata.title}
        </Link>

        <button
          className={`navbar-burger button is-white ${
            isActive ? "is-active" : ""
          }`}
          type="button"
          aria-label="menu"
          aria-expanded="false"
          onClick={() => {
            setisActive(!isActive);
          }}
        >
          <span aria-hidden="true" />

          <span aria-hidden="true" />

          <span aria-hidden="true" />
        </button>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <SocialIcons />
        </div>

        <div className="navbar-end">
          <Menus />
        </div>
      </div>
    </nav>
  );
}

export default Header;
