import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BluetoothOn.css";

const BluetoothOn = () => {
  const navigate = useNavigate();

  const onAvailableDeviceInfoClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/bluetoothconnection-06");
  }, [navigate]);

  return (
    <div className="bluetoothon-05">
      <div className="bluetoothdeviceselect">
        <div className="availabledevice">
          <button
            className="availabledeviceinfo"
            onClick={onAvailableDeviceInfoClick}
          >
            <img
              className="btdevicesettingimage-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/btdevicesettingimage.svg"
            />
            <b className="galaxy-watch5-pro">Galaxy Watch5 Pro (CTRY)</b>
            <img
              className="bluetoothdevicewatchimage-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/bluetoothdevicewatchimage.svg"
            />
          </button>
          <b className="b">연결 가능한 기기</b>
        </div>
        <div className="registereddevice">
          <button className="availabledeviceinfo">
            <img
              className="btdevicesettingimage-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/btdevicesettingimage.svg"
            />
            <b className="galaxy-watch5-pro">Galaxy Buds Live (FAFF)</b>
            <img
              className="bluetoothdeviceheadsetimage-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/bluetoothdeviceheadsetimage.svg"
            />
          </button>
          <b className="b">등록된 기기</b>
        </div>
      </div>
      <div className="div2">
        <p className="p">
          연결하려는 기기가 등록 모드로 설정되었는지 확인하세요.
        </p>
        <p className="p1">주변 기기에서 내 휴대전화를 검색할 수 있습니다.</p>
      </div>
      <div className="bluetoothonswtich">
        <div className="bluetoothonswtichon">
          <div className="bluetoothonswtichonrectangle" />
          <div className="bluetoothonswtichonellipse" />
        </div>
        <b className="b2">{`사용 중 `}</b>
      </div>
      <div className="bluetoothtitlebutton">
        <button className="bluetoothstopbutton">
          <img
            className="vector-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/vector.svg"
          />
        </button>
        <button className="bluetoothmorebutton">
          <b className="b3">중지</b>
        </button>
      </div>
      <div className="bluetoothonttitle">
        <b className="b4">블루투스</b>
        <button className="bluetoothonttitlebackbutton">
          <img
            className="bluetoothonttitlebackbuttonvec-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/bluetoothonttitlebackbuttonvector.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default BluetoothOn;
