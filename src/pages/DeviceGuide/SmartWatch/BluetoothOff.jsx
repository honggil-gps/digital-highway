import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BluetoothOff.css";

const BluetoothOff = () => {
  const navigate = useNavigate();

  const onBluetoothOffUseButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/bluetoothon-05");
  }, [navigate]);

  return (
    <div className="watch-bluetoothoff-04">
      <div className="watch-quick-share">
        블루투스를 켜면 주변 기기에 연결할 수 있고 Quick Share를 사용할 수
        있습니다.
      </div>
      <button
        className="watch-bluetoothoffusebutton"
        onClick={onBluetoothOffUseButtonClick}
      >
        <b className="watch-b35">사용 안 함</b>
        <div className="watch-bluetoothoffuseswitch">
          <div className="watch-bluetoothoffuseswitchrectangle" />
          <div className="watch-bluetoothoffuseswitchellipse" />
        </div>
      </button>
      <button className="watch-bluetoothoffmorebutton">
        <img
          className="watch-bluetoothoffmorebuttonvector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/vector.svg"
        />
      </button>
      <div className="watch-connectionbluetoothheader">
        <b className="watch-b36">블루투스</b>
        <img
          className="watch-bluetoothheaderbackbutton-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/bluetoothheaderbackbutton.svg"
        />
      </div>
    </div>
  );
};

export default BluetoothOff;
