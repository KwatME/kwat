import React from "react";

import SocialIcon from "./socialicon";

function SocialIcons() {
  return (
    <>
      <SocialIcon url="https://github.com/KwatME">
        <i className="fab fa-github" />
      </SocialIcon>
      <SocialIcon url="https://scholar.google.com/citations?user=PAM4lScAAAAJ&hl">
        <i className="ai ai-google-scholar ai-lg" />
      </SocialIcon>
      <SocialIcon url="https://anchor.fm/Kwat">
        <i className="fa fa-podcast" />
      </SocialIcon>
      <SocialIcon url="https://www.youtube.com/channel/UCYDeuExg0JHfKj4CfjQ260A">
        <i className="fab fa-youtube" />
      </SocialIcon>
      <SocialIcon url="https://twitter.com/KwatME">
        <i className="fab fa-twitter" />
      </SocialIcon>
      <SocialIcon url="https://www.instagram.com/Kwat.ME">
        <i className="fab fa-instagram" />
      </SocialIcon>
      <SocialIcon url="https://stanford.zoom.us/my/kwatme?pwd=Q2dzVXUwdmhuZzg2Vkc4aFliSFFnQT09">
        <i className="fa fa-phone" />
      </SocialIcon>
    </>
  );
}

export default SocialIcons;
