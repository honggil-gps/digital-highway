import { useCallback } from "react";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import { useNavigate } from "react-router-dom";
import "./GiftCard.css";

const GiftCard = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/InputBarcode_10");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/SelectPayment_06");
  }, [navigate]);

  return (
    <div className="giftcard-09">
      <Reader />
      <main className="monitor9">
        <h3 className="h31">
          <p className="p9">모바일 상품권 바코드를</p>
          <p className="p9">스캔해주세요</p>
        </h3>
        <img
          className="material-symbolsphone-iphone-icon"
          alt=""
          src="/DeviceGuide/Kiosc/barcode2.png"
        />
        <button className="button4" onClick={onButtonClick}>
          <img className="child2" alt="" src="/DeviceGuide/Kiosc/rectangle-231.svg" />
          <div className="div6">번호 수기 입력</div>
        </button>
        <button className="button5" onClick={onButton1Click}>
          <img className="child2" alt="" src="/DeviceGuide/Kiosc/rectangle-231.svg" />
          <div className="div7">이전</div>
        </button>
      </main>
      <img className="icon3" alt="" src="/DeviceGuide/Kiosc/box2.png" />
    </div>
  );
};

export default GiftCard;
