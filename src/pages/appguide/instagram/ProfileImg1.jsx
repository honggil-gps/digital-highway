import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserLogo from "../../../components/UserLogo";
import Header from "../../../components/Header";
import "./ProfileImg1.css";

const ProfileImg1 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/maincontents/profileimg2");
  }, [navigate]);

  return (
    <div className="insta-profileimg1">
      <div className="insta-input-box-wrapper4" onClick={onFrameContainerClick}>
        <button className="insta-input-box13">
          <div className="insta-div21">다음</div>
        </button>
      </div>
      <div className="insta-input-box-wrapper5">
        <div className="insta-input-box14">
          <div className="insta-div22">취소하기</div>
        </div>
      </div>
      <div className="insta-div23">
        선택하신 프로필 사진은 다음과 같이 표기됩니다 !
      </div>
      <UserLogo imageRemovebgPreview1="/appguide/instagram/Profile.png" />
      <Header />
    </div>
  );
};

export default ProfileImg1;
