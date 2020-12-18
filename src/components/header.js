import React from "react"
import { Link } from "gatsby"
import SocialIcons from "./social-icons"
import Menus from "./menus"

function Header({ siteTitle }) {
  return (
    <header>
      <nav className="navbar" role="navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" title="home" className="navbar-item">
              <span className="logo">
                <h1>{siteTitle}</h1>
              </span>
            </Link>
            <SocialIcons />
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <SocialIcons />
            </div>
            <div className="navbar-end">
              <Menus />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
