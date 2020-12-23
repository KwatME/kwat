import React from "react";

function SocialIcon(props) {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}

export default SocialIcon;
