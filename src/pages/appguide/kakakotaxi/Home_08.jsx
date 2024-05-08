import { useState, useCallback } from "react";
import Frame8 from "../../../components/appguide/kakaotaxi/Search_09";
import PortalPopup from "../../../components/appguide/kakaotaxi/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Home_08.css";

const Frame7 = () => {
  const [isSearch09Open, setSearch09Open] = useState(false);
  const [isSearch091Open, setSearch091Open] = useState(false);
  const [isSearch092Open, setSearch092Open] = useState(false);
  const navigate = useNavigate();

  const onPaymentTabClick = useCallback(() => {
    navigate("/paymentmethod-03");
  }, [navigate]);

  const openSearch09 = useCallback(() => {
    setSearch09Open(true);
  }, []);

  const closeSearch09 = useCallback(() => {
    setSearch09Open(false);
  }, []);

  const openSearch091 = useCallback(() => {
    setSearch091Open(true);
  }, []);

  const closeSearch091 = useCallback(() => {
    setSearch091Open(false);
  }, []);

  const openSearch092 = useCallback(() => {
    setSearch092Open(true);
  }, []);

  const closeSearch092 = useCallback(() => {
    setSearch092Open(false);
  }, []);

  return (
    <>
      <div className="home-08">
        <div className="homebottommenu">
          <div className="hometab">
            <div className="home-filled-parent">
              <img
                className="home-filled-icon"
                alt=""
                src="/appguide/kakaotaxi/home-filled.svg"
              />
              <div className="div27">홈</div>
            </div>
          </div>
          <div className="notificationtab">
            <div className="notificationtab-child" />
            <div className="bell-parent">
              <img
                className="bell-icon"
                alt=""
                src="/appguide/kakaotaxi/bell@2x.png"
              />
              <div className="div28">이용/알림</div>
            </div>
          </div>
          <div className="paymenttab" onClick={onPaymentTabClick}>
            <div className="notificationtab-child" />
            <div className="payment-parent">
              <img
                className="payment-icon"
                alt=""
                src="/appguide/kakaotaxi/payment.svg"
              />
              <div className="div28">결제수단</div>
            </div>
          </div>
        </div>
        <div className="hometaxibutton">
          <div className="taxibutton" onClick={openSearch09}>
            <div className="taxibutton-child" />
            <div className="noto-v1taxi-parent">
              <img
                className="noto-v1taxi-icon"
                alt=""
                src="/appguide/kakaotaxi/notov1taxi@2x.png"
              />
              <b className="b16">택시</b>
            </div>
          </div>
          <div className="reservationbutton">
            <div className="taxibutton-child" />
            <div className="uimcalender-parent">
              <img
                className="uimcalender-icon"
                alt=""
                src="/appguide/kakaotaxi/uimcalender.svg"
              />
              <b className="b16">택시예약</b>
            </div>
          </div>
          <div className="bikebutton">
            <div className="bikebutton-child" />
            <div className="emojionebicycle-parent">
              <img
                className="emojionebicycle-icon"
                alt=""
                src="/appguide/kakaotaxi/emojionebicycle.svg"
              />
              <b className="b16">바이크</b>
            </div>
          </div>
        </div>
        <div className="homesearchbar">
          <div className="homesearchbar-child" onClick={openSearch091} />
          <img
            className="material-symbolssearch-icon"
            alt=""
            src="/appguide/kakaotaxi/materialsymbolssearch.svg"
          />
          <div className="div30" onClick={openSearch092}>
            어디로 갈까요?
          </div>
        </div>
      </div>
      {isSearch09Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSearch09}
        >
          <Frame8 onClose={closeSearch09} />
        </PortalPopup>
      )}
      {isSearch091Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSearch091}
        >
          <Frame8 onClose={closeSearch091} />
        </PortalPopup>
      )}
      {isSearch092Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSearch092}
        >
          <Frame8 onClose={closeSearch092} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame7;
