import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./InstallationPermissionA.css";

const InstallationPermissionA = () => {
  const navigate = useNavigate();

  const onInstallationPermissionButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/installationpermissionb-09");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("설치가 완료될 때까지 \n 기다려주세요.", "[계속] 버튼을 \n 눌러주세요.", "[허용]이라는 문자를 \n 선택해주세요.")},[])

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
