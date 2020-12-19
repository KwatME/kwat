import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"

function _404() {
  return (
    <Layout>
      <SEO title="404: Page Not Found" />

      <Content>
        <h1>404: Page Not Found</h1>

        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

        <p>
          <Link to="/">Let&#39;s go home.</Link>
        </p>
      </Content>
    </Layout>
  )
}

export default _404
