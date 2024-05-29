import { useState, useCallback, useEffect } from "react";
import PopupCheckMember from "./PopupCheckMember";
import PortalPopup from "./PortalPopup";
import PopupMenubar from "./PopupMenubar";
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
    navigate("/maincontents/pass-05");
  }, [navigate]);

  const openPopupMenubar = useCallback(() => {
    setPopupMenubarOpen(true);
  }, []);

  const closePopupMenubar = useCallback(() => {
    setPopupMenubarOpen(false);
  }, []);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("사용중인 통신사를 선택하신 후 \n 전체 동의하기를 체크해주세요. \n 그 다음, 문자(SMS)로 \n 인증하기를 눌러주세요.", "이름 / 생년월일 / 전화번호를 \n 입력 후 확인 버튼을 눌러주세요.", "사용하실 비밀번호를 \n 입력해주세요. (1111)")},[])

  return (
    <>
      <div className="krail-passsms-06">
        <footer className="krail-passsmsfooter">
          <img
            className="krail-passfooterimage-icon1"
            alt=""
            src="/appguide/Korail/passfooterimage@2x.png"
          />
          <b className="krail-b209">통신 암호화 처리중</b>
        </footer>
        <main className="krail-passsmsheadermain">
          <div className="krail-smsmainbuttonset">
            <button
              className="krail-smsmainconfirmbutton"
              onClick={openPopupCheckMember}
            >
              <b className="krail-b210">확인</b>
            </button>
            <button
              className="krail-smsmaincancelbutton"
              onClick={onSmsMainCancelButtonClick}
            >
              <b className="krail-b211">취소</b>
            </button>
          </div>
          <div className="krail-smsmainremembercheck">
            <div className="krail-smsmainremembercheckbox" />
            <b className="krail-b212">인증정보(이름/휴대폰번호) 기억하기</b>
          </div>
          <div className="krail-smsmaintellnumber">
            <input className="krail-smsmaintellnumberinput" type="tel" />
            <b className="krail-b213">전화번호</b>
          </div>
          <div className="krail-smsmainresidentregistration">
            <b className="krail-b213">생년월일/성별</b>
            <div className="krail-smsmainresidentregistrationinp">
              <div className="krail-residentregistrationellipseset">
                <div className="krail-residentregistrationellipse1" />
                <div className="krail-residentregistrationellipse1" />
                <div className="krail-residentregistrationellipse1" />
                <div className="krail-residentregistrationellipse1" />
                <div className="krail-residentregistrationellipse1" />
                <div className="krail-residentregistrationellipse1" />
              </div>
              <input className="krail-genderdateinput" type="number" />
              <div className="krail-smsmainresidentregistrationlin" />
              <input className="krail-birthdateinput1" type="number" />
            </div>
          </div>
          <div className="krail-smsmainname">
            <input className="krail-smsmainnameinput" type="text" />
            <b className="krail-b215">이름</b>
          </div>
          <img
            className="krail-passmainttitleimage-icon1"
            alt=""
            src="/appguide/Korail/passmainttitleimage@2x.png"
          />
        </main>
        <header className="krail-passsmsheader">
          <b className="krail-sms3">휴대폰 본인 확인 - 문자SMS</b>
          <div className="krail-headerbutton1">
            <div className="krail-agreementheaderbuttonline32" />
            <div className="krail-agreementheaderbuttonline22" />
            <div className="krail-agreementheaderbuttonline12" />
          </div>
        </header>
        <header className="krail-passsmsheader">
          <b className="krail-sms3">휴대폰 본인 확인 - 문자SMS</b>
          <button className="krail-headerbutton2" onClick={openPopupMenubar}>
            <div className="krail-agreementheaderbuttonline32" />
            <div className="krail-agreementheaderbuttonline22" />
            <div className="krail-agreementheaderbuttonline12" />
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
