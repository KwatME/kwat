import React from "react";

function SocialIcon({ url, children }) {
  return (
    <a className="navbar-item" href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default SocialIcon;
