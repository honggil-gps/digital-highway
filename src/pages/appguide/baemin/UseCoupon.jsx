import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./UseCoupon.css";

const UseCoupon = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/order3");
  }, [navigate]);

  return (
    <div className="baeman-usecoupon">
      <div className="baeman-div135">할인쿠폰</div>
      <img
        className="baeman-close-icon2"
        alt=""
        src="/appguide/baemin/close1@2x.png"
      />
      <div className="baeman-usecoupon-child" />
      <div className="baeman-rectangle-parent36" onClick={onGroupContainerClick}>
        <div className="baeman-group-child22" />
        <div className="baeman-div136">사용하기</div>
      </div>
      <div className="baeman-usecoupon-item" />
      <div className="baeman-usecoupon-inner" />
      <div className="baeman-div137">등록</div>
      <div className="baeman-div138">
        <p className="baeman-p116">2,000원</p>
        <p className="baeman-p116">말왕족발 깜짝 할인</p>
      </div>
      <div className="baeman-div139">
        <p className="baeman-p116">7일 후 만료</p>
        <p className="baeman-p116">최소주문금액 : 30,000원</p>
      </div>
      <input className="baeman-usecoupon-child1" type="radio" />
    </div>
  );
};

export default UseCoupon;
