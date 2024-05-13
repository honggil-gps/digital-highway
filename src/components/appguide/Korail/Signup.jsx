import { useState, useCallback } from "react";
import PopupRegistrationCompleted from "../Korailpage/PopupRegistrationCompleted";
import PortalPopup from "../Korailpage/PortalPopup";
import PopupMenubar from "/";
import "./Signup.css";

const Signup = () => {
  const [isPopupRegistrationCompletedOpen, setPopupRegistrationCompletedOpen] =
    useState(false);
  const [isPopupMenubarOpen, setPopupMenubarOpen] = useState(false);

  const openPopupRegistrationCompleted = useCallback(() => {
    setPopupRegistrationCompletedOpen(true);
  }, []);

  const closePopupRegistrationCompleted = useCallback(() => {
    setPopupRegistrationCompletedOpen(false);
  }, []);

  const openPopupMenubar = useCallback(() => {
    setPopupMenubarOpen(true);
  }, []);

  const closePopupMenubar = useCallback(() => {
    setPopupMenubarOpen(false);
  }, []);

  return (
    <>
      <div className="signup-07">
        <button
          className="signupfooter"
          onClick={openPopupRegistrationCompleted}
        >
          <b className="b324">다음</b>
        </button>
        <main className="signupmain">
          <div className="signupmaininputset">
            <input className="signupmainofflinepasswordinput" type="password" />
            <input className="signupmainofflinepasswordinput" type="password" />
            <input className="signupmainofflinepasswordinput" type="password" />
            <input className="signupmainofflinepasswordinput" type="password" />
          </div>
          <b className="b325">
            <p className="p100">갑을병</p>
            <p className="p100">&nbsp;</p>
            <p className="p100">1990-01-23</p>
            <p className="p100">&nbsp;</p>
            <p className="p100">남</p>
            <p className="p100">&nbsp;</p>
            <p className="p100">010-1234-5678</p>
          </b>
          <b className="b326">
            <p className="p100">이름</p>
            <p className="p100">&nbsp;</p>
            <p className="p100">생년월일</p>
            <p className="p100">&nbsp;</p>
            <p className="p100">성별</p>
            <p className="p100">&nbsp;</p>
            <p className="p100">휴대폰번호</p>
            <p className="p100">&nbsp;</p>
            <p className="p100">창구비밀번호</p>
            <p className="p100">&nbsp;</p>
            <p className="p100">창구비밀번호</p>
            <p className="p100">확인</p>
            <p className="p100">&nbsp;</p>
            <p className="p100">코레일톡</p>
            <p className="p100">비밀번호</p>
            <p className="p100">&nbsp;</p>
            <p className="p100">코레일톡</p>
            <p className="p100">비밀번호 확인</p>
          </b>
        </main>
        <header className="signupheader">
          <b className="b327">회원가입</b>
          <div className="headerbutton3" onClick={openPopupMenubar}>
            <div className="agreementheaderbuttonline34" />
            <div className="agreementheaderbuttonline24" />
            <div className="agreementheaderbuttonline14" />
          </div>
        </header>
      </div>
      {isPopupRegistrationCompletedOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <PopupRegistrationCompleted
            onClose={closePopupRegistrationCompleted}
          />
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

export default Signup;
