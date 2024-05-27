import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../../../components/appguide/instagram/Header";
import InstaContentAdmin11 from "../../../components/appguide/instagram/InstaContentAdmin11";
import InstaContentAdmin from "../../../components/appguide/instagram/InstaContentAdmin2";
import UserLogo from "../../../components/UserLogo";
import "./Feed1.css";

const Feed1 = () => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/maincontents/feed");
  }, [navigate]);

  const onF7plusAppClick = useCallback(() => {
    navigate("/maincontents/addcontent");
  }, [navigate]);

  return (
    <div className="insta-feed1">
      <Header1
        headerWidth="26.875rem"
        headerHeight="7.313rem"
        headerPosition="absolute"
        headerTop="0rem"
        headerLeft="-0.062rem"
        openmojireturnIconTop="1.375rem"
        openmojireturnIconLeft="1.313rem"
        openmojireturnIconWidth="4.5rem"
        openmojireturnIconHeight="4.5rem"
        instagramerTop="1.875rem"
        instagramerLeft="6.375rem"
        onOpenmojireturnClick={onOpenmojireturnClick}
      />
      <div className="insta-instacontentadmin-group">
        <InstaContentAdmin11
          imageRemovebgPreview11="/appguide/instagram/logo.png"
          instagramImageForPosts="/appguide/instagram/instagram--image-for-posts@3x.png"
        />
        <InstaContentAdmin content="적은 문구" underPictureFlex="1" />
      </div>
      <div className="insta-material-symbolshome-outline-parent1">
        <img
          className="insta-material-symbolshome-outline-icon3"
          alt=""
          src="/appguide/instagram/materialsymbolshomeoutline1.svg"
        />
        <img
          className="insta-material-symbolshome-outline-icon3"
          alt=""
          src="/appguide/instagram/materialsymbolssearch1.svg"
        />
        <img
          className="insta-f7plus-app-icon3"
          alt=""
          src="/appguide/instagram/f7plusapp1.svg"
          onClick={onF7plusAppClick}
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
    </div>
  );
};

export default Feed1;
