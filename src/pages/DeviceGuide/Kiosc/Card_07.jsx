import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import axios from "axios";

const Card = () => {
  const navigate = useNavigate();

  const onCardreaderImageClick = useCallback(async () => {
    try {
      await axios.delete('http://localhost:4000/devices/kiosc_03', {withCredentials:true});
      // await axios.delete('http://localhost:4000/devices/kiosc_03', { data: { userID: "test" } });
      navigate("/DeviceGuide/Kiosc/Finish_08");
    } catch (err) {
      console.log("주문실패함", err)
    }
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("카드결제를 하시려면 \n [신용카드]를, \n 기프티콘이나 금액권을 \n 사용하시려면 [모바일상품권]을 \n 선택해주세요.", "결제할 카드를 카드리더기 \n 투입구에 넣어주세요. \n 결제 오류 시 카드를 긁어주세요. \n 여기서는 카드리더기를 \n 클릭하여 넘어갑니다.", "주문이 완료되었습니다. \n 출력된 주문번호표를 가지고 \n 음식이 나올 때까지 기다려주세요.")},[])
  
  
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
