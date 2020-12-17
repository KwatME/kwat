import React from "react"
import { Link } from "gatsby"

function Navigator() {
  return (
    <header>
      <h1>Kwat</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <a
              href="https://github.com/KwatME"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigator
