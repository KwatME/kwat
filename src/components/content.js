import React from "react"

function Content({ children }) {
  return (
    <div className="section">
      <div className="container max-800px">
        <div className="content">
          <h1>{children}</h1>
        </div>
      </div>
    </div>
  )
}

export default Content
