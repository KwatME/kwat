import React from "react"

import SocialIcon from "./social-icon"

function SocialIcons({ className }) {
  return (
    <>
      <SocialIcon
        name="GitHub"
        url="https://github.com/KwatME"
        className={className}
      >
        <i className="fab fa-github"></i>
      </SocialIcon>

      <SocialIcon
        name="Google Scholar"
        url="https://scholar.google.com/citations?user=PAM4lScAAAAJ&hl"
        className={className}
      >
        <i className="ai ai-google-scholar ai-lg"></i>
      </SocialIcon>

      <SocialIcon
        name="Podcast"
        url="https://anchor.fm/Kwat"
        className={className}
      >
        <i className="fa fa-podcast"></i>
      </SocialIcon>

      <SocialIcon
        name="YouTube"
        url="https://www.youtube.com/channel/UCYDeuExg0JHfKj4CfjQ260A"
        className={className}
      >
        <i className="fab fa-youtube"></i>
      </SocialIcon>

      <SocialIcon
        name="Twitter"
        url="https://twitter.com/KwatME"
        className={className}
      >
        <i className="fab fa-twitter"></i>
      </SocialIcon>

      <SocialIcon
        name="Instagram"
        url="https://www.instagram.com/Kwat.ME"
        className={className}
      >
        <i className="fab fa-instagram"></i>
      </SocialIcon>

      <SocialIcon
        name="Zoom"
        url="https://stanford.zoom.us/my/kwatme?pwd=Q2dzVXUwdmhuZzg2Vkc4aFliSFFnQT09"
        className={className}
      >
        <i className="fa fa-phone"></i>
      </SocialIcon>
    </>
  )
}

export default SocialIcons
