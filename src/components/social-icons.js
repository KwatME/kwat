import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SocialIcon from "./social-icon"

function SocialIcons() {
  return (
    <>
      <SocialIcon
        name="github"
        url="https://github.com/KwatME"
        icon={<FontAwesomeIcon icon={["fab", "github"]} />}
      />
      <SocialIcon
        name="google-scholar"
        url="https://scholar.google.com/citations?user=PAM4lScAAAAJ&hl"
        icon={<i className="ai ai-google-scholar ai-lg"></i>}
      />
      <SocialIcon
        name="podcast"
        url="https://anchor.fm/kwat"
        icon={<FontAwesomeIcon icon="podcast" />}
      />
      <SocialIcon
        name="YouTube"
        url="https://www.youtube.com/channel/UCYDeuExg0JHfKj4CfjQ260A"
        icon={<FontAwesomeIcon icon={["fab", "youtube"]} />}
      />
      <SocialIcon
        name="Twitter"
        url="https://twitter.com/KwatME"
        icon={<FontAwesomeIcon icon={["fab", "twitter"]} />}
      />
      <SocialIcon
        name="Instagram"
        url="https://www.instagram.com/kwat.me"
        icon={<FontAwesomeIcon icon={["fab", "instagram"]} />}
      />
      <SocialIcon
        name="zoom"
        url="https://stanford.zoom.us/my/kwatme?pwd=Q2dzVXUwdmhuZzg2Vkc4aFliSFFnQT09"
        icon={<FontAwesomeIcon icon="phone" />}
      />
    </>
  )
}

export default SocialIcons
