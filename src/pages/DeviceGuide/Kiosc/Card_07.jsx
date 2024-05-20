import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import axios from "axios";

const Card = () => {
  const navigate = useNavigate();

  const onCardreaderImageClick = useCallback(async() => {
    try{
      await axios.delete('http://localhost:3000/devices/kiosc_03',{data:{userID:"test"}});
      navigate("/Finish_08");
    }catch(err){
      console.log("주문실패함",err)
    }
  }, [navigate]);

  return (
    <div className="card-07">
      <Reader />
      <img className="icon9" alt="" src="/DeviceGuide/Kiosc/box1.png" onClick={onCardreaderImageClick}/>
      <main className="monitor7">
        <p className="p31">
          <span className="span11">
            카드를 화살표 방향으로 투입구에 넣어주세요
          </span>
          <span className="span11">결제 오류시 카드를 긁어주세요</span>
        </p>
        <div className="ic">
          <img className="ic-child" alt="" src="/DeviceGuide/Kiosc/rectangle-25.svg" />
          <p className="ic1">IC신용/체크카드 사용시</p>
        </div>
        <img className="cardreader-icon1" alt="" src="/DeviceGuide/Kiosc/cardreader1.png" />
        <img
          className="icon-parkbank-card1"
          alt=""
          src="/DeviceGuide/Kiosc/card2.png"
        />
        <img
          className="entypoarrow-up-icon"
          alt=""
          src="/DeviceGuide/Kiosc/arrow.png"
        />
        <h1 className="w1">W</h1>
      </main>
    </div>
  );
};

export default Card;
