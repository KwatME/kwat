import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import "react-bulma-components/dist/react-bulma-components.min.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

function Index() {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css"
        />
      </Helmet>
      <Layout>
        <h1>This is Index</h1>
      </Layout>
    </div>
  )
}

export default Index
