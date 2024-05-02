import { memo, useState, useCallback } from "react";
import CouponPopup from "./CouponPopup";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Frame1.css";

const Frame1 = memo(() => {
  const [isCouponPopupOpen, setCouponPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onText2Click = useCallback(() => {
    navigate("/review");
  }, [navigate]);

  const openCouponPopup = useCallback(() => {
    setCouponPopupOpen(true);
  }, []);

  const closeCouponPopup = useCallback(() => {
    setCouponPopupOpen(false);
  }, []);

  return (
    <>
      <div className="frame13">
        <div className="frame-child10" />
        <div className="frame-child11" />
        <div className="div204">말왕족발</div>
        <div className="div205">5.0</div>
        <img
          className="star-icon24"
          alt=""
          src="/appguide/baemin/star@2x.png"
        />
        <div className="div206" onClick={onText2Click}>
          리뷰 15개
        </div>
        <img className="frame-child12" alt="" />
        <div className="div207">
          <p className="p179">최소주문금액 15,000원</p>
          <p className="p179">한집배달 소요시간 31~41분</p>
        </div>
        <div className="frame-child13" onClick={openCouponPopup} />
      </div>
      {isCouponPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCouponPopup}
        >
          <CouponPopup onClose={closeCouponPopup} />
        </PortalPopup>
      )}
    </>
  );
});

export default Frame1;
