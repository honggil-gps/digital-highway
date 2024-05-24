import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./InstallationPermissionA.css";

const InstallationPermissionA = () => {
  const navigate = useNavigate();

  const onInstallationPermissionButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/installationpermissionb-09");
  }, [navigate]);

  return (
    <div className="installationpermissiona-08">
      <button
        className="installationpermissionbutton"
        onClick={onInstallationPermissionButtonClick}
      >
        <b className="b5">계속</b>
      </button>
      <div className="installationpermissioninfo">
        <div className="div3">주변 기기를 찾을 때 사용됨</div>
        <div className="div4">근처 기기</div>
        <div className="installationpermissioninfopoin">
          <img
            className="installationpermissioninfopoin-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/installationpermissioninfopointimagevector2.svg"
          />
          <img
            className="installationpermissioninfopoin-icon1"
            alt=""
            src="/DeviceGuide/SmartWatch/installationpermissioninfopointimagevector1.svg"
          />
        </div>
        <div className="div5">필수 권한</div>
      </div>
      <b className="galaxy-wearable-container">
        <p className="galaxy-wearable1">Galaxy Wearable의</p>
        <p className="galaxy-wearable1">원활한 사용을 위한 접근</p>
        <p className="galaxy-wearable1">권한 안내</p>
      </b>
      <div className="installationpermissionlogo">
        <div className="installationpermissionlogoelli" />
        <div className="installationpermissionlogoelli1" />
        <div className="installationpermissionlogoelli2" />
        <div className="installationpermissionlogoelli3" />
      </div>
    </div>
  );
};

export default InstallationPermissionA;
