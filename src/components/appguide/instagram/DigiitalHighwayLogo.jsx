import { memo, useMemo } from "react";
import "./DigiitalHighwayLogo.css";

const DigiitalHighwayLogo = memo(
  ({
    imageRemovebgPreview11,
    propPosition,
    propTop,
    propLeft,
    propWidth,
    propHeight,
    propHeight1,
    propWidth1,
    propTop1,
    propRight,
    propBottom,
    propLeft1,
  }) => {
    const digiitalHighwayLogoStyle = useMemo(() => {
      return {
        position: propPosition,
        top: propTop,
        left: propLeft,
        width: propWidth,
        height: propHeight,
      };
    }, [propPosition, propTop, propLeft, propWidth, propHeight]);

    const imageRemovebgPreview11Style = useMemo(() => {
      return {
        height: propHeight1,
        width: propWidth1,
        top: propTop1,
        right: propRight,
        bottom: propBottom,
        left: propLeft1,
      };
    }, [propHeight1, propWidth1, propTop1, propRight, propBottom, propLeft1]);

    return (
      <div className="insta-digiitalhighway-logo" style={digiitalHighwayLogoStyle}>
        <div className="insta-profileimg4" />
        <img
          className="insta-image-removebg-preview-1-1"
          alt=""
          src={imageRemovebgPreview11}
          style={imageRemovebgPreview11Style}
        />
      </div>
    );
  }
);

export default DigiitalHighwayLogo;
