import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserLogo from "../../../components/UserLogo";
import Header from "../../../components/Header";
import "./ProfileImg1.css";

const ProfileImg1 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/profileimg2");
  }, [navigate]);

  return (
    <div className="profileimg1">
      <div className="input-box-wrapper4" onClick={onFrameContainerClick}>
        <button className="input-box13">
          <div className="div21">다음</div>
        </button>
      </div>
      <div className="input-box-wrapper5">
        <div className="input-box14">
          <div className="div22">취소하기</div>
        </div>
      </div>
      <div className="div23">
        선택하신 프로필 사진은 다음과 같이 표기됩니다 !
      </div>
      <UserLogo imageRemovebgPreview1="/appguide/instagram/Profile.png" />
      <Header />
    </div>
  );
};

export default ProfileImg1;
