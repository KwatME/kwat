import React from "react";
import { Link } from "gatsby";

function Menus() {
  return (
    <>
      <Link to="/about" className="navbar-item">
        About
      </Link>

      <Link to="/posts" className="navbar-item">
        Posts
      </Link>
    </>
  );
}

export default Menus;
