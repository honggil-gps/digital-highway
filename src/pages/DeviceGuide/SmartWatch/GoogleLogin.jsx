import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GoogleLogin.css";

const GoogleLogin = () => {
  const navigate = useNavigate();

  const onGoogleLoginButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/useappselect-19");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("다운로드가 완료될 때까지 \n 기다려주세요.", "Google 계정 로그인입니다. \n  [이름(으)로 로그인]버튼을 \n 눌러주세요.", "기본으로 설치될 어플입니다. \n 하단의 [확인]버튼을 눌러주세요.")},[])

  return (
    <div className="googlelogin-18">
      <button className="GLbutton10">건너뛰기</button>
      <button className="GLbutton11">다른 계정 선택</button>
      <button className="googleloginbutton" onClick={onGoogleLoginButtonClick}>
        <b className="b64">길동(으)로 로그인</b>
      </button>
      <div className="googleloginaccount">
        <b className="gildong1443gmailcom">
          <span className="gildong1443gmailcom-txt">
            <p className="p55">홍길동</p>
            <p className="gildong1443gmailcom1">gildong1443@gmail.com</p>
          </span>
        </b>
        <div className="googleloginaccountprofileimage">
          <div className="googleloginaccountprofileimage1" />
          <div className="div12">길동</div>
        </div>
      </div>
      <b className="google5">
        시계에서 Google 계정에 로그인하여 Google 앱을 사용하고, 새 앱을
        다운로드하고, 내기기 찾기를 사용하세요.
      </b>
      <b className="google6">Google 계정에 로그인</b>
      <div className="googleloginwatchlogo">
        <img
          className="googleloginwatchlogovector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/googleloginwatchlogovector.svg"
        />
      </div>
    </div>
  );
};

export default GoogleLogin;
