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
      <Link to="/">{data.site.siteMetadata.title}</Link>

      <SocialIcons />

      <Menus />
    </header>
  );
}

export default Header;
