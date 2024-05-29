import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainSettings.css";

const MainSettings = () => {
  const navigate = useNavigate();

  const onMainSettingsConnectionButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/connectionsettings-03");
  }, [navigate]);

  return (
    <div className="watchmainsettings-02">
      <div className="watchmainsettingsd">
        <button className="watchmainsettingsoundbutton">
          <b className="watchb37">
            <p className="watchp43">소리 및 진동</p>
            <p className="watchquick-sharesamsung-dexandroi">소리 모드ㆍ벨소리</p>
          </b>
          <img
            className="watchmainsettingsoundimage-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/mainsettingsoundimage@2x.png"
          />
        </button>
        <div className="watchmainsettingsdline" />
        <button className="watchmainsettingmodebutton">
          <b className="watchquick-sharesamsung-dexandroi-container">
            <p className="watchp43">모드 및 루틴</p>
            <p className="watchquick-sharesamsung-dexandroi">모드ㆍ루틴</p>
          </b>
          <img
            className="watchmainsettingsoundimage-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/mainsettingmodeimage@2x.png"
          />
        </button>
      </div>
      <div className="watchmainsettingsc">
        <button className="watchmainsettingsoundbutton">
          <b className="watchquick-sharesamsung-dexandroi-container">
            <p className="watchp43">기기 간 연결</p>
            <p className="watchquick-sharesamsung-dexandroi">
              Quick ShareㆍSamsung DexㆍAndroid Auto
            </p>
          </b>
          <img
            className="watchmainsettingsoundimage-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/mainsettingsshareimage@2x.png"
          />
        </button>
        <div className="watchmainsettingsdline" />
        <button
          className="watchmainsettingsconnectionbutton"
          onClick={onMainSettingsConnectionButtonClick}
        >
          <b className="watchquick-sharesamsung-dexandroi-container">
            <p className="watchp43">연결</p>
            <p className="watchquick-sharesamsung-dexandroi">
              WI-FIㆍ블루투스ㆍSIM관리자
            </p>
          </b>
          <img
            className="watchmainsettingsoundimage-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/mainsettingwifiimage@2x.png"
          />
        </button>
      </div>
      <div className="watchmainsettingsb">
        <button className="watchbutton7">
          <p className="watchp43">핫스팟 자동 연결</p>
          <p className="watchquick-sharesamsung-dexandroi">추천</p>
        </button>
        <img
          className="watchmainsettingsbulbimage-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/mainsettingsbulbimage.svg"
        />
      </div>
      <div className="watchmainsettingsa">
        <button className="watchbutton8">
          <p className="watchp43">홍길동</p>
          <p className="watchp52">삼성 계정</p>
        </button>
      </div>
      <button className="watchmainsettingssearchbutton">
        <img
          className="watchmainsettingssearchbuttonvector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/mainsettingssearchbuttonvector.svg"
        />
      </button>
      <div className="watchmainsettingsttitletext">
        <b className="watchb39">설정</b>
      </div>
    </div>
  );
};

export default MainSettings;