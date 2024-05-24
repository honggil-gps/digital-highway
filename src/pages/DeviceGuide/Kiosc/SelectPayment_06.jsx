import { useCallback } from "react";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import { useNavigate } from "react-router-dom";
import "./SelectPayment.css";

const SelectPayment = () => {
  const navigate = useNavigate();

  const onLinkClick = useCallback(() => {
    navigate("/DeviceGuide/Kiosc/Card_07");
  }, [navigate]);

  const onLink1Click = useCallback(() => {
    navigate("/DeviceGuide/Kiosc/GiftCard_09");
  }, [navigate]);

  return (
    <div className="kiosc_selectpayment-06">
      <Reader />
      <main className="kiosc_monitor6">
        <a className="kiosc_a" onClick={onLinkClick}>
          <div className="kiosc_inner" />
          <div className="kiosc_div2">신용카드</div>
          <img
            className="kiosc_icon-parkbank-card"
            alt=""
            src="/DeviceGuide/Kiosc/card1.png"
          />
        </a>
        <a className="kiosc_a1" onClick={onLink1Click}>
          <div className="kiosc_inner" />
          <div className="kiosc_div3">모바일 상품권</div>
          <img className="kiosc_phbarcode-icon" alt="" src="/DeviceGuide/Kiosc/barcode.png" />
        </a>
        <p className="kiosc_p6">결제수단을 선택해주세요</p>
      </main>
    </div>
  );
};

export default SelectPayment;
