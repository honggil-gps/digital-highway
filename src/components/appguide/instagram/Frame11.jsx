import { memo, useMemo } from "react";
import Header1 from "./Header";
import "./Frame11.css";

const Frame1 = memo(({ headerLeft, headerWidth, onOpenmojireturnClick }) => {
  const frameStyle = useMemo(() => {
    return {
      left: headerLeft,
      width: headerWidth,
    };
  }, [headerLeft, headerWidth]);

  return (
    <div className="insta-frame24" style={frameStyle}>
      <Header1
        headerWidth="26.875rem"
        headerHeight="7.313rem"
        headerPosition="relative"
        headerTop="unset"
        headerLeft="unset"
        openmojireturnIconTop="1.375rem"
        openmojireturnIconLeft="1.313rem"
        openmojireturnIconWidth="4.5rem"
        openmojireturnIconHeight="4.5rem"
        instagramerTop="1.875rem"
        instagramerLeft="6.375rem"
        onOpenmojireturnClick={onOpenmojireturnClick}
      />
    </div>
  );
});

export default Frame1;
