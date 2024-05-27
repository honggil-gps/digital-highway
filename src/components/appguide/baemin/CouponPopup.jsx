import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CouponPopup.css";

const CouponPopup = memo(() => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/maincontents/11");
  }, [navigate]);

  return (
    <div className="baeman-couponpopup">
      <div className="baeman-couponpopup-child" onClick={onRectangleClick} />
      <div className="baeman-wrapper4">
        <div className="baeman-div198">2000원 할인 쿠폰 받기 완료</div>
      </div>
    </div>
  );
});

export default CouponPopup;
