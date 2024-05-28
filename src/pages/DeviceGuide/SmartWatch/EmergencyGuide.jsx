import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./EmergencyGuide.css";

const EmergencyGuide = () => {
  const navigate = useNavigate();

  const onEmergencyGuideButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/-heartrhythmguide-22");
  }, [navigate]);

  return (
    <div className="emergencyguide-21">
      <button
        className="emergencyguidebutton"
        onClick={onEmergencyGuideButtonClick}
      >
        <b className="b71">다음</b>
      </button>
      <b className="b72">
        <p className="blank-line">
          도움이 필요할 때 워치 홈 버튼을 5회 누르면 긴급 서비스에 전화를 걸 수
          있습니다.
        </p>
        <p className="blank-line">
          낙상 시 긴급 서비스를 자동으로 연결하려면 낙상 감지 옵션도 켜세요.
        </p>
        <p className="blank-line">&nbsp;</p>
        <p className="p60">긴급 기능 사용에 필요한 워치 권한</p>
      </b>
      <img
        className="emergencyguideimage-icon"
        alt=""
        src="/DeviceGuide/SmartWatch/emergencyguideimage@2x.png"
      />
      <b className="b73">
        <span className="txt1">
          <p className="p61">긴급 상황 발생 시</p>
          <p className="p61">신속하게 도움 요청</p>
        </span>
      </b>
      <div className="emergencyguidelogo">
        <img
          className="emergencyguidelogovector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/emergencyguidelogovector.svg"
        />
        <b className="sos">SOS</b>
      </div>
    </div>
  );
};

export default EmergencyGuide;
