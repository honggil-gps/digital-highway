import { memo, useMemo } from "react";
import UserLogo from "../../UserLogo";
import InstagramImageForPosts1 from "./InstagramImageForPosts1";
import "./InstaContentDetailUser.css";

const InstaContentDetailUser = memo(
  ({
    instaContentDetailUserWidth,
    instaContentDetailUserPosition,
    instaContentDetailUserTop,
    instaContentDetailUserLeft,
    frameDivWidth,
    frameDivGap,
    userLogoWidth,
    userLogoHeight,
    userIdWidth,
    userIdHeight,
    userIdFlex,
    userIdTop,
    userIdLeft,
    userIdFontSize,
    instaContentDetailUserWidth1,
    instaContentDetailUserHeight,
    contentWidth,
    contentFontSize,
  }) => {
    const instaContentDetailUserStyle = useMemo(() => {
      return {
        width: instaContentDetailUserWidth,
        position: instaContentDetailUserPosition,
        top: instaContentDetailUserTop,
        left: instaContentDetailUserLeft,
      };
    }, [
      instaContentDetailUserWidth,
      instaContentDetailUserPosition,
      instaContentDetailUserTop,
      instaContentDetailUserLeft,
    ]);

    const frameDiv1Style = useMemo(() => {
      return {
        width: frameDivWidth,
        gap: frameDivGap,
      };
    }, [frameDivWidth, frameDivGap]);

    const userLogo1Style = useMemo(() => {
      return {
        width: userLogoWidth,
        height: userLogoHeight,
      };
    }, [userLogoWidth, userLogoHeight]);

    const userId2Style = useMemo(() => {
      return {
        width: userIdWidth,
        height: userIdHeight,
        flex: userIdFlex,
      };
    }, [userIdWidth, userIdHeight, userIdFlex]);

    const userId3Style = useMemo(() => {
      return {
        top: userIdTop,
        left: userIdLeft,
        fontSize: userIdFontSize,
      };
    }, [userIdTop, userIdLeft, userIdFontSize]);

    const instagramImageForPostsStyle = useMemo(() => {
      return {
        width: instaContentDetailUserWidth1,
        height: instaContentDetailUserHeight,
      };
    }, [instaContentDetailUserWidth1, instaContentDetailUserHeight]);

    const content1Style = useMemo(() => {
      return {
        width: contentWidth,
        fontSize: contentFontSize,
      };
    }, [contentWidth, contentFontSize]);

    return (
      <div
        className="insta-instacontentdetailuser"
        style={instaContentDetailUserStyle}
      >
        <div className="insta-profileimgusername-group" style={frameDiv1Style}>
          <div className="insta-profileimgusername2">
            <div className="insta-userlogo3" style={userLogo1Style}>
              <UserLogo
                imageRemovebgPreview1="/appguide/instagram/ProfileMedium2.png"
                propPosition="absolute"
                propTop="0%"
                propLeft="0%"
                propWidth="100%"
                propHeight="100%"
                propRight="0%"
                propBottom="0%"
                propHeight1="80.65%"
                propWidth1="75.73%"
                propTop1="10.52%"
                propRight1="11.22%"
                propBottom1="8.83%"
                propLeft1="13.05%"
              />
            </div>
            <div className="insta-userid4" style={userId2Style}>
              <div className="insta-userid5" style={userId3Style}>
                Your_id
              </div>
            </div>
          </div>
          <InstagramImageForPosts1
            instagramImageForPosts="/appguide/instagram/instagram--image-for-posts@3x.png"
            propPosition="relative"
            propTop="unset"
            propLeft="unset"
            propWidth="363px"
            propHeight="292px"
            propBorderRadius="unset"
          />
          <div className="insta-content3" style={content1Style}>
            적은 문구
          </div>
        </div>
      </div>
    );
  }
);

export default InstaContentDetailUser;
