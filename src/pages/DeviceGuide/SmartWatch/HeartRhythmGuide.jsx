import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeartRhythmGuide.css";

const HeartRhythmGuide = () => {
  const navigate = useNavigate();

  const onHeartRhythmGuideButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/lodingpaged-23");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("긴급상황안내 설명입니다. \n [다음]버튼을 눌러주세요.", "심박수 관리 설명입니다. \n [다음]버튼을 눌러주세요.", "다운로드가 완료될 때까지 \n 기다려주세요.")},[])

  return (
    <div className="heartrhythmguide-22">
      <button
        className="heartrhythmguidebutton"
        onClick={onHeartRhythmGuideButtonClick}
      >
        <b className="b74">다음</b>
      </button>
      <b className="b75">
        <p className="p63">
          워치가 1시간 동안 심방세동의 가능성이 있는 불규칙 심장 리듬을
          감지하면, 워치와 휴대전화에서 알림이 제공됩니다.
        </p>
        <p className="p64">
          {" "}
          삼성 헬스 모니터 앱을 휴대전화에 설치하고 심장이 불규칙적으로 될 때
          알림을 받으세요.
        </p>
      </b>
      <img
        className="heartrhythmguidewatchimage-icon"
        alt=""
        src="/DeviceGuide/SmartWatch/-heartrhythmguidewatchimage@2x.png"
      />
      <b className="b76">
        <span className="txt2">
          <p className="p64">불규칙 심장 리듬이</p>
          <p className="p64">감지되면 알림 받기</p>
        </span>
      </b>
      <img
        className="heartrhythmguidelogoimage-icon"
        alt=""
        src="/DeviceGuide/SmartWatch/-heartrhythmguidelogoimage@2x.png"
      />
    </div>
  );
};

export default HeartRhythmGuide;
