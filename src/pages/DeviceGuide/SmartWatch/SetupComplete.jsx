import { useEffect } from "react";
import "./SetupComplete.css";
import { useNavigate } from "react-router-dom";


const SetupComplete = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const timer = setTimeout(()=>{
      navigate("/DeviceGuide/SmartWatch/");
    }, 3000);
    return ()=> clearTimeout(timer);
  },[navigate]);

  function sendCaption(prev, now){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption}, "*");
  }
  useEffect(()=>{sendCaption("작업이 완료될 때까지 \n 기다려주세요.", "스마트워치 연동이 \n 완료되었습니다.")},[])
  
  return (
    <div className="setupcomplete-26">
      <img
        className="setupcompleteimage-icon"
        alt=""
        src="/DeviceGuide/SmartWatch/setupcompleteimage@2x.png"
      />
      <b className="b87">
        <span className="txt3">
          <p className="p73">{`이제 워치를 사용해 `}</p>
          <p className="p73">보세요!</p>
        </span>
      </b>
    </div>
  );
};

export default SetupComplete;
