import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./InstallationPermissionB.css";

const InstallationPermissionB = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/installationpermissionc-10");
  }, [navigate]);

  return (
    <div className="WIPB-installationpermissionb-09">
      <div className="WIPB-installationpermissionallowbut">
        <button className="WIPB-button" onClick={onButtonClick}>
          허용
        </button>
        <button className="WIPB-button1">허용안함</button>
        <b className="WIPB-galaxy-wearable-container1">
          <span className="WIPB-galaxy-wearable-container2">
            <p className="WIPB-galaxy-wearable2">
              <span className="WIPB-galaxy-wearable3">Galaxy Wearable</span>
              <span>에서 근처에 있는 기기를</span>
            </p>
            <p className="WIPB-galaxy-wearable2">
              찾아 연결하고 기기 간 상대적 위치를 파악하도록
            </p>
            <p className="WIPB-p5">허용하시겠습니까?</p>
          </span>
        </b>
        <div className="WIPB-installationpermissionallowpoi">
          <img
            className="WIPB-installationpermissionallowpoi-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/installationpermissionallowpointimagevector2.svg"
          />
          <img
            className="WIPB-installationpermissionallowpoi-icon1"
            alt=""
            src="/DeviceGuide/SmartWatch/installationpermissionallowpointimagevector1.svg"
          />
        </div>
      </div>
      <div className="WIPB-installationpermissioninfo1">
        <div className="WIPB-div6">주변 기기를 찾을 때 사용됨</div>
        <div className="WIPB-div7">근처 기기</div>
        <img
          className="WIPB-installationpermissioninfopoin-icon2"
          alt=""
          src="/DeviceGuide/SmartWatch/installationpermissioninfopointimage.svg"
        />
        <div className="WIPB-div8">필수 권한</div>
      </div>
      <b className="WIPB-galaxy-wearable-container3">
        <p className="WIPB-p5">Galaxy Wearable의</p>
        <p className="WIPB-p5">원활한 사용을 위한 접근</p>
        <p className="WIPB-p5">권한 안내</p>
      </b>
      <div className="WIPB-installationpermissionlogo1">
        <div className="WIPB-installationpermissionlogoelli4" />
        <div className="WIPB-installationpermissionlogoelli5" />
        <div className="WIPB-installationpermissionlogoelli6" />
        <div className="WIPB-installationpermissionlogoelli7" />
      </div>
    </div>
  );
};

export default InstallationPermissionB;
