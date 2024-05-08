import { useCallback } from "react";
import Frame1 from "../../../components/appguide/instagram/Frame11";
import UserLogo from "../../../components/UserLogo";
import { useNavigate } from "react-router-dom";
import "./ProfileImg.css";

const ProfileImg = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/profileimg1");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/profileimg2");
  }, [navigate]);

  return (
    <div className="profileimg">
      <Frame1 headerLeft="-0.062rem" headerWidth="27rem" />
      <div className="frame13">
        <div className="frame14">
          <div className="frame-wrapper">
            <div className="frame15">
              <div className="div18">
                친구들이 회원님을 알아볼 수 있도록 사진을 추가해주세요.
              </div>
            </div>
          </div>
          <UserLogo
            imageRemovebgPreview1="/appguide/instagram/ProfileBig.png"
            propPosition="relative"
            propTop="unset"
            propLeft="unset"
            propWidth="18.25rem"
            propHeight="17.125rem"
            propRight="unset"
            propBottom="unset"
            propHeight1="80.66%"
            propWidth1="75.68%"
            propTop1="10.58%"
            propRight1="11.3%"
            propBottom1="8.76%"
            propLeft1="13.01%"
          />
          <div className="frame-container">
            <div className="input-box-wrapper2" onClick={onFrameContainerClick}>
              <button className="input-box11">
                <div className="div19">사진 추가</div>
              </button>
            </div>
            <div
              className="input-box-wrapper2"
              onClick={onFrameContainer1Click}
            >
              <button className="input-box11">
                <div className="div19">건너뛰기</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImg;
