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
    <header
      style={{
        backgroundColor: "#d8d8d8",
        color: "#000000",
        textAlign: "center",
        fontSize: 24,
        padding: 24,
      }}
    >
      <Link to="/">{data.site.siteMetadata.title}</Link>

      <div style={{ float: "left" }}>
        <SocialIcons />
      </div>

      <div style={{ float: "right" }}>
        <Menus />
      </div>
    </header>
  );
}

export default Header;
