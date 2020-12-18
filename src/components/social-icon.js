import React from "react"

function SocialIcon({ title, url, children }) {
  return (
    <a
      title={title}
      href={url}
      target="_blank"
      rel="noreferrer"
      className="navbar-item is-hidden-desktop"
    >
      <span className="icon">{children}</span>
    </a>
  )
}

export default SocialIcon
