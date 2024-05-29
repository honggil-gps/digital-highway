import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SoftwareAgreeB.css";

const SoftwareAgreeB = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/googleagree-16");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("'모두 동의(선택)'을 체크 후 \n [계속]을 눌러주세요.", "알림 허용의 '허용'을 눌러주세요.", "서비스 약관의 \n '확인'을 눌러주세요.")},[])

  return (
    <div className="softwareagreeb-15">
      <div className="softwareagreebbutton">
        <b className="b26">계속</b>
      </div>
      <div className="allagreecheck1">
        <b className="b27">모두 동의 (선택)</b>
        <input className="agreeacheckbox6" checked={true} type="checkbox" />
      </div>
      <div className="SAB-softwareagreebcheckboxset">
        {/* <div className="agreeacheckboxcontent51">
          <input className="agreeacheckbox7" checked={true} type="checkbox" />
          <b className="galaxy-wearable-container10">
            <p className="galaxy-wearable16">
              Galaxy Wearable 및 관련 관리자 앱
            </p>
            <p className="galaxy-wearable16">자동 업데이트에 동의(선택)</p>
            <p className="p30">자세히 보기</p>
          </b>
        </div> */}
        <div className="agreeacheckboxcontent41">
          <input className="agreeacheckbox8" checked={true} type="checkbox" />
          <b className="galaxy-watch5-pro-container1">
            <p className="galaxy-wearable16">
              Galaxy Watch5 Pro 자동 업데이트에
            </p>
            <p className="galaxy-wearable16">동의(선택)</p>
            <p className="p32">자동 업데이트는 워치 설정에서 끌 수 있습니다</p>
            <p className="p30">자세히 보기</p>
          </b>
        </div>
        <div className="agreeacheckboxcontent31">
          <input className="agreeacheckbox8" checked={true} type="checkbox" />
          <b className="b28">
            <p className="galaxy-wearable16">진단 데이터 보내기 (선택)</p>
            <p className="p30">자세히 보기</p>
          </b>
        </div>
        <div className="agreeacheckboxcontent21">
          <input className="agreeacheckbox8" checked={true} type="checkbox" />
          <b className="b28">
            <p className="galaxy-wearable16">개인정보 수집 이용 동의서</p>
            <p className="p30">자세히 보기</p>
          </b>
        </div>
        <div className="agreeacheckboxcontent11">
          <input className="agreeacheckbox8" checked={true} type="checkbox" />
          <b className="galaxy-watch5-pro-container1">
            <p className="galaxy-wearable16">
              삼성 최종 사용자 라이선스 동의서
            </p>
            <p className="p30">자세히 보기</p>
          </b>
        </div>
      </div>
      <b className="SAB-galaxy-wearable-container11">
        <p className="galaxy-wearable17">
          <span className="galaxy-wearable18">
            <span className="galaxy-wearable19">Galaxy Wearable의 권한</span>
          </span>
          <span className="galaxy-wearable18">{` `}</span>
          <span className="span8">{`및 해당 권한이 어떻게 `}</span>
        </p>
        <p className="p40">
          <span className="span8">사용되는지 확인하세요.</span>
        </p>
      </b>
      <b className="SAB-b31">아래 항목에 동의</b>
      <div className="softwareagreelogo1">
        <img
          className="softwareagreelogovector-icon1"
          alt=""
          src="/DeviceGuide/SmartWatch/softwareagreelogovector.svg"
        />
      </div>
      <div className="softwareagreebselect">
        <div className="softwareagreebselectbutton">
          <button className="SAB-button5">허용안함</button>
          <button className="SAB-button6" onClick={onButton1Click}>
            허용
          </button>
        </div>
        <b className="galaxy-wearable-container12">
          <span className="galaxy-wearable-container13">
            <p className="galaxy-wearable20">
              <span className="galaxy-wearable18">Galaxy Wearable</span>
              <span>에서 알림을 보내도록</span>
            </p>
            <p className="p40">허용하시겠습니까?</p>
          </span>
        </b>
        <img
          className="softwareagreebselectvector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/softwareagreebselectvector.svg"
        />
      </div>
    </div>
  );
};

export default SoftwareAgreeB;
