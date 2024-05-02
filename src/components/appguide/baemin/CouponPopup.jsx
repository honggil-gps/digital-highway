import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CouponPopup.css";

const CouponPopup = memo(() => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/11");
  }, [navigate]);

  return (
    <div className="couponpopup">
      <div className="couponpopup-child" onClick={onRectangleClick} />
      <div className="wrapper4">
        <div className="div198">2000원 할인 쿠폰 받기 완료</div>
      </div>
    </div>
  );
});

export default CouponPopup;
