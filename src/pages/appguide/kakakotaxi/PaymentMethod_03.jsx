import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentMethod_03.css";

const Frame2 = () => {
  const navigate = useNavigate();

  const onCreditCardClick = useCallback(() => {
    navigate("/cardadd");
  }, [navigate]);

  return (
    <div className="paymentmethod-03">
      <b className="b2">결제 수단 관리</b>
      <div className="paymentmethodbutton">
        <div className="kikiopoint">
          <div className="div4">
            <div className="item" />
            <img
              className="chevron-down-icon"
              alt=""
              src="/appguide/kakaotaxi/group-1.svg"
            />
          </div>
          <b className="t">키키오 T 포인트</b>
        </div>
        <div className="creditcard" onClick={onCreditCardClick}>
          <div className="div4">
            <div className="item" />
            <img
              className="chevron-down-icon"
              alt=""
              src="/appguide/kakaotaxi/group-1.svg"
            />
          </div>
          <b className="t">신용/체크카드</b>
        </div>
        <div className="cellphone">
          <div className="div4">
            <div className="item" />
            <img
              className="chevron-down-icon"
              alt=""
              src="/appguide/kakaotaxi/group-1.svg"
            />
          </div>
          <b className="t">휴대폰</b>
        </div>
        <div className="kikiopoint">
          <div className="div4">
            <div className="item" />
            <img
              className="chevron-down-icon"
              alt=""
              src="/appguide/kakaotaxi/group-1.svg"
            />
          </div>
          <b className="t">해외발급카드</b>
        </div>
        <div className="kikiopoint">
          <div className="div4">
            <div className="item" />
            <img
              className="chevron-down-icon"
              alt=""
              src="/appguide/kakaotaxi/group-1.svg"
            />
          </div>
          <b className="t">Paypal</b>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
