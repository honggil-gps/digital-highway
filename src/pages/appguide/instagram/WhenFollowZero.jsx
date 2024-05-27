import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DigiitalHighwayLogo from "../../../components/appguide/instagram/DigiitalHighwayLogo";
import BtnWithWord from "../../../components/appguide/instagram/BtnWithWord";
import UserLogo from "../../../components/UserLogo";
import InstagramImageForPosts1 from "../../../components/appguide/instagram/InstagramImageForPosts1";
import Header1 from "../../../components/appguide/instagram/Header";
import "./WhenFollowZero.css";

const WhenFollowZero = () => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/maincontents/login");
  }, [navigate]);

  return (
    <div className="insta-whenfollowzero">
      <b className="insta-b">인스타그램에 오신 것을 환영합니다!</b>
      <div className="insta-div26">
        다른 사람을 팔로우하면 상대방의 사진과 동영상을 볼 수 있습니다.
      </div>
      <div className="insta-whenfollowzero-child" />
      <div className="insta-div27">디지털지름길_공식</div>
      <DigiitalHighwayLogo imageRemovebgPreview11="/appguide/instagram/logoMedium.png" />
      <BtnWithWord />
      <div className="insta-material-symbolshome-outline-parent">
        <img
          className="insta-material-symbolshome-outline-icon"
          alt=""
          src="/appguide/instagram/materialsymbolshomeoutline.svg"
        />
        <img
          className="insta-material-symbolshome-outline-icon"
          alt=""
          src="/appguide/instagram/materialsymbolssearch.svg"
        />
        <img
          className="insta-material-symbolshome-outline-icon"
          alt=""
          src="/appguide/instagram/f7plusapp.svg"
        />
        <UserLogo
          imageRemovebgPreview1="/appguide/instagram/ProfileSmall.png"
          propPosition="relative"
          propTop="unset"
          propLeft="unset"
          propWidth="4.175rem"
          propHeight="4.125rem"
          propRight="unset"
          propBottom="unset"
          propHeight1="80.61%"
          propWidth1="75.6%"
          propTop1="10.61%"
          propRight1="11.38%"
          propBottom1="8.79%"
          propLeft1="13.02%"
        />
      </div>
      <InstagramImageForPosts1
        instagramImageForPosts="/appguide/instagram/ImgforPostMedium.png"
        propPosition="absolute"
        propTop="27.25rem"
        propLeft="3rem"
        propWidth="9.063rem"
        propHeight="9.125rem"
        propBorderRadius="unset"
      />
      <InstagramImageForPosts1
        instagramImageForPosts="/appguide/instagram/ImgforPostMedium.png"
        propPosition="absolute"
        propTop="27.25rem"
        propLeft="13.25rem"
        propWidth="9.063rem"
        propHeight="9.125rem"
        propBorderRadius="unset"
      />
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
    </div>
  );
};

export default WhenFollowZero;
