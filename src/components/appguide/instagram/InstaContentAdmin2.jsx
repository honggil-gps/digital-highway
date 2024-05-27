import { memo, useMemo } from "react";
import DigiitalHighwayLogo from "./DigiitalHighwayLogo";
import InstagramImageForPosts1 from "./InstagramImageForPosts1";
import "./InstaContentAdmin2.css";

const InstaContentAdmin = memo(
  ({ content, underPictureFlex, onContentTextClick }) => {
    const divStyle = useMemo(() => {
      return {
        flex: underPictureFlex,
      };
    }, [underPictureFlex]);

    return (
      <div className="insta-instacontentadmin2">
        <div className="insta-frame-parent4">
          <div className="insta-digiitalhighway-logo-container">
            <DigiitalHighwayLogo
              imageRemovebgPreview11="/appguide/instagram/logo.png"
              propPosition="relative"
              propTop="unset"
              propLeft="unset"
              propWidth="4.5rem"
              propHeight="4.5rem"
              propHeight1="78.33%"
              propWidth1="85.56%"
              propTop1="10.83%"
              propRight="5.42%"
              propBottom="10.83%"
              propLeft1="9.03%"
            />
            <div className="insta-div35" style={divStyle}>
              디지털지름길_공식
            </div>
          </div>
          <InstagramImageForPosts1
            instagramImageForPosts="/appguide/instagram/instagram--image-for-posts@3x.png"
            propPosition="relative"
            propTop="unset"
            propLeft="unset"
            propWidth="22.688rem"
            propHeight="18.25rem"
            propBorderRadius="unset"
          />
          <div className="insta-underpicture3">
            <img
              className="insta-mdiheart-icon3"
              alt=""
              src="/appguide/instagram/mdiheart.svg"
            />
            <img
              className="insta-iconamooncomment3"
              alt=""
              src="/appguide/instagram/iconamooncomment.svg"
            />
            <div className="insta-comment3">댓글 3개</div>
            <div className="insta-likes3">좋아요 21개</div>
          </div>
          <div className="insta-content4" onClick={onContentTextClick}>
            {content}
          </div>
        </div>
      </div>
    );
  }
);

export default InstaContentAdmin;
