import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./GoogleAgree.css";

const GoogleAgree = () => {
  const navigate = useNavigate();

  const onGoogleAgreeButtonBClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/lodingpagec-17");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("알림 허용의 '허용'을 눌러주세요.", "서비스 약관의 \n '확인'을 눌러주세요.", "다운로드가 완료될 때까지 \n 기다려주세요.")},[])

  return (
    <div className="googleagree-16">
      <div className="serviceagreementtext">
        <div className="serviceagreementtext2">
          <b className="google-container">
            <p className="google">
              <p className="google">{`위치
`}</p>
              <p className="google2">
                위치 정보 액세스 권한이 있는 앱 및 서비스가 웨어러블 기기의
                위치를 사용하도록 허용합니다. Google은 익명으로 위치 데이터를
                수집하고 이 데이터를 사용하여 위치 정확도 및 위치 기반 서비스를
                개선할 수 있습니다. 휴대전화의 위치가 사용 설정되어 있는 경우,
                웨어러블 기기가 휴대전화에 테더링되어 있으면 웨어러블 기기에서
                휴대전화의 위치를 사용할 수 있습니다.
              </p>
            </p>
            <p className="google2">
              {" "}
              Google 위치 서비스에서는 웨어러블 기기의 위치를 추정하는 데 GPS,
              Wi-Fi, 모바일 네트워크, 센서 등의 소스를 사용할 수 있습니다
            </p>
            <p className="wi-fi">
              {" "}
              웨어러블 기기 및/또는 이 앱에서 기본 위치 설정을사용 중지하여
              웨어러블 기기의 위치를 사용 중지할 수 있습니다. 또한 웨어러블
              기기의 위치 설정에서 위치에 Wi-Fi, 모바일 네트워크, 센서를
              사용하지 않도록 할 수도 있습니다. 웨어러블 기기 설정은 휴대전화의
              위치 설정과 별개이므로, 둘 중 한 쪽의 위치 설정을 사용
              중지하더라도 다른 한 쪽의 위치 설정에는 영향을 미치지 않습니다.
              자세한 내용은 여기에서 확인하세요
            </p>
          </b>
          <input
            className="googleagreecheckbox"
            checked={true}
            type="checkbox"
          />
        </div>
        <div className="serviceagreementtext1">
          <b className="google-container">
            <p className="google">사용 및 진단 보고서</p>
            <p className="google2">
              진단 및 기기 사용 데이터를 Google에 자동으로 전송하여 Wear OS
              개선에 참여해 주세요. 추가 웹 및 앱 활동이 사용 설정되어 있다면 이
              데이터가 Google 계정에 저장 될 수 있습니다.
            </p>
          </b>
          <input
            className="googleagreecheckbox"
            checked={true}
            type="checkbox"
          />
        </div>
      </div>
      <div className="googleagreebutton">
        <button
          className="googleagreebuttonb"
          onClick={onGoogleAgreeButtonBClick}
        >
          <b className="GAb32">확인</b>
        </button>
        <button className="googleagreebuttona">
          <b className="GAb32">취소</b>
        </button>
      </div>
      <b className="google-container2">
        <p className="google3">
          계속하면 Google의 서비스 약관, 위치 서비스 약관 및 아래 약관에
          동의하는 것으로 간주됩니다
        </p>
        <p className="wi-fi">
          참고: Google 개인정보처리방침에 이 서비스의 데이터 처리 방식이
          설명되어 있습니다
        </p>
      </b>
      <b className="GAb34">서비스 약관</b>
      <div className="googleagreelogo">
        <img
          className="googleagreelogovector5-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/googleagreelogovector5.svg"
        />
        <img
          className="googleagreelogovector4-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/googleagreelogovector4.svg"
        />
        <img
          className="googleagreelogovector3-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/googleagreelogovector3.svg"
        />
        <img
          className="googleagreelogovector2-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/googleagreelogovector2.svg"
        />
        <img
          className="googleagreelogovector1-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/googleagreelogovector1.svg"
        />
      </div>
    </div>
  );
};

export default GoogleAgree;
