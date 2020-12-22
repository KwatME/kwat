import React from "react";

function SocialIcon({ url, className, children }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={className}>
      <span className="icon">{children}</span>
    </a>
  );
}

export default SocialIcon;
