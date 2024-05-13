import { useState, useCallback } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import PopupMenubar from "/";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Pass.css";

const Pass = () => {
  const [isPopupMenubarOpen, setPopupMenubarOpen] = useState(false);
  const navigate = useNavigate();

  const onSmsAuthButtonClick = useCallback(() => {
    navigate("/pass-sms");
  }, [navigate]);

  const openPopupMenubar = useCallback(() => {
    setPopupMenubarOpen(true);
  }, []);

  const closePopupMenubar = useCallback(() => {
    setPopupMenubarOpen(false);
  }, []);

  return (
    <>
      <div className="pass-05">
        <footer className="passfooter">
          <img
            className="passfooterimage-icon"
            alt=""
            src="/Appguide/Korail/passfooterimage@2x.png"
          />
          <b className="b202">통신 암호화 처리중</b>
        </footer>
        <main className="passmain">
          <section className="passmainbuttonset">
            <button className="smsauthbutton" onClick={onSmsAuthButtonClick}>
              <b className="sms2">문자(SMS)로 인증하기</b>
            </button>
            <button className="passauthbutton">
              <b className="pass">PASS로 인증하기</b>
            </button>
          </section>
          <section className="passmaincheck">
            <div className="passmaincheck4">
              <b className="b203">통신사이용약관동의</b>
              <FormControlLabel
                className="checkbox2"
                label=""
                control={<Checkbox color="error" size="small" />}
              />
            </div>
            <div className="passmaincheck3">
              <b className="b204">서비스이용약관동의</b>
              <FormControlLabel
                className="checkbox2"
                label=""
                control={<Checkbox color="error" size="small" />}
              />
            </div>
            <div className="passmaincheck2">
              <b className="b203">고유식별정보처리동의</b>
              <FormControlLabel
                className="checkbox2"
                label=""
                control={<Checkbox color="error" size="small" />}
              />
            </div>
            <div className="passmaincheck1">
              <b className="b206">개인정보이용동의</b>
              <FormControlLabel
                className="checkbox2"
                label=""
                control={<Checkbox color="error" size="small" />}
              />
            </div>
            <div className="passmainchecktotal">
              <b className="b207">전체 동의하기</b>
              <FormControlLabel
                className="checkbox2"
                label=""
                control={<Checkbox id="large" color="error" />}
              />
            </div>
          </section>
          <section className="passmaintelecom">
            <button className="telecommvno">
              <div className="telecommvnoellipse" />
              <img
                className="telecommvnoimage-icon"
                alt=""
                src="/Appguide/Korail/telecommvnoimage@2x.png"
              />
            </button>
            <button className="telecomlg">
              <div className="telecommvnoellipse" />
              <img
                className="telecomlgimage-icon"
                alt=""
                src="/Appguide/Korail/telecomlgimage@2x.png"
              />
            </button>
            <button className="telecomkt">
              <div className="telecommvnoellipse" />
              <img
                className="telecomktimage-icon"
                alt=""
                src="/Appguide/Korail/telecomktimage@2x.png"
              />
            </button>
            <button className="telecomsk">
              <div className="telecommvnoellipse" />
              <img
                className="telecomskimage-icon"
                alt=""
                src="/Appguide/Korail/telecomskimage@2x.png"
              />
            </button>
          </section>
          <section className="passmainttitle">
            <b className="b208">이용중인 통신사를 선택해주세요</b>
            <img
              className="passmainttitleimage-icon"
              alt=""
              src="/Appguide/Korail/passmainttitleimage@2x.png"
            />
          </section>
        </main>
        <header className="passheader">
          <b className="pass-">PASS - 안심본인인증</b>
          <div className="headerbutton" onClick={openPopupMenubar}>
            <div className="agreementheaderbuttonline31" />
            <div className="agreementheaderbuttonline21" />
            <div className="agreementheaderbuttonline11" />
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
