import { memo, useMemo } from "react";
import "./Header.css";

const Header1 = memo(
  ({
    headerWidth,
    headerHeight,
    headerPosition,
    headerTop,
    headerLeft,
    openmojireturnIconTop,
    openmojireturnIconLeft,
    openmojireturnIconWidth,
    openmojireturnIconHeight,
    instagramerTop,
    instagramerLeft,
    onOpenmojireturnClick,
  }) => {
    const headerStyle = useMemo(() => {
      return {
        width: headerWidth,
        height: headerHeight,
        position: headerPosition,
        top: headerTop,
        left: headerLeft,
      };
    }, [headerWidth, headerHeight, headerPosition, headerTop, headerLeft]);

    const openmojireturnIconStyle = useMemo(() => {
      return {
        top: openmojireturnIconTop,
        left: openmojireturnIconLeft,
        width: openmojireturnIconWidth,
        height: openmojireturnIconHeight,
      };
    }, [
      openmojireturnIconTop,
      openmojireturnIconLeft,
      openmojireturnIconWidth,
      openmojireturnIconHeight,
    ]);

    const instagramerStyle = useMemo(() => {
      return {
        top: instagramerTop,
        left: instagramerLeft,
      };
    }, [instagramerTop, instagramerLeft]);

    return (
      <div className="header" style={headerStyle}>
        <img
          className="openmojireturn-icon"
          alt=""
          src="/appguide/instagram/openmojireturn.svg"
          style={openmojireturnIconStyle}
          onClick={onOpenmojireturnClick}
        />
        <div className="instagramer2" style={instagramerStyle}>
          Instagramer
        </div>
      </div>
    );
  }
);

export default Header1;
