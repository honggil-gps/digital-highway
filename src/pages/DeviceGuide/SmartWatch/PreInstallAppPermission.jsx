import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PreInstallAppPermission.css";

const PreInstallAppPermission = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/lodingpagee-25");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("다운로드가 완료될 때까지 \n 기다려주세요.", "앱 권한 동의사항입니다. \n [동의]를 눌러주세요.", "작업이 완료될 때까지 \n 기다려주세요.")},[])

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
        <button className="PAPButtonA">
          <b className="PAPb81">취소</b>
        </button>
        <button className="PAPButtonB" onClick={onFrameButton1Click}>
          <b className="PAPb82">동의</b>
        </button>
      </div>
    </div>
  );
};

export default PreInstallAppPermission;
