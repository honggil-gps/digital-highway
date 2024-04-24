import { useCallback } from "react";
import CreditCard from "../components/CreditCard";
import { useNavigate } from "react-router-dom";
import "./Frame2.css";

const Frame2 = () => {
  const navigate = useNavigate();

  const onDiv1Click = useCallback(() => {
    navigate("/cardadd");
  }, [navigate]);

  return (
    <div className="paymentmethod">
      <b className="b2">결제 수단 관리</b>
      <div className="frame2">
        <div className="div4">
          <CreditCard />
          <b className="t">키키오 T 포인트</b>
        </div>
        <div className="div5" onClick={onDiv1Click}>
          <CreditCard />
          <b className="t">신용/체크카드</b>
        </div>
        <div className="div6">
          <CreditCard />
          <b className="t">휴대폰</b>
        </div>
        <div className="div4">
          <CreditCard />
          <b className="t">해외발급카드</b>
        </div>
        <div className="div4">
          <CreditCard />
          <b className="t">Paypal</b>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
