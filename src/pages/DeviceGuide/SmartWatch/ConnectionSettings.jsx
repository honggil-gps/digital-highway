import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ConnectionSettings.css";

const ConnectionSettings = () => {
  const navigate = useNavigate();

  const onBluetoothButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/bluetoothoff-04");
  }, [navigate]);

  return (
    <div className="watchconnectionsettings-03">
      <div className="watchconnectionsettingsd">
        <button className="watchothersetbutton">
          <b className="watchsim">기타 연결 설정</b>
        </button>
        <button className="watchroamingbutton">
          <b className="watchsim">해외로밍</b>
        </button>
      </div>
      <div className="watchconnectionsettingsc">
        <button className="watchhotspotbutton">
          <b className="watchsim">모바일 핫스팟 및 테더링</b>
        </button>
        <button className="watchdatabutton">
          <b className="watchsim">데이터 사용</b>
        </button>
        <button className="watchnetworkbutton">
          <b className="watchsim">모바일 네트워크</b>
        </button>
        <button className="watchroamingbutton">
          <b className="watchsim">SIM 관리자</b>
        </button>
      </div>
      <div className="watchconnectionsettingsb">
        <div className="watchswitchoff">
          <div className="watchswitchoffrectangle" />
          <div className="watchswitchoffellipse" />
        </div>
        <div className="watchconnectionsettingsline" />
        <button className="watchbutton9">비행기 탑승 모드</button>
      </div>
      <div className="watchconnectionsettingsa">
        <button className="watchuwbbutton">
          <div className="watchswitchon">
            <div className="watchswitchonrectangle" />
            <div className="watchswitchonellipse" />
          </div>
          <div className="watchconnectionsettingsline1" />
          <b className="watchuwb">초광대역 (UWB)</b>
        </button>
        <button className="watchnfcbutton">
          <div className="watchswitchon">
            <div className="watchswitchoffrectangle" />
            <div className="watchswitchoffellipse" />
          </div>
          <div className="watchconnectionsettingsline1" />
          <b className="watchuwb">NFC 및 비접촉 결제</b>
        </button>
        <button className="watchbluetoothbutton" onClick={onBluetoothButtonClick}>
          <div className="watchswitchon">
            <div className="watchswitchoffrectangle" />
            <div className="watchswitchoffellipse" />
          </div>
          <div className="watchconnectionsettingsline1" />
          <b className="watchuwb">블루투스</b>
        </button>
        <button className="watchwifibutton">
          <div className="watchswitchon">
            <div className="watchswitchoffrectangle" />
            <div className="watchswitchoffellipse" />
          </div>
          <div className="watchconnectionsettingsline1" />
          <b className="watchuwb">Wi-Fi</b>
        </button>
      </div>
      <button className="watchsettingsheaderbackbuttonsearch">
        <img
          className="watchsettingsheaderbackbuttonsearch-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/mainsettingssearchbuttonvector.svg"
        />
      </button>
      <div className="watchconnectionsettingsheader">
        <b className="watchb46">연결</b>
        <button className="watchsettingsheaderbackbutton">
          <img
            className="watchsettingsheaderbackbuttonvector-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/settingsheaderbackbuttonvector.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default ConnectionSettings;