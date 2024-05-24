import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainSettings.css";

const MainSettings = () => {
  const navigate = useNavigate();

  const onMainSettingsConnectionButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/connectionsettings-03");
  }, [navigate]);

  return (
    <div className="mainsettings-02">
      <div className="mainsettingsd">
        <button className="mainsettingsoundbutton">
          <b className="b37">
            <p className="p43">소리 및 진동</p>
            <p className="quick-sharesamsung-dexandroi">소리 모드ㆍ벨소리</p>
          </b>
          <img
            className="mainsettingsoundimage-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/mainsettingsoundimage@2x.png"
          />
        </button>
        <div className="mainsettingsdline" />
        <button className="mainsettingmodebutton">
          <b className="quick-sharesamsung-dexandroi-container">
            <p className="p43">모드 및 루틴</p>
            <p className="quick-sharesamsung-dexandroi">모드ㆍ루틴</p>
          </b>
          <img
            className="mainsettingsoundimage-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/mainsettingmodeimage@2x.png"
          />
        </button>
      </div>
      <div className="mainsettingsc">
        <button className="mainsettingsoundbutton">
          <b className="quick-sharesamsung-dexandroi-container">
            <p className="p43">기기 간 연결</p>
            <p className="quick-sharesamsung-dexandroi">
              Quick ShareㆍSamsung DexㆍAndroid Auto
            </p>
          </b>
          <img
            className="mainsettingsoundimage-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/mainsettingsshareimage@2x.png"
          />
        </button>
        <div className="mainsettingsdline" />
        <button
          className="mainsettingsconnectionbutton"
          onClick={onMainSettingsConnectionButtonClick}
        >
          <b className="quick-sharesamsung-dexandroi-container">
            <p className="p43">연결</p>
            <p className="quick-sharesamsung-dexandroi">
              WI-FIㆍ블루투스ㆍSIM관리자
            </p>
          </b>
          <img
            className="mainsettingsoundimage-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/mainsettingwifiimage@2x.png"
          />
        </button>
      </div>
      <div className="mainsettingsb">
        <button className="button7">
          <p className="p43">핫스팟 자동 연결</p>
          <p className="quick-sharesamsung-dexandroi">추천</p>
        </button>
        <img
          className="mainsettingsbulbimage-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/mainsettingsbulbimage.svg"
        />
      </div>
      <div className="mainsettingsa">
        <button className="button8">
          <p className="p43">홍길동</p>
          <p className="p52">삼성 계정</p>
        </button>
      </div>
      <button className="mainsettingssearchbutton">
        <img
          className="mainsettingssearchbuttonvector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/mainsettingssearchbuttonvector.svg"
        />
      </button>
      <div className="mainsettingsttitletext">
        <b className="b39">설정</b>
      </div>
    </div>
  );
};

export default MainSettings;
