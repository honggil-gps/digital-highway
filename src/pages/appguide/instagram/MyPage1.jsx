import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Frame1 from "../../../components/appguide/instagram/Frame11";
import UserLogo from "../../../components/UserLogo";
import Frame from "../../../components/Frame";
import "./MyPage1.css";

const MyPage1 = () => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/feed3");
  }, [navigate]);

  return (
    <div className="mypage1">
      <Frame1 onOpenmojireturnClick={onOpenmojireturnClick} />
      <div className="material-symbolshome-outline-parent4">
        <img
          className="material-symbolshome-outline-icon6"
          alt=""
          src="/appguide/instagram/materialsymbolshomeoutline1.svg"
        />
        <img
          className="material-symbolshome-outline-icon6"
          alt=""
          src="/appguide/instagram/materialsymbolssearch1.svg"
        />
        <img
          className="material-symbolshome-outline-icon6"
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
      <Frame />
    </div>
  );
};

export default MyPage1;
