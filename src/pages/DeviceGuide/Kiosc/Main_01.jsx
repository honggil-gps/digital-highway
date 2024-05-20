import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();

  const onMonitor1Click = useCallback(() => {
    navigate("/SelectPlace_02");
  }, [navigate]);

  return (
    <div className="main-01">
      <div className="monitor1" onClick={onMonitor1Click}>
        <img
          className="unsplasholjl3vflv2g-icon"
          alt=""
          src="/DeviceGuide/Kiosc/burgermain.png"
        />
        <div className="frame">
          <p className="burger">BURGER</p>
          <p className="p">주문하시려면 터치하세요</p>
          <p className="p1">
            <span className="span">카드결제 전용으로 현금 사용시</span>
            <span className="span">카운터를 이용해주세요</span>
          </p>
        </div>
      </div>
      <Reader />
    </div>
  );
};

export default Main;
