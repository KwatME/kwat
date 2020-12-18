import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"

function _404() {
  return (
    <Layout>
      <SEO title="_404" />
      <Content>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <p>p</p>
        <p>p</p>
        _404
      </Content>
    </Layout>
  )
}

export default _404
