import { useCallback,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BluetoothConnection.css";

const BluetoothConnection = () => {
  const navigate = useNavigate();

  const onBluetoothWatchConnectionButton1Click = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/lodingpagea-07");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("연결 가능한 기기의 \n Galaxy watch를 선택해주세요.", "'새 기기를 찾았습니다'라는 \n 문구의 [연결]을 눌러주세요.", "설치가 완료될 때까지 \n 기다려주세요.")},[])

  return (
    <div className="bluetoothconnection-06">
      <div className="bluetoothwatchconnection">
        <div className="bluetoothwatchconnectionbutton">
          <button
            className="bluetoothwatchconnectionbutton1"
            onClick={onBluetoothWatchConnectionButton1Click}
          >
            <b className="b54">연결</b>
          </button>
          <button className="bluetoothwatchconnectionbutton2">
            <b className="b54">닫기</b>
          </button>
        </div>
        <b className="b56">새 기기를 찾았습니다.</b>
        <img
          className="watch5conncetionimage-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/watch5conncetionimage@2x.png"
        />
        <b className="galaxy-watch5-pro3">Galaxy Watch5 Pro (CTRY)</b>
      </div>
      <div className="bluetoothdeviceselect1">
        <div className="availabledevice1">
          <button className="availabledeviceinfo1">
            <img
              className="btdevicesettingimage-icon2"
              alt=""
              src="/DeviceGuide/SmartWatch/btdevicesettingimage.svg"
            />
            <b className="galaxy-watch5-pro4">Galaxy Watch5 Pro (CTRY)</b>
            <img
              className="bluetoothdevicewatchimage-icon1"
              alt=""
              src="/DeviceGuide/SmartWatch/bluetoothdevicewatchimage.svg"
            />
          </button>
          <b className="b57">연결 가능한 기기</b>
        </div>
        <div className="registereddevice1">
          <button className="availabledeviceinfo1">
            <img
              className="btdevicesettingimage-icon2"
              alt=""
              src="/DeviceGuide/SmartWatch/btdevicesettingimage.svg"
            />
            <b className="galaxy-watch5-pro4">Galaxy Buds Live (FAFF)</b>
            <img
              className="bluetoothdeviceheadsetimage-icon1"
              alt=""
              src="/DeviceGuide/SmartWatch/bluetoothdeviceheadsetimage.svg"
            />
          </button>
          <b className="b57">등록된 기기</b>
        </div>
      </div>
      <div className="div10">
        <p className="p53">
          연결하려는 기기가 등록 모드로 설정되었는지 확인하세요.
        </p>
        <p className="p54">주변 기기에서 내 휴대전화를 검색할 수 있습니다.</p>
      </div>
      <button className="bluetoothonswtich1">
        <div className="bluetoothonswtichon1">
          <div className="bluetoothonswtichonrectangle1" />
          <div className="bluetoothonswtichonellipse1" />
        </div>
        <b className="watchb59">{`사용 중 `}</b>
      </button>
      <div className="bluetoothtitlebutton1">
        <button className="bluetoothstopbutton1">
          <img
            className="vector-icon1"
            alt=""
            src="/DeviceGuide/SmartWatch/vector.svg"
          />
        </button>
        <button className="bluetoothmorebutton1">
          <b className="watchb60">중지</b>
        </button>
      </div>
      <div className="bluetoothonttitle1">
        <b className="watchb61">블루투스</b>
        <button className="bluetoothonttitlebackbutton1">
          <img
            className="bluetoothonttitlebackbuttonvec-icon1"
            alt=""
            src="/DeviceGuide/SmartWatch/bluetoothonttitlebackbuttonvector.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default BluetoothConnection;
