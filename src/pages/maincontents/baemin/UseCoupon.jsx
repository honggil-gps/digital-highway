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
      <div className="div144">할인쿠폰</div>
      <img className="close-icon1" alt="" src="/close@2x.png" />
      <div className="usecoupon-child" />
      <div className="rectangle-parent20" onClick={onGroupContainerClick}>
        <div className="group-child17" />
        <div className="div145">사용하기</div>
      </div>
      <div className="usecoupon-item" />
      <div className="usecoupon-inner" />
      <div className="div146">등록</div>
      <div className="div147">
        <p className="p68">2,000원</p>
        <p className="p68">말왕족발 깜짝 할인</p>
      </div>
      <div className="div148">
        <p className="p68">7일 후 만료</p>
        <p className="p68">최소주문금액 : 30,000원</p>
      </div>
      <input className="usecoupon-child1" type="radio" />
    </div>
  );
};

export default UseCoupon;
