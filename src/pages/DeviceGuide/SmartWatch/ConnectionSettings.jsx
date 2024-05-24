// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ConnectionSettings.css";

// const ConnectionSettings = () => {
//   const navigate = useNavigate();

//   const onBluetoothButtonClick = useCallback(() => {
//     navigate("/bluetoothoff-04");
//   }, [navigate]);

//   return (
//     <div className="connectionsettings-03">
//       <div className="connectionsettingsd">
//         <button className="othersetbutton">
//           <b className="sim">기타 연결 설정</b>
//         </button>
//         <button className="roamingbutton">
//           <b className="sim">해외로밍</b>
//         </button>
//       </div>
//       <div className="connectionsettingsc">
//         <button className="hotspotbutton">
//           <b className="sim">모바일 핫스팟 및 테더링</b>
//         </button>
//         <button className="databutton">
//           <b className="sim">데이터 사용</b>
//         </button>
//         <button className="networkbutton">
//           <b className="sim">모바일 네트워크</b>
//         </button>
//         <button className="roamingbutton">
//           <b className="sim">SIM 관리자</b>
//         </button>
//       </div>
//       <div className="connectionsettingsb">
//         <div className="switchoff">
//           <div className="switchoffrectangle" />
//           <div className="switchoffellipse" />
//         </div>
//         <div className="connectionsettingsline" />
//         <button className="button9">비행기 탑승 모드</button>
//       </div>
//       <div className="connectionsettingsa">
//         <button className="uwbbutton">
//           <div className="switchon">
//             <div className="switchonrectangle" />
//             <div className="switchonellipse" />
//           </div>
//           <div className="connectionsettingsline1" />
//           <b className="uwb">초광대역 (UWB)</b>
//         </button>
//         <button className="nfcbutton">
//           <div className="switchon">
//             <div className="switchoffrectangle" />
//             <div className="switchoffellipse" />
//           </div>
//           <div className="connectionsettingsline1" />
//           <b className="uwb">NFC 및 비접촉 결제</b>
//         </button>
//         <button className="bluetoothbutton" onClick={onBluetoothButtonClick}>
//           <div className="switchon">
//             <div className="switchoffrectangle" />
//             <div className="switchoffellipse" />
//           </div>
//           <div className="connectionsettingsline1" />
//           <b className="uwb">블루투스</b>
//         </button>
//         <button className="wifibutton">
//           <div className="switchon">
//             <div className="switchoffrectangle" />
//             <div className="switchoffellipse" />
//           </div>
//           <div className="connectionsettingsline1" />
//           <b className="uwb">Wi-Fi</b>
//         </button>
//       </div>
//       <button className="settingsheaderbackbuttonsearch">
//         <img
//           className="settingsheaderbackbuttonsearch-icon"
//           alt=""
//           src="/DeviceGuide/SmartWatch/mainsettingssearchbuttonvector.svg"
//         />
//       </button>
//       <div className="connectionsettingsheader">
//         <b className="b46">연결</b>
//         <button className="settingsheaderbackbutton">
//           <img
//             className="settingsheaderbackbuttonvector-icon"
//             alt=""
//             src="/DeviceGuide/SmartWatch/settingsheaderbackbuttonvector.svg"
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ConnectionSettings;



import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ConnectionSettings.css";

const ConnectionSettings = () => {
  const navigate = useNavigate();

  const onBluetoothButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/bluetoothoff-04");
  }, [navigate]);

  return (
    <div className="connectionsettings-03">
      <div className="connectionsettingsd">
        <button className="othersetbutton">
          <b className="sim">기타 연결 설정</b>
        </button>
        <button className="roamingbutton">
          <b className="sim">해외로밍</b>
        </button>
      </div>
      <div className="connectionsettingsc">
        <button className="hotspotbutton">
          <b className="sim">모바일 핫스팟 및 테더링</b>
        </button>
        <button className="databutton">
          <b className="sim">데이터 사용</b>
        </button>
        <button className="networkbutton">
          <b className="sim">모바일 네트워크</b>
        </button>
        <button className="roamingbutton">
          <b className="sim">SIM 관리자</b>
        </button>
      </div>
      <div className="connectionsettingsb">
        <div className="switchoff">
          <div className="switchoffrectangle" />
          <div className="switchoffellipse" />
        </div>
        <div className="connectionsettingsline" />
        <button className="button9">비행기 탑승 모드</button>
      </div>
      <div className="connectionsettingsa">
        <button className="uwbbutton">
          <div className="switchon">
            <div className="switchonrectangle" />
            <div className="switchonellipse" />
          </div>
          <div className="connectionsettingsline1" />
          <b className="uwb">초광대역 (UWB)</b>
        </button>
        <button className="nfcbutton">
          <div className="switchon">
            <div className="switchoffrectangle" />
            <div className="switchoffellipse" />
          </div>
          <div className="connectionsettingsline1" />
          <b className="uwb">NFC 및 비접촉 결제</b>
        </button>
        <button className="bluetoothbutton" onClick={onBluetoothButtonClick}>
          <div className="switchon">
            <div className="switchoffrectangle" />
            <div className="switchoffellipse" />
          </div>
          <div className="connectionsettingsline1" />
          <b className="uwb">블루투스</b>
        </button>
        <button className="wifibutton">
          <div className="switchon">
            <div className="switchoffrectangle" />
            <div className="switchoffellipse" />
          </div>
          <div className="connectionsettingsline1" />
          <b className="uwb">Wi-Fi</b>
        </button>
      </div>
      <button className="settingsheaderbackbuttonsearch">
        <img
          className="settingsheaderbackbuttonsearch-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/mainsettingssearchbuttonvector.svg"
        />
      </button>
      <div className="connectionsettingsheader">
        <b className="b46">연결</b>
        <button className="settingsheaderbackbutton">
          <img
            className="settingsheaderbackbuttonvector-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/settingsheaderbackbuttonvector.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default ConnectionSettings;
