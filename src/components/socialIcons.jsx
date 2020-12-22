import React from "react";

import SocialIcon from "./socialIcon";

function SocialIcons({ className }) {
  return (
    <>
      <SocialIcon url="https://github.com/KwatME" className={className}>
        <i className="fab fa-github" />
      </SocialIcon>

      <SocialIcon
        url="https://scholar.google.com/citations?user=PAM4lScAAAAJ&hl"
        className={className}
      >
        <i className="ai ai-google-scholar ai-lg" />
      </SocialIcon>

      <SocialIcon url="https://anchor.fm/Kwat" className={className}>
        <i className="fa fa-podcast" />
      </SocialIcon>

      <SocialIcon
        url="https://www.youtube.com/channel/UCYDeuExg0JHfKj4CfjQ260A"
        className={className}
      >
        <i className="fab fa-youtube" />
      </SocialIcon>

      <SocialIcon url="https://twitter.com/KwatME" className={className}>
        <i className="fab fa-twitter" />
      </SocialIcon>

      <SocialIcon url="https://www.instagram.com/Kwat.ME" className={className}>
        <i className="fab fa-instagram" />
      </SocialIcon>

      <SocialIcon
        url="https://stanford.zoom.us/my/kwatme?pwd=Q2dzVXUwdmhuZzg2Vkc4aFliSFFnQT09"
        className={className}
      >
        <i className="fa fa-phone" />
      </SocialIcon>
    </>
  );
}

export default SocialIcons;
