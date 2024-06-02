// import { useState, useCallback } from "react";
// import PopupRegistrationCompleted from "../../../pages/appguide/Korail/PopupRegistrationCompleted";
// import PortalPopup from "../../../pages/appguide/Korail/PortalPopup";
// import PopupMenubar from "../../../pages/appguide/Korail/PortalPopup";
// import "./Signup.css";

// const Signup = () => {
//   const [isPopupRegistrationCompletedOpen, setPopupRegistrationCompletedOpen] =
//     useState(false);
//   const [isPopupMenubarOpen, setPopupMenubarOpen] = useState(false);

//   const openPopupRegistrationCompleted = useCallback(() => {
//     setPopupRegistrationCompletedOpen(true);
//   }, []);

//   const closePopupRegistrationCompleted = useCallback(() => {
//     setPopupRegistrationCompletedOpen(false);
//   }, []);

//   const openPopupMenubar = useCallback(() => {
//     setPopupMenubarOpen(true);
//   }, []);

//   const closePopupMenubar = useCallback(() => {
//     setPopupMenubarOpen(false);
//   }, []);

//   return (
//     <>
//       <div className="krail-signup-07">
//         <button
//           className="krail-signupfooter"
//           onClick={openPopupRegistrationCompleted}
//         >
//           <b className="krail-b324">다음</b>
//         </button>
//         <main className="krail-signupmain">
//           <div className="krail-signupmaininputset">
//             <input className="krail-signupmainofflinepasswordinput" type="text" />
//             <input className="krail-signupmainofflinepasswordinput" type="text" />
//             <input className="krail-signupmainofflinepasswordinput" type="text" />
//             <input className="krail-signupmainofflinepasswordinput" type="text" />
//           </div>
//           <b className="krail-b325">
//             <p className="krail-p100">갑을병</p>
//             <p className="krail-p100">&nbsp;</p>
//             <p className="krail-p100">1990-01-23</p>
//             <p className="krail-p100">&nbsp;</p>
//             <p className="krail-p100">남</p>
//             <p className="krail-p100">&nbsp;</p>
//             <p className="krail-p100">010-1234-5678</p>
//           </b>
//           <b className="krail-b326">
//             <p className="krail-p100">이름</p>
//             <p className="krail-p100">&nbsp;</p>
//             <p className="krail-p100">생년월일</p>
//             <p className="krail-p100">&nbsp;</p>
//             <p className="krail-p100">성별</p>
//             <p className="krail-p100">&nbsp;</p>
//             <p className="krail-p100">휴대폰번호</p>
//             <p className="krail-p100">&nbsp;</p>
//             <p className="krail-p100">창구비밀번호</p>
//             <p className="krail-p100">&nbsp;</p>
//             <p className="krail-p100">창구비밀번호</p>
//             <p className="krail-p100">확인</p>
//             <p className="krail-p100">&nbsp;</p>
//             <p className="krail-p100">코레일톡</p>
//             <p className="krail-p100">비밀번호</p>
//             <p className="krail-p100">&nbsp;</p>
//             <p className="krail-p100">코레일톡</p>
//             <p className="krail-p100">비밀번호 확인</p>
//           </b>
//         </main>
//         <header className="krail-signupheader">
//           <b className="krail-b327">회원가입</b>
//           <div className="krail-headerbutton3" onClick={openPopupMenubar}>
//             <div className="krail-agreementheaderbuttonline34" />
//             <div className="krail-agreementheaderbuttonline24" />
//             <div className="krail-agreementheaderbuttonline14" />
//           </div>
//         </header>
//       </div>
//       {isPopupRegistrationCompletedOpen && (
//         <PortalPopup
//           overlayColor="rgba(113, 113, 113, 0.3)"
//           placement="Centered"
//         >
//           <PopupRegistrationCompleted
//             onClose={closePopupRegistrationCompleted}
//           />
//         </PortalPopup>
//       )}
//       {isPopupMenubarOpen && (
//         <PortalPopup
//           overlayColor="rgba(113, 113, 113, 0.3)"
//           placement="Centered"
//           onOutsideClick={closePopupMenubar}
//         >
//           <PopupMenubar onClose={closePopupMenubar} />
//         </PortalPopup>
//       )}
//     </>
//   );
// };

// export default Signup;



import { useState, useCallback, useEffect } from "react";
import PopupRegistrationCompleted from "../../../pages/appguide/Korail/PopupRegistrationCompleted";
import PortalPopup from "../../../pages/appguide/Korail/PortalPopup";
import PopupMenubar from "../../../pages/appguide/Korail/PortalPopup";
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

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("확인을 눌러주세요.", "사용하실 비밀번호를 \n 모든항목에 입력해주세요. \n (111111)", "적혀있는 회원번호 \n (1234567890)을 기억한 후 \n 확인을 눌러주세요.")},[])

  return (
    <>
      <div className="krail-signup-07">
        <button
          className="krail-signupfooter"
          onClick={openPopupRegistrationCompleted}
        >
          <b className="krail-b324">다음</b>
        </button>
        <main className="krail-signupmain">
          <div className="krail-signupmaininputset">
            <input className="krail-signupmainofflinepasswordinput" type="text" />
            <input className="krail-signupmainofflinepasswordinput" type="text" />
            <input className="krail-signupmainofflinepasswordinput" type="text" />
            <input className="krail-signupmainofflinepasswordinput" type="text" />
          </div>
          <b className="krail-b325">
            <p className="krail-p100">갑을병</p>
            <p className="krail-p100">&nbsp;</p>
            <p className="krail-p100">1990-01-23</p>
            <p className="krail-p100">&nbsp;</p>
            <p className="krail-p100">남</p>
            <p className="krail-p100">&nbsp;</p>
            <p className="krail-p100">010-1234-5678</p>
          </b>
          <b className="krail-b326">
            <p className="krail-p100">이름</p>
            <p className="krail-p100">&nbsp;</p>
            <p className="krail-p100">생년월일</p>
            <p className="krail-p100">&nbsp;</p>
            <p className="krail-p100">성별</p>
            <p className="krail-p100">&nbsp;</p>
            <p className="krail-p100">휴대폰번호</p>
            <p className="krail-p100">&nbsp;</p>
            <p className="krail-p100">창구비밀번호</p>
            <p className="krail-p100">&nbsp;</p>
            <p className="krail-p100">창구비밀번호</p>
            <p className="krail-p100">확인</p>
            <p className="krail-p100">&nbsp;</p>
            <p className="krail-p100">코레일톡</p>
            <p className="krail-p100">비밀번호</p>
            <p className="krail-p100">&nbsp;</p>
            <p className="krail-p100">코레일톡</p>
            <p className="krail-p100">비밀번호 확인</p>
          </b>
        </main>
        <header className="krail-signupheader">
          <b className="krail-b327">회원가입</b>
          <div className="krail-headerbutton3" onClick={openPopupMenubar}>
            <div className="krail-agreementheaderbuttonline34" />
            <div className="krail-agreementheaderbuttonline24" />
            <div className="krail-agreementheaderbuttonline14" />
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



