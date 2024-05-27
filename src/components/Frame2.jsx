import { memo, useState, useCallback } from "react";
import Frame from "./appguide/instagram/Frame";
import PortalPopup from "./appguide/instagram/PortalPopup";
import InstaContentDetailUser from "./appguide/instagram/InstaContentDetailUser";
import "./Frame2.css";

const Frame2 = memo(() => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className="insta-frame26">
        <InstaContentDetailUser
          instaContentDetailUserWidth="23.063rem"
          instaContentDetailUserPosition="absolute"
          instaContentDetailUserTop="0rem"
          instaContentDetailUserLeft="0rem"
          frameDivWidth="22.938rem"
          frameDivGap="0.437rem"
          userLogoWidth="5.125rem"
          userLogoHeight="4.813rem"
          userIdWidth="unset"
          userIdHeight="4.188rem"
          userIdFlex="1"
          userIdTop="1.344rem"
          userIdLeft="0rem"
          userIdFontSize="1.25rem"
          instaContentDetailUserWidth1="22.688rem"
          instaContentDetailUserHeight="18.25rem"
          contentWidth="22.75rem"
          contentFontSize="1rem"
        />
        <div className="insta-frame-child2" onClick={openFrame} />
        <div className="insta-div43">글 관리</div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
});

export default Frame2;
