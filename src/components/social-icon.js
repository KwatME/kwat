import React from "react"

function SocialIcon({ title, url, className, children }) {
  return (
    <a
      title={title}
      href={url}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      <span className="icon">{children}</span>
    </a>
  )
}

export default SocialIcon
