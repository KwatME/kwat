import React from "react";
import { Link } from "gatsby";

function Menus() {
  return (
    <>
      <Link className="navbar-item" to="/about">
        About
      </Link>

      <Link className="navbar-item" to="/posts">
        Posts
      </Link>
    </>
  );
}

export default Menus;
