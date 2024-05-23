import { useState, useCallback } from "react";
import PopupRefundInfo from "../../../pages/appguide/Korail/PopupRefundInfo"
import PortalPopup from "../../../pages/appguide/Korail/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Refund.css";

const Refund = () => {
  const [isPopupRefundInfoOpen, setPopupRefundInfoOpen] = useState(false);
  const navigate = useNavigate();

  const onFooterButton4Click = useCallback(() => {
    navigate("/maincontents/my-ticket");
  }, [navigate]);

  const onFooterButton4ImageClick = useCallback(() => {
    navigate("/maincontents/my-ticket");
  }, [navigate]);

  const onFooterButton1Click = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  const openPopupRefundInfo = useCallback(() => {
    setPopupRefundInfoOpen(true);
  }, []);

  const closePopupRefundInfo = useCallback(() => {
    setPopupRefundInfoOpen(false);
  }, []);

  return (
    <>
      <div className="krail-refund-16">
        <footer className="krail-refundfooter">
          <div className="krail-refundfooterbuttonset">
            <button className="krail-footerbutton43" onClick={onFooterButton4Click}>
              <b className="krail-b186">승차권확인</b>
              <button
                className="krail-footerbutton4image3"
                onClick={onFooterButton4ImageClick}
              />
            </button>
            <button className="krail-footerbutton33">
              <b className="krail-b186">관광상품</b>
              <img
                className="krail-footerbutton3image-icon3"
                alt=""
                src="/appguide/Korail/footerbutton3image@2x.png"
              />
            </button>
            <button className="krail-footerbutton23">
              <img
                className="krail-footerbutton2image-icon3"
                alt=""
                src="/appguide/Korail/footerbutton2image@2x.png"
              />
              <b className="krail-b186">할인ㆍ정기권</b>
            </button>
            <button className="krail-footerbutton13" onClick={onFooterButton1Click}>
              <b className="krail-b189">승차권예매</b>
              <img
                className="krail-footerbutton1image-icon3"
                alt=""
                src="/appguide/Korail/footerbutton1image@2x.png"
              />
            </button>
          </div>
          <button className="krail-footerrefundbutton" onClick={openPopupRefundInfo}>
            <b className="krail-b190">반환하기</b>
          </button>
        </footer>
        <main className="krail-refundmain">
          <div className="krail-refundmainselectcheck">
            <b className="krail-b191">39,900원</b>
            <b className="krail-a17">15호차 3A</b>
            <b className="krail-b192">어른</b>
            <input className="krail-refundmainselectcheckbox" type="checkbox" />
          </div>
          <div className="krail-refundmaintotalcheck">
            <b className="krail-b193">승차권</b>
            <input className="krail-refundmaintotalcheckbox" type="checkbox" />
          </div>
          <div className="krail-refundmainscheduleinfo">
            <b className="krail-ktx-162-container">
              <span className="krail-ktx-162-container1">
                <p className="krail-ktx-1624">2025년 05월 03일 (토), KTX-산천 162</p>
                <p className="krail-ktx-1624">{`구포 10:14 > 광명 12:52`}</p>
              </span>
            </b>
          </div>
        </main>
        <header className="krail-refundheader">
          <button className="krail-refundheadermenubarbutton">
            <div className="krail-headerbuttonline31" />
            <div className="krail-headerbuttonline21" />
            <div className="krail-headerbuttonline11" />
          </button>
          <b className="krail-b194">반환하기</b>
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
