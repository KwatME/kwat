import React from "react"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns has-text-centered">
          <div className="column">
            Kwat Medetgul-Ernar © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
