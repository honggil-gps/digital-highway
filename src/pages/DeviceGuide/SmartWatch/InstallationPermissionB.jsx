import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./InstallationPermissionB.css";

const InstallationPermissionB = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/installationpermissionc-10");
  }, [navigate]);

  return (
    <div className="installationpermissionb-09">
      <div className="installationpermissionallowbut">
        <button className="button" onClick={onButtonClick}>
          허용
        </button>
        <button className="button1">허용안함</button>
        <b className="galaxy-wearable-container1">
          <span className="galaxy-wearable-container2">
            <p className="galaxy-wearable2">
              <span className="galaxy-wearable3">Galaxy Wearable</span>
              <span>에서 근처에 있는 기기를</span>
            </p>
            <p className="galaxy-wearable2">
              찾아 연결하고 기기 간 상대적 위치를 파악하도록
            </p>
            <p className="p5">허용하시겠습니까?</p>
          </span>
        </b>
        <div className="installationpermissionallowpoi">
          <img
            className="installationpermissionallowpoi-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/installationpermissionallowpointimagevector2.svg"
          />
          <img
            className="installationpermissionallowpoi-icon1"
            alt=""
            src="/DeviceGuide/SmartWatch/installationpermissionallowpointimagevector1.svg"
          />
        </div>
      </div>
      <div className="installationpermissioninfo1">
        <div className="div6">주변 기기를 찾을 때 사용됨</div>
        <div className="div7">근처 기기</div>
        <img
          className="installationpermissioninfopoin-icon2"
          alt=""
          src="/DeviceGuide/SmartWatch/installationpermissioninfopointimage.svg"
        />
        <div className="div8">필수 권한</div>
      </div>
      <b className="galaxy-wearable-container3">
        <p className="p5">Galaxy Wearable의</p>
        <p className="p5">원활한 사용을 위한 접근</p>
        <p className="p5">권한 안내</p>
      </b>
      <div className="installationpermissionlogo1">
        <div className="installationpermissionlogoelli4" />
        <div className="installationpermissionlogoelli5" />
        <div className="installationpermissionlogoelli6" />
        <div className="installationpermissionlogoelli7" />
      </div>
    </div>
  );
};

export default InstallationPermissionB;
