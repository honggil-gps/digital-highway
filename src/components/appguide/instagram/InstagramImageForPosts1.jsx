import { memo, useMemo } from "react";
import "./InstagramImageForPosts1.css";

const InstagramImageForPosts1 = memo(
  ({
    instagramImageForPosts,
    propPosition,
    propTop,
    propLeft,
    propWidth,
    propHeight,
    propBorderRadius,
    onInstagramImageForPostsClick,
  }) => {
    const instagramImageForPostsStyle = useMemo(() => {
      return {
        position: propPosition,
        top: propTop,
        left: propLeft,
        width: propWidth,
        height: propHeight,
        borderRadius: propBorderRadius,
      };
    }, [
      propPosition,
      propTop,
      propLeft,
      propWidth,
      propHeight,
      propBorderRadius,
    ]);

    return (
      <img
        className="insta-instagram-image-for-posts1"
        alt=""
        src={instagramImageForPosts}
        style={instagramImageForPostsStyle}
        onClick={onInstagramImageForPostsClick}
      />
    );
  }
);

export default InstagramImageForPosts1;
