import { useCallback } from "react";
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
