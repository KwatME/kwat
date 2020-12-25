import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import SocialIcons from "./socialicons";
import Menus from "./menus";

function NavigationBar() {
  const [isActive, setIsActive] = React.useState(false);

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

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
            setIsActive(!isActive);
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

export default NavigationBar;
