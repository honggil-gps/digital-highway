import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import InstaContentAdmin from "../../../components/appguide/instagram/InstaContentAdmin2";
import Header1 from "../../../components/appguide/instagram/Header";
import UserLogo from "../../../components/UserLogo";
import "./Feed.css";

const Feed = () => {
  const navigate = useNavigate();

  const onContentTextClick = useCallback(() => {
    navigate("/maincontents/feed1");
  }, [navigate]);

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/maincontents/whenfollowzero");
  }, [navigate]);

  return (
    <div className="insta-feed">
      <div className="insta-instacontentadmin-parent">
        <InstaContentAdmin
          content={`반갑습니다! “디지털지름길" 서비가 2024년 6월 시작합니다! 저희 서비스는 ... [더보기]`}
          onContentTextClick={onContentTextClick}
        />
        <InstaContentAdmin
          content={`반갑습니다 ! “디지털지름길" 서비스가 2024년 6월 시작합니다! 저희 서비스는 ... [더보기]`}
          underPictureFlex="unset"
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
      <div className="insta-material-symbolshome-outline-group">
        <img
          className="insta-material-symbolshome-outline-icon1"
          alt=""
          src="/appguide/instagram/materialsymbolshomeoutline.svg"
        />
        <img
          className="insta-material-symbolshome-outline-icon1"
          alt=""
          src="/appguide/instagram/materialsymbolssearch.svg"
        />
        <img
          className="insta-material-symbolshome-outline-icon1"
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
    </div>
  );
};

export default Feed;
