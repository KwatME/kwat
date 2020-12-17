import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Navigator() {
  return (
    <header>
      <nav className="navbar" role="navigation">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" title="home" className="navbar-item">
              <span className="logo">
                <h1>TITLE</h1>
              </span>
            </a>
            <a
              href="https://github.com/KwatME"
              target="_blank"
              rel="noreferrer"
              className="navbar-item is-hidden-desktop"
              title="GitHub"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a
              href="https://twitter.com/KwatME"
              target="_blank"
              rel="noreferrer"
              className="navbar-item is-hidden-desktop"
              title="Twitter"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a
              href="https://twitter.com/KwatME"
              target="_blank"
              rel="noreferrer"
              className="navbar-item is-hidden-desktop"
              title="Twitter"
            >
              <i className="ai ai-google-scholar ai-lg"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navigator
