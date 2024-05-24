import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BluetoothOff.css";

const BluetoothOff = () => {
  const navigate = useNavigate();

  const onBluetoothOffUseButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/bluetoothon-05");
  }, [navigate]);

  return (
    <div className="bluetoothoff-04">
      <div className="quick-share">
        블루투스를 켜면 주변 기기에 연결할 수 있고 Quick Share를 사용할 수
        있습니다.
      </div>
      <button
        className="bluetoothoffusebutton"
        onClick={onBluetoothOffUseButtonClick}
      >
        <b className="b35">사용 안 함</b>
        <div className="bluetoothoffuseswitch">
          <div className="bluetoothoffuseswitchrectangle" />
          <div className="bluetoothoffuseswitchellipse" />
        </div>
      </button>
      <button className="bluetoothoffmorebutton">
        <img
          className="bluetoothoffmorebuttonvector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/vector.svg"
        />
      </button>
      <div className="connectionbluetoothheader">
        <b className="b36">블루투스</b>
        <img
          className="bluetoothheaderbackbutton-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/bluetoothheaderbackbutton.svg"
        />
      </div>
    </div>
  );
};

export default BluetoothOff;
