// import { useState, useCallback } from "react";
// import PopupCheckMember from "./PopupCheckMember";
// import PortalPopup from "./PortalPopup";
// import PopupMenubar from "./PopupMenubar";
// import { useNavigate } from "react-router-dom";
// import "./PassSms.css";

// const PassSms = () => {
//   const [isPopupCheckMemberOpen, setPopupCheckMemberOpen] = useState(false);
//   const [isPopupMenubarOpen, setPopupMenubarOpen] = useState(false);
//   const navigate = useNavigate();

//   const openPopupCheckMember = useCallback(() => {
//     setPopupCheckMemberOpen(true);
//   }, []);

//   const closePopupCheckMember = useCallback(() => {
//     setPopupCheckMemberOpen(false);
//   }, []);

//   const onSmsMainCancelButtonClick = useCallback(() => {
//     navigate("/maincontents/pass-05");
//   }, [navigate]);

//   const openPopupMenubar = useCallback(() => {
//     setPopupMenubarOpen(true);
//   }, []);

//   const closePopupMenubar = useCallback(() => {
//     setPopupMenubarOpen(false);
//   }, []);


//   function moveFocus(current, nextId) {
//     current.value = current.value.replace(/[^0-9]/g, '');
//     if (current.value.length >= 4 && nextId) {
//       document.getElementById(nextId).focus();
//     }
//   }

//   function validateNumberInput(object) {
//     object.value = object.value.replace(/[^0-9]/g, '');
//   }

//   return (
//     <>
//       <div className="krail-passsms-06">
//         <footer className="krail-passsmsfooter">
//           <img
//             className="krail-passfooterimage-icon1"
//             alt=""
//             src="/appguide/Korail/passfooterimage@2x.png"
//           />
//           <b className="krail-b209">통신 암호화 처리중</b>
//         </footer>
//         <main className="krail-passsmsheadermain">
//           <div className="krail-smsmainbuttonset">
//             <button
//               className="krail-smsmainconfirmbutton"
//               onClick={openPopupCheckMember}
//             >
//               <b className="krail-b210">확인</b>
//             </button>
//             <button
//               className="krail-smsmaincancelbutton"
//               onClick={onSmsMainCancelButtonClick}
//             >
//               <b className="krail-b211">취소</b>
//             </button>
//           </div>
//           <div className="krail-smsmainremembercheck">
//             <div className="krail-smsmainremembercheckbox" />
//             <b className="krail-b212">인증정보(이름/휴대폰번호) 기억하기</b>
//           </div>
//           <div className="krail-smsmaintellnumber">
//             <input className="krail-smsmaintellnumberinput" type="tel" maxlength="11" onInput={(e) => validateNumberInput(e.target)} />
//             <b className="krail-b213">전화번호</b>
//           </div>
//           <div className="krail-smsmainresidentregistration">
//             <b className="krail-b213">생년월일/성별</b>
//             <div className="krail-smsmainresidentregistrationinp">
//               <div className="krail-residentregistrationellipseset">
//                 <div className="krail-residentregistrationellipse1" />
//                 <div className="krail-residentregistrationellipse1" />
//                 <div className="krail-residentregistrationellipse1" />
//                 <div className="krail-residentregistrationellipse1" />
//                 <div className="krail-residentregistrationellipse1" />
//                 <div className="krail-residentregistrationellipse1" />
//               </div>
//               <input className="krail-genderdateinput" type="text" 
//               maxlength="1" onInput={(e) => {validateNumberInput(e.target); moveFocus(e.target, '')}} id="input2"
//               />
//               <div className="krail-smsmainresidentregistrationlin" />
//               <input className="krail-birthdateinput1" type="text"  
//               maxlength="6" onInput={(e) => {validateNumberInput(e.target); moveFocus(e.target, 'input2')}} id="input1"
//               />
//             </div>
//           </div>
//           <div className="krail-smsmainname">
//             <input className="krail-smsmainnameinput" type="text" />
//             <b className="krail-b215">이름</b>
//           </div>
//           <img
//             className="krail-passmainttitleimage-icon1"
//             alt=""
//             src="/appguide/Korail/passmainttitleimage@2x.png"
//           />
//         </main>
//         <header className="krail-passsmsheader">
//           <b className="krail-sms3">휴대폰 본인 확인 - 문자SMS</b>
//           <div className="krail-headerbutton1">
//             <div className="krail-agreementheaderbuttonline32" />
//             <div className="krail-agreementheaderbuttonline22" />
//             <div className="krail-agreementheaderbuttonline12" />
//           </div>
//         </header>
//         <header className="krail-passsmsheader">
//           <b className="krail-sms3">휴대폰 본인 확인 - 문자SMS</b>
//           <button className="krail-headerbutton2" onClick={openPopupMenubar}>
//             <div className="krail-agreementheaderbuttonline32" />
//             <div className="krail-agreementheaderbuttonline22" />
//             <div className="krail-agreementheaderbuttonline12" />
//           </button>
//         </header>
//       </div>
//       {isPopupCheckMemberOpen && (
//         <PortalPopup
//           overlayColor="rgba(113, 113, 113, 0.3)"
//           placement="Centered"
//         >
//           <PopupCheckMember onClose={closePopupCheckMember} />
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

// export default PassSms;


import { useState, useCallback, useEffect } from "react";
import PopupCheckMember from "./PopupCheckMember";
import PortalPopup from "./PortalPopup";
import PopupMenubar from "./PopupMenubar";
import { useNavigate } from "react-router-dom";
import "./PassSms.css";

const PassSms = () => {
  const [isPopupCheckMemberOpen, setPopupCheckMemberOpen] = useState(false);
  const [isPopupMenubarOpen, setPopupMenubarOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const openPopupCheckMember = useCallback(() => {
    if (phoneNumber && birthDate && gender && name) {
      setPopupCheckMemberOpen(true);
    } else {
      alert("빈칸을 모두 채워주세요!");
    }
  }, [phoneNumber, birthDate, gender, name]);

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
  useEffect(()=>{sendCaption("사용중인 통신사를 선택하신 후 \n 전체 동의하기를 체크해주세요. \n 그 다음, 문자(SMS)로 \n 인증하기를 눌러주세요.", "이름 / 생년월일 / 전화번호를 \n 입력 후 확인 버튼을 눌러주세요.", "확인을 눌러주세요.")},[])
  
  function moveFocus(current, nextId) {
    current.value = current.value.replace(/[^0-9]/g, '');
    if (current.value.length >= 6 && nextId) {
      document.getElementById(nextId).focus();
    }
  }

  function validateNumberInput(object) {
    object.value = object.value.replace(/[^0-9]/g, '');
  }

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
            <input 
              className="krail-smsmaintellnumberinput" 
              type="tel" 
              maxLength="11" 
              onInput={(e) => validateNumberInput(e.target)} 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder=" - 없이 숫자만 입력"
            />
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
              <input 
                className="krail-genderdateinput" 
                type="text" 
                maxLength="1" 
                onInput={(e) => {validateNumberInput(e.target); moveFocus(e.target, '')}} 
                id="input2"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                placeholder="● "
              />
              <div className="krail-smsmainresidentregistrationlin" />
              <input 
                className="krail-birthdateinput1" 
                type="text" 
                maxLength="6" 
                onInput={(e) => {validateNumberInput(e.target); moveFocus(e.target, 'input2')}} 
                id="input1"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                placeholder=" ● ● ● ● ● ●"
              />
            </div>
          </div>
          <div className="krail-smsmainname">
            <input 
              className="krail-smsmainnameinput" 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="이름입력"
            />
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
