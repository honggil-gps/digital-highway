import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./InstallationPermissionC.css";

const InstallationPermissionC = () => {
  const navigate = useNavigate();

  const onPermissionCButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/matchingnumber-11");
  }, [navigate]);

  return (
    <div className="WIPC-installationpermissionc-10">
      <button className="WIPC-permissioncbutton" onClick={onPermissionCButtonClick}>
        <b className="WIPC-b6">계속</b>
      </button>
      <div className="WIPC-permissioncinfo">
        <div className="WIPC-galaxy-wearable-container4">
          <span className="WIPC-galaxy-wearable-container5">
            <p className="WIPC-galaxy-wearable5">
              <span className="WIPC-span">
                <b className="WIPC-galaxy-wearable7">Galaxy Wearable의 권한</b>
              </span>
              <span>
                <span className="WIPC-span">{` `}</span>
                <span>{`및 해당 권한이 어떻게 `}</span>
              </span>
            </p>
            <p className="WIPC-galaxy-wearable5">
              <span>
                <span>사용되는지 확인하세요</span>
              </span>
            </p>
          </span>
        </div>
        <button className="WIPC-permissioncinfoselectbutton">
          <div className="WIPC-permissioncinfoselectbuttonell" />
          <div className="WIPC-permissioncinfoselectbuttonell1" />
        </button>
        <button className="WIPC-button2">자세히 알아보기</button>
        <b className="WIPC-b7">소중한 건강을 세심하게 관리하세요</b>
        <b className="WIPC-galaxy-watch">Galaxy Watch</b>
      </div>
      <img
        className="WIPC-permissioncwatchimage-icon"
        alt=""
        src="/DeviceGuide/SmartWatch/permissioncwatchimage@2x.png"
      />
      <b className="WIPC-galaxy-wearable8">Galaxy Wearable</b>
    </div>
  );
};

export default InstallationPermissionC;
