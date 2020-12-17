import React from "react"
import Navigator from "./navigator"
import Footer from "./footer"

function Layout(dictionary) {
  return (
    <div>
      <Navigator />
      {dictionary.children}
      <Footer />
    </div>
  )
}

export default Layout
