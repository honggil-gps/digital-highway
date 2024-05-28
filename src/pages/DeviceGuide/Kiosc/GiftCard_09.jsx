import { useCallback, useEffect } from "react";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import { useNavigate } from "react-router-dom";
import "./GiftCard.css";

const GiftCard = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/DeviceGuide/Kiosc/InputBarcode_10");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/DeviceGuide/Kiosc/SelectPayment_06");
  }, [navigate]);

  //해당 페이지에서 출력할 캡션 입력
  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("카드결제를 하시려면 \n [신용카드]를, \n 기프티콘이나 금액권을 \n 사용하시려면 [모바일상품권]을 \n 선택해주세요.", "사용하실 모바일 상품권의 \n 바코드를 인식시켜주세요. \n 저희는 인식이 안될 경우를 대비해 \n [번호수기입력]을 눌러보겠습니다.", "모바일 상품권의 바코드 아래 \n 적혀있는 번호를 입력해주세요.")},[])
  

  return (
    <div className="kiosc_giftcard-09">
      <Reader />
      <main className="kiosc_monitor9">
        <h3 className="kiosc_h31">
          <p className="kiosc_p9">모바일 상품권 바코드를</p>
          <p className="kiosc_p9">스캔해주세요</p>
        </h3>
        <img
          className="kiosc_material-symbolsphone-iphone-icon"
          alt=""
          src="/DeviceGuide/Kiosc/barcode2.png"
        />
        <button className="kiosc_button4" onClick={onButtonClick}>
          <img className="kiosc_child2" alt="" src="/DeviceGuide/Kiosc/rectangle-231.svg" />
          <div className="kiosc_div6">번호 수기 입력</div>
        </button>
        <button className="kiosc_button5" onClick={onButton1Click}>
          <img className="kiosc_child2" alt="" src="/DeviceGuide/Kiosc/rectangle-231.svg" />
          <div className="kiosc_div7">이전</div>
        </button>
      </main>
      <img className="kiosc_icon3" alt="" src="/DeviceGuide/Kiosc/box2.png" />
    </div>
  );
};

export default GiftCard;
