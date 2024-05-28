import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./UseAppSelect.css";

const UseAppSelect = () => {
  const navigate = useNavigate();

  const onUseAppSelectOkButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/backupinfo-20");
  }, [navigate]);

  return (
    <div className="useappselect-19">
      <b className="wi-fi-container">
        <p className="wi-fi2">{`앱은 시계가 충전 중이고 WI-FI에 연결되어 있을 때 `}</p>
        <p className="wi-fi2">설치됩니다.</p>
      </b>
      <div className="recommendedappsbox">
        <img
          className="recommendedappsimage-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/recommendedappsimage@2x.png"
        />
        <div className="installedappsboxline" />
        <input className="useappselectcheckbox" type="checkbox" />
        <b className="b65">시계용 추천 앱</b>
      </div>
      <div className="installedappsbox">
        <img
          className="installedappsimage-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/installedappsimage@2x.png"
        />
        <div className="installedappsboxline" />
        <input
          className="useappselectcheckbox"
          checked={true}
          type="checkbox"
        />
        <b className="b65">기기에 설치됨</b>
      </div>
      <b className="google-play">
        시계 사용을 시작하는 데 도움이 되는 몇 가지 앱을 추천해 드립니다. 일부는
        이 휴대전화 또는 다른 기기에 설치된 앱입니다. 휴대전화 또는 시계의
        Google Play에서 더 많은 앱을 찾아 설치 할 수 있습니다.
      </b>
      <b className="b67">시계에서 사용할 앱 선택</b>
      <div className="useappselectgoogleplaylogo">
        <img
          className="useappselectgoogleplaylogovect-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/useappselectgoogleplaylogovector4.svg"
        />
        <img
          className="useappselectgoogleplaylogovect-icon1"
          alt=""
          src="/DeviceGuide/SmartWatch/useappselectgoogleplaylogovector3.svg"
        />
        <img
          className="useappselectgoogleplaylogovect-icon2"
          alt=""
          src="/DeviceGuide/SmartWatch/useappselectgoogleplaylogovector2.svg"
        />
        <img
          className="useappselectgoogleplaylogovect-icon3"
          alt=""
          src="/DeviceGuide/SmartWatch/useappselectgoogleplaylogovector1.svg"
        />
      </div>
      <div className="useappselectbuttonset">
        <button
          className="useappselectokbutton"
          onClick={onUseAppSelectOkButtonClick}
        >
          <b className="UASb68">확인</b>
        </button>
        <button className="UASbutton12">건너뛰기</button>
      </div>
    </div>
  );
};

export default UseAppSelect;
