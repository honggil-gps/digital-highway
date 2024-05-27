import { memo, useMemo } from "react";
import "./UserLogo.css";

const UserLogo = memo(
  ({
    imageRemovebgPreview1,
    propPosition,
    propTop,
    propLeft,
    propWidth,
    propHeight,
    propRight,
    propBottom,
    propHeight1,
    propWidth1,
    propTop1,
    propRight1,
    propBottom1,
    propLeft1,
    onUserLogoContainerClick,
  }) => {
    const userLogo2Style = useMemo(() => {
      return {
        position: propPosition,
        top: propTop,
        left: propLeft,
        width: propWidth,
        height: propHeight,
        right: propRight,
        bottom: propBottom,
      };
    }, [
      propPosition,
      propTop,
      propLeft,
      propWidth,
      propHeight,
      propRight,
      propBottom,
    ]);

    const profileimgStyle = useMemo(() => {
      return {
        height: propHeight1,
        width: propWidth1,
        top: propTop1,
        right: propRight1,
        bottom: propBottom1,
        left: propLeft1,
      };
    }, [propHeight1, propWidth1, propTop1, propRight1, propBottom1, propLeft1]);

    return (
      <div
        className="insta-userlogo4"
        style={userLogo2Style}
        onClick={onUserLogoContainerClick}
      >
        <img
          className="insta-image-removebg-preview-1-icon"
          alt=""
          src={imageRemovebgPreview1}
        />
        <div className="insta-profileimg3" style={profileimgStyle} />
      </div>
    );
  }
);

export default UserLogo;
