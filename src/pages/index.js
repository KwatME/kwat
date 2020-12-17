import React from "react"
import Layout from "../components/layout"

import "react-bulma-components/dist/react-bulma-components.min.css"
import "./index.scss"

function Index() {
  return (
    <div>
      <Layout>
        <h1>This is Index</h1>
      </Layout>
      <div className="buttons">
        <a className="button is-primary">Primary</a>
      </div>
    </div>
  )
}

export default Index
