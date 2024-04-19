import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./UseCoupon.css";

const UseCoupon = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/order3");
  }, [navigate]);

  return (
    <div className="usecoupon">
      <div className="div97">할인쿠폰</div>
      <img className="close-icon2" alt="" src="/close@2x.png" />
      <div className="usecoupon-child" />
      <div className="rectangle-parent20" onClick={onGroupContainerClick}>
        <div className="group-child12" />
        <div className="div98">사용하기</div>
      </div>
      <div className="usecoupon-item" />
      <div className="usecoupon-inner" />
      <div className="div99">등록</div>
      <div className="div100">
        <p className="p102">2,000원</p>
        <p className="p102">말왕족발 깜짝 할인</p>
      </div>
      <div className="div101">
        <p className="p102">7일 후 만료</p>
        <p className="p102">최소주문금액 : 30,000원</p>
      </div>
      <input className="usecoupon-child1" type="radio" />
    </div>
  );
};

export default UseCoupon;
