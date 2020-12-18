import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const author = data.site.siteMetadata.author

  return (
    <footer className="footer">
      <div className="container">
        <div className="columns has-text-centered">
          <div className="column">
            {author} © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
