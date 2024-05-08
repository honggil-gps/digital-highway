import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserLogo from "../../../components/UserLogo";
import Header1 from "../../../components/appguide/instagram/Header";
import Frame2 from "../../../components/Frame2";
import "./Feed3.css";

const Feed3 = () => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/mypage");
  }, [navigate]);

  return (
    <div className="feed3">
      <div className="material-symbolshome-outline-parent5">
        <img
          className="material-symbolshome-outline-icon7"
          alt=""
          src="/appguide/instagram/materialsymbolshomeoutline1.svg"
        />
        <img
          className="material-symbolshome-outline-icon7"
          alt=""
          src="/appguide/instagram/materialsymbolssearch1.svg"
        />
        <img
          className="material-symbolshome-outline-icon7"
          alt=""
          src="/appguide/instagram/f7plusapp1.svg"
        />
        <UserLogo
          imageRemovebgPreview1="/appguide/instagram/imageremovebgpreview-1@2x.png"
          propPosition="relative"
          propTop="unset"
          propLeft="unset"
          propWidth="4.313rem"
          propHeight="4.125rem"
          propRight="unset"
          propBottom="unset"
          propHeight1="80.61%"
          propWidth1="75.65%"
          propTop1="10.61%"
          propRight1="11.3%"
          propBottom1="8.79%"
          propLeft1="13.04%"
        />
      </div>
      <Header1
        headerWidth="26.875rem"
        headerHeight="7.313rem"
        headerPosition="absolute"
        headerTop="0rem"
        headerLeft="0rem"
        openmojireturnIconTop="1.375rem"
        openmojireturnIconLeft="1.313rem"
        openmojireturnIconWidth="4.5rem"
        openmojireturnIconHeight="4.5rem"
        instagramerTop="1.875rem"
        instagramerLeft="6.375rem"
        onOpenmojireturnClick={onOpenmojireturnClick}
      />
      <Frame2 />
    </div>
  );
};

export default Feed3;
