import { memo, useState, useCallback } from "react";
import CouponPopup from "./CouponPopup";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Frame1.css";

const Frame1 = memo(() => {
  const [isCouponPopupOpen, setCouponPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onText2Click = useCallback(() => {
    navigate("/maincontents/review");
  }, [navigate]);

  const openCouponPopup = useCallback(() => {
    setCouponPopupOpen(true);
  }, []);

  const closeCouponPopup = useCallback(() => {
    setCouponPopupOpen(false);
  }, []);

  return (
    <>
      <div className="baeman-frame13">
        <div className="baeman-frame-child10" />
        <div className="baeman-frame-child11" />
        <div className="baeman-div204">말왕족발</div>
        <div className="baeman-div205">5.0</div>
        <img
          className="baeman-star-icon24"
          alt=""
          src="/appguide/baemin/star@2x.png"
        />
        <div className="baeman-div206" onClick={onText2Click}>
          리뷰 15개
        </div>
        <img className="baeman-frame-child12" alt="" />
        <div className="baeman-div207">
          <p className="baeman-p179">최소주문금액 15,000원</p>
          <p className="baeman-p179">한집배달 소요시간 31~41분</p>
        </div>
        <div className="baeman-frame-child13" onClick={openCouponPopup} />
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
