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
    navigate("/maincontents/paymentmethod-03");
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
      <div className="kikio-home-08">
        <div className="kikio-homebottommenu">
          <div className="kikio-hometab">
            <div className="kikio-home-filled-parent">
              <img
                className="kikio-home-filled-icon"
                alt=""
                src="/appguide/kakaotaxi/home-filled.svg"
              />
              <div className="kikio-div27">홈</div>
            </div>
          </div>
          <div className="kikio-notificationtab">
            <div className="kikio-notificationtab-child" />
            <div className="kikio-bell-parent">
              <img
                className="kikio-bell-icon"
                alt=""
                src="/appguide/kakaotaxi/bell@2x.png"
              />
              <div className="kikio-div28">이용/알림</div>
            </div>
          </div>
          <div className="kikio-paymenttab" onClick={onPaymentTabClick}>
            <div className="kikio-notificationtab-child" />
            <div className="kikio-payment-parent">
              <img
                className="kikio-payment-icon"
                alt=""
                src="/appguide/kakaotaxi/payment.svg"
              />
              <div className="kikio-div28">결제수단</div>
            </div>
          </div>
        </div>
        <div className="kikio-hometaxibutton">
          <div className="kikio-taxibutton" onClick={openSearch09}>
            <div className="kikio-taxibutton-child" />
            <div className="kikio-noto-v1taxi-parent">
              <img
                className="kikio-noto-v1taxi-icon"
                alt=""
                src="/appguide/kakaotaxi/notov1taxi@2x.png"
              />
              <b className="kikio-b16">택시</b>
            </div>
          </div>
          <div className="kikio-reservationbutton">
            <div className="kikio-taxibutton-child" />
            <div className="kikio-uimcalender-parent">
              <img
                className="kikio-uimcalender-icon"
                alt=""
                src="/appguide/kakaotaxi/uimcalender.svg"
              />
              <b className="kikio-b16">택시예약</b>
            </div>
          </div>
          <div className="kikio-bikebutton">
            <div className="kikio-bikebutton-child" />
            <div className="kikio-emojionebicycle-parent">
              <img
                className="kikio-emojionebicycle-icon"
                alt=""
                src="/appguide/kakaotaxi/emojionebicycle.svg"
              />
              <b className="kikio-b16">바이크</b>
            </div>
          </div>
        </div>
        <div className="kikio-homesearchbar">
          <div className="kikio-homesearchbar-child" onClick={openSearch091} />
          <img
            className="kikio-material-symbolssearch-icon"
            alt=""
            src="/appguide/kakaotaxi/materialsymbolssearch.svg"
          />
          <div className="kikio-div30" onClick={openSearch092}>
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
