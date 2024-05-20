import { useCallback } from "react";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import { useNavigate } from "react-router-dom";
import "./SelectPayment.css";

const SelectPayment = () => {
  const navigate = useNavigate();

  const onLinkClick = useCallback(() => {
    navigate("/Card_07");
  }, [navigate]);

  const onLink1Click = useCallback(() => {
    navigate("/GiftCard_09");
  }, [navigate]);

  return (
    <div className="selectpayment-06">
      <Reader />
      <main className="monitor6">
        <a className="a" onClick={onLinkClick}>
          <div className="inner" />
          <div className="div2">신용카드</div>
          <img
            className="icon-parkbank-card"
            alt=""
            src="/DeviceGuide/Kiosc/card1.png"
          />
        </a>
        <a className="a1" onClick={onLink1Click}>
          <div className="inner" />
          <div className="div3">모바일 상품권</div>
          <img className="phbarcode-icon" alt="" src="/DeviceGuide/Kiosc/barcode.png" />
        </a>
        <p className="p6">결제수단을 선택해주세요</p>
      </main>
    </div>
  );
};

export default SelectPayment;
