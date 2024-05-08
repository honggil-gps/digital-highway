import { useState, useCallback } from "react";
import PopupRefundInfo from "../Korailpage/PopupRefundInfo";
import PortalPopup from "../Korailpage/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Refund.css";

const Refund = () => {
  const [isPopupRefundInfoOpen, setPopupRefundInfoOpen] = useState(false);
  const navigate = useNavigate();

  const onFooterButton4Click = useCallback(() => {
    navigate("/my-ticket");
  }, [navigate]);

  const onFooterButton4ImageClick = useCallback(() => {
    navigate("/my-ticket");
  }, [navigate]);

  const onFooterButton1Click = useCallback(() => {
    navigate("/mainpage-02");
  }, [navigate]);

  const openPopupRefundInfo = useCallback(() => {
    setPopupRefundInfoOpen(true);
  }, []);

  const closePopupRefundInfo = useCallback(() => {
    setPopupRefundInfoOpen(false);
  }, []);

  return (
    <>
      <div className="refund-16">
        <footer className="refundfooter">
          <div className="refundfooterbuttonset">
            <button className="footerbutton43" onClick={onFooterButton4Click}>
              <b className="b186">승차권확인</b>
              <button
                className="footerbutton4image3"
                onClick={onFooterButton4ImageClick}
              />
            </button>
            <button className="footerbutton33">
              <b className="b186">관광상품</b>
              <img
                className="footerbutton3image-icon3"
                alt=""
                src="/Appguide/Korail/footerbutton3image@2x.png"
              />
            </button>
            <button className="footerbutton23">
              <img
                className="footerbutton2image-icon3"
                alt=""
                src="/Appguide/Korail/footerbutton2image@2x.png"
              />
              <b className="b186">할인ㆍ정기권</b>
            </button>
            <button className="footerbutton13" onClick={onFooterButton1Click}>
              <b className="b189">승차권예매</b>
              <img
                className="footerbutton1image-icon3"
                alt=""
                src="/Appguide/Korail/footerbutton1image@2x.png"
              />
            </button>
          </div>
          <button className="footerrefundbutton" onClick={openPopupRefundInfo}>
            <b className="b190">반환하기</b>
          </button>
        </footer>
        <main className="refundmain">
          <div className="refundmainselectcheck">
            <b className="b191">39,900원</b>
            <b className="a17">15호차 3A</b>
            <b className="b192">어른</b>
            <input className="refundmainselectcheckbox" type="checkbox" />
          </div>
          <div className="refundmaintotalcheck">
            <b className="b193">승차권</b>
            <input className="refundmaintotalcheckbox" type="checkbox" />
          </div>
          <div className="refundmainscheduleinfo">
            <b className="ktx-162-container">
              <span className="ktx-162-container1">
                <p className="ktx-1624">2025년 05월 03일 (토), KTX-산천 162</p>
                <p className="ktx-1624">{`구포 10:14 > 광명 12:52`}</p>
              </span>
            </b>
          </div>
        </main>
        <header className="refundheader">
          <button className="refundheadermenubarbutton">
            <div className="headerbuttonline31" />
            <div className="headerbuttonline21" />
            <div className="headerbuttonline11" />
          </button>
          <b className="b194">반환하기</b>
        </header>
      </div>
      {isPopupRefundInfoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <PopupRefundInfo onClose={closePopupRefundInfo} />
        </PortalPopup>
      )}
    </>
  );
};

export default Refund;
