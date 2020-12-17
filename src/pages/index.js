import React from "react"
import { Link } from "gatsby"
import Navigator from "../components/navigator"
import Footer from "../components/footer"

function Index() {
  return (
    <div>
      <Navigator></Navigator>
      <h1>This is Index</h1>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/posts">Posts</Link>
      </p>
      <p>
        <Link to="/topics">Topics</Link>
      </p>
      <p>
        <a href="https://github.com/KwatME" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
      <Footer></Footer>
    </div>
  )
}

export default Index
