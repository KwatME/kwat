import React from "react"

function Content({ children }) {
  return (
    <div className="section">
      <div className="container max-800px">
        <div className="content">{children}</div>
      </div>
    </div>
  )
}

export default Content
