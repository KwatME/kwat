import React from "react";
import { Link } from "gatsby";

import SocialIcons from "./socialicons";
import Menus from "./menus";

function NavigationBar() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <span className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h5 className="title is-5">~</h5>
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
      </span>
      <span className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <span className="navbar-start">
          <Menus />
        </span>
        <span className="navbar-end">
          <SocialIcons />
        </span>
      </span>
    </nav>
  );
}

export default NavigationBar;
