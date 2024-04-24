import { useState, useCallback } from "react";
import Frame8 from "../components/Frame8";
import PortalPopup from "../components/PortalPopup";
import Footer from "../components/Footer";
import "./Frame7.css";

const Frame7 = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isSearch1Open, setSearch1Open] = useState(false);
  const [isSearch2Open, setSearch2Open] = useState(false);

  const openSearch = useCallback(() => {
    setSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
  }, []);

  const openSearch1 = useCallback(() => {
    setSearch1Open(true);
  }, []);

  const closeSearch1 = useCallback(() => {
    setSearch1Open(false);
  }, []);

  const openSearch2 = useCallback(() => {
    setSearch2Open(true);
  }, []);

  const closeSearch2 = useCallback(() => {
    setSearch2Open(false);
  }, []);

  return (
    <>
      <div className="home">
        <Footer />
        <div className="frame4">
          <div className="frame-child1" onClick={openSearch} />
          <img
            className="material-symbolssearch-icon"
            alt=""
            src="/materialsymbolssearch.svg"
          />
          <div className="div23" onClick={openSearch1}>
            어디로 갈까요?
          </div>
        </div>
        <div className="frame-parent">
          <div className="rectangle-container" onClick={openSearch2}>
            <div className="frame-6-1-child" />
            <div className="noto-v1taxi-parent">
              <img
                className="noto-v1taxi-icon"
                alt=""
                src="/notov1taxi@2x.png"
              />
              <b className="b15">택시</b>
            </div>
          </div>
          <div className="rectangle-parent1">
            <div className="frame-child3" />
            <div className="emojionebicycle-parent">
              <img
                className="emojionebicycle-icon"
                alt=""
                src="/emojionebicycle.svg"
              />
              <b className="b15">바이크</b>
            </div>
          </div>
          <div className="frame-6-1">
            <div className="frame-6-1-child" />
            <div className="uimcalender-parent">
              <img className="uimcalender-icon" alt="" src="/uimcalender.svg" />
              <b className="b15">택시예약</b>
            </div>
          </div>
        </div>
      </div>
      {isSearchOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSearch}
        >
          <Frame8 onClose={closeSearch} />
        </PortalPopup>
      )}
      {isSearch1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSearch1}
        >
          <Frame8 onClose={closeSearch1} />
        </PortalPopup>
      )}
      {isSearch2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSearch2}
        >
          <Frame8 onClose={closeSearch2} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame7;
