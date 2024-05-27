import { memo, useMemo } from "react";
import UserLogo from "../../UserLogo";
import InstagramImageForPosts1 from "./InstagramImageForPosts1";
import "./InstaContentUser.css";

const InstaContentUser = memo(
  ({
    imageRemovebgPreview1,
    instagramImageForPosts,
    frameDivWidth,
    userLogoWidth,
    userLogoHeight,
    userIdWidth,
    userIdHeight,
    userIdFlex,
    userIdTop,
    userIdLeft,
    instaContentUserWidth,
    instaContentUserHeight,
    underPictureWidth,
    underPictureHeight,
    mdiheartIconTop,
    mdiheartIconLeft,
    mdiheartIconWidth,
    mdiheartIconHeight,
    iconamooncommentTop,
    iconamooncommentLeft,
    iconamooncommentWidth,
    iconamooncommentHeight,
    commentTop,
    commentLeft,
    likesTop,
    likesLeft,
    contentWidth,
  }) => {
    const frameDivStyle = useMemo(() => {
      return {
        width: frameDivWidth,
      };
    }, [frameDivWidth]);

    const userLogoStyle = useMemo(() => {
      return {
        width: userLogoWidth,
        height: userLogoHeight,
      };
    }, [userLogoWidth, userLogoHeight]);

    const userIdStyle = useMemo(() => {
      return {
        width: userIdWidth,
        height: userIdHeight,
        flex: userIdFlex,
      };
    }, [userIdWidth, userIdHeight, userIdFlex]);

    const userId1Style = useMemo(() => {
      return {
        top: userIdTop,
        left: userIdLeft,
      };
    }, [userIdTop, userIdLeft]);

    const instagramImageForPostsStyle = useMemo(() => {
      return {
        width: instaContentUserWidth,
        height: instaContentUserHeight,
      };
    }, [instaContentUserWidth, instaContentUserHeight]);

    const underPictureStyle = useMemo(() => {
      return {
        width: underPictureWidth,
        height: underPictureHeight,
      };
    }, [underPictureWidth, underPictureHeight]);

    const mdiheartIconStyle = useMemo(() => {
      return {
        top: mdiheartIconTop,
        left: mdiheartIconLeft,
        width: mdiheartIconWidth,
        height: mdiheartIconHeight,
      };
    }, [
      mdiheartIconTop,
      mdiheartIconLeft,
      mdiheartIconWidth,
      mdiheartIconHeight,
    ]);

    const iconamooncommentStyle = useMemo(() => {
      return {
        top: iconamooncommentTop,
        left: iconamooncommentLeft,
        width: iconamooncommentWidth,
        height: iconamooncommentHeight,
      };
    }, [
      iconamooncommentTop,
      iconamooncommentLeft,
      iconamooncommentWidth,
      iconamooncommentHeight,
    ]);

    const commentStyle = useMemo(() => {
      return {
        top: commentTop,
        left: commentLeft,
      };
    }, [commentTop, commentLeft]);

    const likesStyle = useMemo(() => {
      return {
        top: likesTop,
        left: likesLeft,
      };
    }, [likesTop, likesLeft]);

    const contentStyle = useMemo(() => {
      return {
        width: contentWidth,
      };
    }, [contentWidth]);

    return (
      <div className="insta-instacontentuser">
        <div className="insta-profileimgusername-parent" style={frameDivStyle}>
          <div className="insta-profileimgusername1">
            <div className="insta-userlogo1" style={userLogoStyle}>
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
            <div className="insta-userid2" style={userIdStyle}>
              <div className="insta-userid3" style={userId1Style}>
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
          <div className="insta-underpicture2" style={underPictureStyle}>
            <img
              className="insta-mdiheart-icon2"
              alt=""
              src="/appguide/instagram/mdiheart.svg"
              style={mdiheartIconStyle}
            />
            <img
              className="insta-iconamooncomment2"
              alt=""
              src="/appguide/instagram/iconamooncomment.svg"
              style={iconamooncommentStyle}
            />
            <div className="insta-comment2" style={commentStyle}>
              댓글 3개
            </div>
            <div className="insta-likes2" style={likesStyle}>
              좋아요 21개
            </div>
          </div>
          <div className="insta-content2" style={contentStyle}>
            적은 문구
          </div>
        </div>
      </div>
    );
  }
);

export default InstaContentUser;
