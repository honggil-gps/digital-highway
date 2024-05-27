import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentMethod_03.css";

const Frame2 = () => {
  const navigate = useNavigate();

  const onCreditCardClick = useCallback(() => {
    navigate("/maincontents/cardadd");
  }, [navigate]);

  return (
    <div className="kikio-paymentmethod-03">
      <b className="kikio-b2">결제 수단 관리</b>
      <div className="kikio-paymentmethodbutton">
        <div className="kikio-kikiopoint">
          <div className="kikio-div4">
            <div className="kikio-item" />
            <img
              className="kikio-chevron-down-icon"
              alt=""
              src="/appguide/kakaotaxi/group-1.svg"
            />
          </div>
          <b className="kikio-t">키키오 T 포인트</b>
        </div>
        <div className="kikio-creditcard" onClick={onCreditCardClick}>
          <div className="kikio-div4">
            <div className="kikio-item" />
            <img
              className="kikio-chevron-down-icon"
              alt=""
              src="/appguide/kakaotaxi/group-1.svg"
            />
          </div>
          <b className="kikio-t">신용/체크카드</b>
        </div>
        <div className="kikio-cellphone">
          <div className="kikio-div4">
            <div className="kikio-item" />
            <img
              className="kikio-chevron-down-icon"
              alt=""
              src="/appguide/kakaotaxi/group-1.svg"
            />
          </div>
          <b className="kikio-t">휴대폰</b>
        </div>
        <div className="kikio-kikiopoint">
          <div className="kikio-div4">
            <div className="kikio-item" />
            <img
              className="kikio-chevron-down-icon"
              alt=""
              src="/appguide/kakaotaxi/group-1.svg"
            />
          </div>
          <b className="kikio-t">해외발급카드</b>
        </div>
        <div className="kikio-kikiopoint">
          <div className="kikio-div4">
            <div className="kikio-item" />
            <img
              className="kikio-chevron-down-icon"
              alt=""
              src="/appguide/kakaotaxi/group-1.svg"
            />
          </div>
          <b className="kikio-t">Paypal</b>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
