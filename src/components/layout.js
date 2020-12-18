import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import { Helmet } from "react-helmet"

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"
        />
      </Helmet>
      <div style={{ display: `flex`, flexDirection: `column` }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div style={{ flex: 1 }}>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
