import React from "react"

function SocialIcon({ title, url, icon }) {
  return (
    <>
      <a
        title={title}
        href={url}
        target="_blank"
        rel="noreferrer"
        className="navbar-item is-hidden-desktop"
      >
        <span className="icon">{icon}</span>
      </a>
    </>
  )
}

export default SocialIcon
