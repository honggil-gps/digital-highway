import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PreInstallAppPermission.css";

const PreInstallAppPermission = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/lodingpagee-25");
  }, [navigate]);

  return (
    <div className="preinstallapppermission-24">
      <b className="b79">
        <p className="p69">사전 설치된 워치 앱에서</p>
        <p className="p69">필요한 권한</p>
      </b>
      <div className="ellipse-parent">
        <div className="frame-child" />
        <div className="frame-item" />
        <div className="frame-inner" />
        <div className="ellipse-div" />
      </div>
      <img
        className="image-15-icon"
        alt=""
        src="/DeviceGuide/SmartWatch/image-15@2x.png"
      />
      <b className="b80">각 앱을 눌러 사용 중인 권한을 확인하세요</b>
      <div className="frame-parent">
        <button className="wrapper">
          <b className="b81">취소</b>
        </button>
        <button className="container" onClick={onFrameButton1Click}>
          <b className="b82">동의</b>
        </button>
      </div>
    </div>
  );
};

export default PreInstallAppPermission;
