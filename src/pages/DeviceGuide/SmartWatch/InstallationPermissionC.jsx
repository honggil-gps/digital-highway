import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./InstallationPermissionC.css";

const InstallationPermissionC = () => {
  const navigate = useNavigate();

  const onPermissionCButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/matchingnumber-11");
  }, [navigate]);

  return (
    <div className="installationpermissionc-10">
      <button className="permissioncbutton" onClick={onPermissionCButtonClick}>
        <b className="b6">계속</b>
      </button>
      <div className="permissioncinfo">
        <div className="galaxy-wearable-container4">
          <span className="galaxy-wearable-container5">
            <p className="galaxy-wearable5">
              <span className="span">
                <b className="galaxy-wearable7">Galaxy Wearable의 권한</b>
              </span>
              <span>
                <span className="span">{` `}</span>
                <span>{`및 해당 권한이 어떻게 `}</span>
              </span>
            </p>
            <p className="galaxy-wearable5">
              <span>
                <span>사용되는지 확인하세요</span>
              </span>
            </p>
          </span>
        </div>
        <button className="permissioncinfoselectbutton">
          <div className="permissioncinfoselectbuttonell" />
          <div className="permissioncinfoselectbuttonell1" />
        </button>
        <button className="button2">자세히 알아보기</button>
        <b className="b7">소중한 건강을 세심하게 관리하세요</b>
        <b className="galaxy-watch">Galaxy Watch</b>
      </div>
      <img
        className="permissioncwatchimage-icon"
        alt=""
        src="/DeviceGuide/SmartWatch/permissioncwatchimage@2x.png"
      />
      <b className="galaxy-wearable8">Galaxy Wearable</b>
    </div>
  );
};

export default InstallationPermissionC;
