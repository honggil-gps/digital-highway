import { useState, useCallback } from "react";
import PopupCheckMember from "./PopupCheckMember";
import PortalPopup from "./PortalPopup";
import PopupMenubar from "/";
import { useNavigate } from "react-router-dom";
import "./PassSms.css";

const PassSms = () => {
  const [isPopupCheckMemberOpen, setPopupCheckMemberOpen] = useState(false);
  const [isPopupMenubarOpen, setPopupMenubarOpen] = useState(false);
  const navigate = useNavigate();

  const openPopupCheckMember = useCallback(() => {
    setPopupCheckMemberOpen(true);
  }, []);

  const closePopupCheckMember = useCallback(() => {
    setPopupCheckMemberOpen(false);
  }, []);

  const onSmsMainCancelButtonClick = useCallback(() => {
    navigate("/pass-05");
  }, [navigate]);

  const openPopupMenubar = useCallback(() => {
    setPopupMenubarOpen(true);
  }, []);

  const closePopupMenubar = useCallback(() => {
    setPopupMenubarOpen(false);
  }, []);

  return (
    <>
      <div className="passsms-06">
        <footer className="passsmsfooter">
          <img
            className="passfooterimage-icon1"
            alt=""
            src="/Appguide/Korail/passfooterimage@2x.png"
          />
          <b className="b209">통신 암호화 처리중</b>
        </footer>
        <main className="passsmsheadermain">
          <div className="smsmainbuttonset">
            <button
              className="smsmainconfirmbutton"
              onClick={openPopupCheckMember}
            >
              <b className="b210">확인</b>
            </button>
            <button
              className="smsmaincancelbutton"
              onClick={onSmsMainCancelButtonClick}
            >
              <b className="b211">취소</b>
            </button>
          </div>
          <div className="smsmainremembercheck">
            <div className="smsmainremembercheckbox" />
            <b className="b212">인증정보(이름/휴대폰번호) 기억하기</b>
          </div>
          <div className="smsmaintellnumber">
            <input className="smsmaintellnumberinput" type="tel" />
            <b className="b213">전화번호</b>
          </div>
          <div className="smsmainresidentregistration">
            <b className="b213">생년월일/성별</b>
            <div className="smsmainresidentregistrationinp">
              <div className="residentregistrationellipseset">
                <div className="residentregistrationellipse1" />
                <div className="residentregistrationellipse1" />
                <div className="residentregistrationellipse1" />
                <div className="residentregistrationellipse1" />
                <div className="residentregistrationellipse1" />
                <div className="residentregistrationellipse1" />
              </div>
              <input className="genderdateinput" type="number" />
              <div className="smsmainresidentregistrationlin" />
              <input className="birthdateinput1" type="number" />
            </div>
          </div>
          <div className="smsmainname">
            <input className="smsmainnameinput" type="text" />
            <b className="b215">이름</b>
          </div>
          <img
            className="passmainttitleimage-icon1"
            alt=""
            src="/Appguide/Korail/passmainttitleimage@2x.png"
          />
        </main>
        <header className="passsmsheader">
          <b className="sms3">휴대폰 본인 확인 - 문자SMS</b>
          <div className="headerbutton1">
            <div className="agreementheaderbuttonline32" />
            <div className="agreementheaderbuttonline22" />
            <div className="agreementheaderbuttonline12" />
          </div>
        </header>
        <header className="passsmsheader">
          <b className="sms3">휴대폰 본인 확인 - 문자SMS</b>
          <button className="headerbutton2" onClick={openPopupMenubar}>
            <div className="agreementheaderbuttonline32" />
            <div className="agreementheaderbuttonline22" />
            <div className="agreementheaderbuttonline12" />
          </button>
        </header>
      </div>
      {isPopupCheckMemberOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <PopupCheckMember onClose={closePopupCheckMember} />
        </PortalPopup>
      )}
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

export default PassSms;
