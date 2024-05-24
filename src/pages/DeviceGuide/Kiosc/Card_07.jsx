import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import axios from "axios";

const Card = () => {
  const navigate = useNavigate();

  const onCardreaderImageClick = useCallback(async () => {
    try {
      await axios.delete('http://localhost:4000/devices/kiosc_03', { data: { userID: "test" } });
      navigate("/DeviceGuide/Kiosc/Finish_08");
    } catch (err) {
      console.log("주문실패함", err)
    }
  }, [navigate]);

  return (
    <div className="kiosc_card-07">
      <Reader />
      <img className="kiosc_icon9" alt="" src="/DeviceGuide/Kiosc/box1.png" onClick={onCardreaderImageClick} />
      <main className="kiosc_monitor7">
        <p className="kiosc_p31">
          <span className="kiosc_span11">
            카드를 화살표 방향으로 투입구에 넣어주세요
          </span>
          <span className="kiosc_span11">결제 오류시 카드를 긁어주세요</span>
        </p>
        <div className="kiosc_ic">
          <img className="kiosc_ic-child" alt="" src="/DeviceGuide/Kiosc/rectangle-25.svg" />
          <p className="kiosc_ic1">IC신용/체크카드 사용시</p>
        </div>
        <img className="kiosc_cardreader-icon1" alt="" src="/DeviceGuide/Kiosc/cardreader1.png" />
        <img
          className="kiosc_icon-parkbank-card1"
          alt=""
          src="/DeviceGuide/Kiosc/card2.png"
        />
        <img
          className="kiosc_entypoarrow-up-icon"
          alt=""
          src="/DeviceGuide/Kiosc/arrow.png"
        />
        <h1 className="kiosc_w1">W</h1>
      </main>
    </div>
  );
};

export default Card;
