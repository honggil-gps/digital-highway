import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BluetoothOn.css";

const BluetoothOn = () => {
  const navigate = useNavigate();

  const onAvailableDeviceInfoClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/bluetoothconnection-06");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("사용안함 글자 오른쪽의 \n 버튼을 눌러주세요.", "연결 가능한 기기의 \n Galaxy watch를 선택해주세요.", "'새 기기를 찾았습니다'라는 \n 문구의 [연결]을 눌러주세요.")},[])

  return (
    <div className="watch-bluetoothon-05">
      <div className="watch-bluetoothdeviceselect">
        <div className="watch-availabledevice">
          <button
            className="watch-availabledeviceinfo"
            onClick={onAvailableDeviceInfoClick}
          >
            <img
              className="watch-btdevicesettingimage-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/btdevicesettingimage.svg"
            />
            <b className="watch-galaxy-watch5-pro">Galaxy Watch5 Pro (CTRY)</b>
            <img
              className="watch-bluetoothdevicewatchimage-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/bluetoothdevicewatchimage.svg"
            />
          </button>
          <b className="watch-b">연결 가능한 기기</b>
        </div>
        <div className="watch-registereddevice">
          <button className="watch-availabledeviceinfo">
            <img
              className="watch-btdevicesettingimage-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/btdevicesettingimage.svg"
            />
            <b className="watch-galaxy-watch5-pro">Galaxy Buds Live (FAFF)</b>
            <img
              className="watch-bluetoothdeviceheadsetimage-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/bluetoothdeviceheadsetimage.svg"
            />
          </button>
          <b className="watch-b">등록된 기기</b>
        </div>
      </div>
      <div className="watch-div2">
        <p className="watch-p">
          연결하려는 기기가 등록 모드로 설정되었는지 확인하세요.
        </p>
        <p className="watch-p1">주변 기기에서 내 휴대전화를 검색할 수 있습니다.</p>
      </div>
      <div className="watch-bluetoothonswtich">
        <div className="watch-bluetoothonswtichon">
          <div className="watch-bluetoothonswtichonrectangle" />
          <div className="watch-bluetoothonswtichonellipse" />
        </div>
        <b className="watch-b2">{`사용 중 `}</b>
      </div>
      <div className="watch-bluetoothtitlebutton">
        <button className="watch-bluetoothstopbutton">
          <img
            className="watch-vector-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/vector.svg"
          />
        </button>
        <button className="watch-bluetoothmorebutton">
          <b className="watch-b3">중지</b>
        </button>
      </div>
      <div className="watch-bluetoothonttitle">
        <b className="watch-b4">블루투스</b>
        <button className="watch-bluetoothonttitlebackbutton">
          <img
            className="watch-bluetoothonttitlebackbuttonvec-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/bluetoothonttitlebackbuttonvector.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default BluetoothOn;
