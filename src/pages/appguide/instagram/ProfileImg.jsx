import { useCallback } from "react";
import Frame1 from "../../../components/appguide/instagram/Frame11";
import UserLogo from "../../../components/UserLogo";
import { useNavigate } from "react-router-dom";
import "./ProfileImg.css";

const ProfileImg = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/maincontents/profileimg1");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/maincontents/profileimg2");
  }, [navigate]);

  return (
    <div className="insta-profileimg">
      <Frame1 headerLeft="-0.062rem" headerWidth="27rem" />
      <div className="insta-frame13">
        <div className="insta-frame14">
          <div className="insta-frame-wrapper">
            <div className="insta-frame15">
              <div className="insta-div18">
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
          <div className="insta-frame-container">
            <div className="insta-input-box-wrapper2" onClick={onFrameContainerClick}>
              <button className="insta-input-box11">
                <div className="insta-div19">사진 추가</div>
              </button>
            </div>
            <div
              className="insta-input-box-wrapper2"
              onClick={onFrameContainer1Click}
            >
              <button className="insta-input-box11">
                <div className="insta-div19">건너뛰기</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImg;
