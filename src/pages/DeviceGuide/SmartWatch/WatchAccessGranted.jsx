import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WatchAccessGranted.css";

const WatchAccessGranted = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/lodingpageb-13");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("스마트워치에 나타난 숫자와 \n 화면의 숫자가 일치하는지 비교 후 \n [확인]을 눌러주세요.",  "[허용]을 눌러주세요.", "다운로드가 완료될 때까지 \n 기다려주세요.")},[])

  return (
    <div className="watchaccessgranted-12">
      <div className="watchaccessgrantedbutton">
        <button className="watchaccessgrantedbuttonb">
          <b className="WAGb11">확인</b>
        </button>
        <button className="watchaccessgrantedbuttona">
          <b className="WAGb12">취소</b>
        </button>
      </div>
      <div className="watchaccessgrantedmain">
        <div className="watchaccessgrantedmainbutton">
          <button className="WAGbutton3" onClick={onButtonClick}>
            허용
          </button>
          <button className="WAGbutton4">허용안함</button>
        </div>
        <div className="watchaccessgrantedlist">
          <div className="grantedlistdropbutton">
            <img
              className="grantedlistdropbuttonimage-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/grantedlistdropbuttonimage.svg"
            />
            <img
              className="grantedlistdropbuttonimage-icon1"
              alt=""
              src="/DeviceGuide/SmartWatch/grantedlistdropbuttonimage.svg"
            />
            <img
              className="grantedlistdropbuttonimage-icon2"
              alt=""
              src="/DeviceGuide/SmartWatch/grantedlistdropbuttonimage.svg"
            />
            <img
              className="grantedlistdropbuttonimage-icon3"
              alt=""
              src="/DeviceGuide/SmartWatch/grantedlistdropbuttonimage.svg"
            />
            <img
              className="grantedlistdropbuttonimage-icon4"
              alt=""
              src="/DeviceGuide/SmartWatch/grantedlistdropbuttonimage.svg"
            />
          </div>
          <div className="grantedlist5">
            <b className="sms">연락처</b>
            <img
              className="grantedlist5vector-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/grantedlist5vector.svg"
            />
          </div>
          <div className="grantedlist4">
            <b className="sms">SMS</b>
            <img
              className="grantedlist5vector-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/grantedlist4vector.svg"
            />
          </div>
          <div className="grantedlist3">
            <b className="sms">통화 기록</b>
            <img
              className="grantedlist5vector-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/grantedlist3vector.svg"
            />
          </div>
          <div className="grantedlist2">
            <b className="b15">통화</b>
            <img
              className="grantedlist5vector-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/grantedlist2vector.svg"
            />
          </div>
          <div className="grantedlist1">
            <b className="b15">알림</b>
            <img
              className="grantedlist5vector-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/grantedlist1vector.svg"
            />
          </div>
        </div>
        <b className="b17">
          <p className="galaxy-wearable-galaxy">{`이 앱이 정보(예:발신자 이름)를 동기화하고 `}</p>
          <p className="galaxy-wearable-galaxy">
            스마트폰에서 이러한 권한에 액세스할 수 있게 됩니다.
          </p>
        </b>
        <div className="galaxy-wearable-galaxy-container">
          <span className="galaxy-wearable-galaxy-container1">
            <p className="galaxy-wearable-galaxy">
              <b>Galaxy Wearable에서 Galaxy</b>
            </p>
            <p className="galaxy-wearable-galaxy">
              <b>Watch5 (CTAY)</b>
              <span className="span2">에 액세스하도록</span>
            </p>
            <p className="galaxy-wearable-galaxy">허용하시겠습니까?</p>
          </span>
        </div>
        <div className="watchaccessgrantedlogomini">
          <img
            className="watchaccessgrantedlogominivect-icon"
            alt=""
            src="/DeviceGuide/SmartWatch/watchaccessgrantedlogominivector.svg"
          />
        </div>
      </div>
      <div className="watchaccessgrantedlogo">
        <img
          className="watchaccessgrantedlogovector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/matchingnumberwatchlogovector.svg"
        />
      </div>
    </div>
  );
};

export default WatchAccessGranted;
