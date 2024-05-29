import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BluetoothOff.css";

const BluetoothOff = () => {
  const navigate = useNavigate();

  const onBluetoothOffUseButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/bluetoothon-05");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("[블루투스]를 선택해주세요.", "사용안함 글자 오른쪽의 \n 버튼을 눌러주세요.", "연결 가능한 기기의 \n Galaxy watch를 선택해주세요.")},[])

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
