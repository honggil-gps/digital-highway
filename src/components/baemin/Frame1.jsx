import { useState, useCallback } from "react";
import AfterLike from "./AfterLike";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Frame1.css";

const Frame1 = () => {
  const [isAfterLikeOpen, setAfterLikeOpen] = useState(false);
  const navigate = useNavigate();

  const onText2Click = useCallback(() => {
    navigate("/review");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/coupon");
  }, [navigate]);

  const openAfterLike = useCallback(() => {
    setAfterLikeOpen(true);
  }, []);

  const closeAfterLike = useCallback(() => {
    setAfterLikeOpen(false);
  }, []);

  return (
    <>
      <div className="frame16">
        <div className="frame-child11" />
        <div className="frame-child12" />
        <div className="div228">말왕족발</div>
        <div className="div229">5.0</div>
        <img className="star-icon25" alt="" src="/star@2x.png" />
        <div className="div230" onClick={onText2Click}>
          리뷰 15개
        </div>
        <img className="frame-child13" alt="" />
        <div className="div231">
          <p className="p130">최소주문금액 15,000원</p>
          <p className="p130">한집배달 소요시간 31~41분</p>
        </div>
        <div className="wrapper6" onClick={onFrameContainerClick}>
          <div className="div232">2000원 첫주문 할인 쿠폰 받기</div>
        </div>
        <button className="beforelike2" onClick={openAfterLike}>
          <div className="beforelike-inner" />
          <div className="div233">찜하기</div>
          <img
            className="ant-designheart-outlined-icon2"
            alt=""
            src="/antdesignheartoutlined.svg"
          />
        </button>
      </div>
      {isAfterLikeOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAfterLike}
        >
          <AfterLike onClose={closeAfterLike} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame1;
