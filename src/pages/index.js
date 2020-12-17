import React from "react"
import Layout from "../components/layout"

import "react-bulma-components/dist/react-bulma-components.min.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faPodcast, faPhone } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab, faPodcast, faPhone)

function Index() {
  return (
    <div>
      <Layout>
        <h1>This is Index</h1>
      </Layout>
    </div>
  )
}

export default Index
