import React from "react";

function SocialIcon(props) {
  return (
    <a
      className="navbar-item is-hidden-touch"
      href={props.url}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}

export default SocialIcon;
