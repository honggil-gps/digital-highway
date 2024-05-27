import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();

  const onMonitor1Click = useCallback(() => {
    navigate("/DeviceGuide/Kiosc/SelectPlace_02");
  }, [navigate]);

  function sendCaption(now ,next){
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, nextCaption: nextCaption}, "*");
  }
  sendCaption("키오스크 사용법을 배워봅시다 \n 주문하시려면 화면을 눌러주세요", "매장에서 드시고 가시려면 \n [매장에서 식사], \n 가져가시려면 [테이크아웃]을 \n 눌러주세요")

  return (
    <div className="kiosc_main-01">
      <div className="kiosc_monitor1" onClick={onMonitor1Click}>
        <img
          className="kiosc_unsplasholjl3vflv2g-icon"
          alt=""
          src="/DeviceGuide/Kiosc/burgermain.png"
        />
        <div className="kiosc_frame">
          <p className="kiosc_burger">BURGER</p>
          <p className="kiosc_p">주문하시려면 터치하세요</p>
          <p className="kiosc_p1">
            <span className="kiosc_span">카드결제 전용으로 현금 사용시</span>
            <span className="kiosc_span">카운터를 이용해주세요</span>
          </p>
        </div>
      </div>
      <Reader />
    </div>
  );
};

export default Main;
