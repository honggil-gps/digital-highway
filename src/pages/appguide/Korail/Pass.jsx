import { useState, useCallback } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import PopupMenubar from "./PopupMenubar";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Pass.css";

const Pass = () => {
  const [isPopupMenubarOpen, setPopupMenubarOpen] = useState(false);
  const navigate = useNavigate();

  const onSmsAuthButtonClick = useCallback(() => {
    navigate("/maincontents/pass-sms");
  }, [navigate]);

  const openPopupMenubar = useCallback(() => {
    setPopupMenubarOpen(true);
  }, []);

  const closePopupMenubar = useCallback(() => {
    setPopupMenubarOpen(false);
  }, []);

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <>
      <div className="krail-pass-05">
        <footer className="krail-passfooter">
          <img
            className="krail-passfooterimage-icon"
            alt=""
            src="/appguide/Korail/passfooterimage@2x.png"
          />
          <b className="krail-b202">통신 암호화 처리중</b>
        </footer>
        <main className="krail-passmain">
          <section className="krail-passmainbuttonset">
            <button className="krail-smsauthbutton" onClick={onSmsAuthButtonClick}>
              <b className="krail-sms2">문자(SMS)로 인증하기</b>
            </button>
            <button className="krail-passauthbutton">
              <b className="krail-pass">PASS로 인증하기</b>
            </button>
          </section>
          <section className="krail-passmaincheck">
            <div className="krail-passmaincheck4">
              <b className="krail-b203">4. 통신사이용약관동의</b>
              {/* <FormControlLabel
                className="krail-checkbox2"
                label=""
                control={<Checkbox color="error" size="small" />}
              /> */}
            </div>
            <div className="krail-passmaincheck3">
              <b className="krail-b203">3. 서비스이용약관동의</b>
              {/* <FormControlLabel
                className="krail-checkbox2"
                label=""
                control={<Checkbox color="error" size="small" />}
              /> */}
            </div>
            <div className="krail-passmaincheck2">
              <b className="krail-b203">2. 고유식별정보처리동의</b>
              {/* <FormControlLabel
                className="krail-checkbox2"
                label=""
                control={<Checkbox color="error" size="small" />}
              /> */}
            </div>
            <div className="krail-passmaincheck1">
              <b className="krail-b203">1. 개인정보이용동의</b>
              {/* <FormControlLabel
                className="krail-checkbox2"
                label=""
                control={<Checkbox color="error" size="small" />}
              /> */}
            </div>
            <div className="krail-passmainchecktotal">
              <b className="krail-b207">전체 동의하기</b>
              <FormControlLabel
                className="krail-checkboxMain"
                label=""
                control={<Checkbox id="large" color="error" />}
              />
            </div>
          </section>
            <section className="krail-passmaintelecom">
      <button
        className={`krail-telecommvno ${selectedButton === 'telecommvno' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('telecommvno')}>
        <div className="krail-telecommvnoellipse" />
        <img
          className="krail-telecommvnoimage-icon"
          alt=""
          src="/appguide/Korail/telecommvnoimage@2x.png"
        />
      </button>
      <button
        className={`krail-telecomlg ${selectedButton === 'telecomlg' ? 'selected' : ''
          }`}
        onClick={() => handleButtonClick('telecomlg')}
      >
        <div className="krail-telecommvnoellipse" />
        <img
          className="krail-telecomlgimage-icon"
          alt=""
          src="/appguide/Korail/telecomlgimage@2x.png"
        />
      </button>
      <button
        className={`krail-telecomkt ${selectedButton === 'telecomkt' ? 'selected' : ''
          }`}
        onClick={() => handleButtonClick('telecomkt')}
      >
        <div className="krail-telecommvnoellipse" />
        <img
          className="krail-telecomktimage-icon"
          alt=""
          src="/appguide/Korail/telecomktimage@2x.png"
        />
      </button>
      <button
        className={`krail-telecomsk ${selectedButton === 'telecomsk' ? 'selected' : ''
          }`}
        onClick={() => handleButtonClick('telecomsk')}
      >
        <div className="krail-telecommvnoellipse" />
        <img
          className="krail-telecomskimage-icon"
          alt=""
          src="/appguide/Korail/telecomskimage@2x.png"
        />
      </button>
    </section>
          <section className="krail-passmainttitle">
            <b className="krail-b208">이용중인 통신사를 선택해주세요</b>
            <img
              className="krail-passmainttitleimage-icon"
              alt=""
              src="/appguide/Korail/passmainttitleimage@2x.png"
            />
          </section>
        </main>
        <header className="krail-passheader">
          <b className="krail-pass-">PASS - 안심본인인증</b>
          <div className="krail-headerbutton" onClick={openPopupMenubar}>
            <div className="krail-agreementheaderbuttonline31" />
            <div className="krail-agreementheaderbuttonline21" />
            <div className="krail-agreementheaderbuttonline11" />
          </div>
        </header>
      </div>
      {isPopupMenubarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupMenubar}
        >
          <PopupMenubar onClose={closePopupMenubar} />
        </PortalPopup>
      )}
    </>
  );
};

export default Pass;

