// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./PaymentMethod.css";

// const PaymentMethod = () => {
//   const navigate = useNavigate();

//   const onHeaderCloseButtonClick = useCallback(() => {
//     navigate("/maincontents/trainselect-09");
//   }, [navigate]);

//   const onPaymentFooterButtonIssuanceClick = useCallback(() => {
//     navigate("/maincontents/my-ticket");
//   }, [navigate]);

//   const onPaymentFooterButtonPrevClick = useCallback(() => {
//     navigate("/maincontents/payment-13");
//   }, [navigate]);

//   const onReloadButtonClick = useCallback(() => {
//     // 페이지를 다시 로드하는 작업을 수행합니다.
//     window.location.reload();
//   }, []);


//   function validateNumberInput(object) {
//     object.value = object.value.replace(/[^0-9]/g, '');
//   }

//   function moveFocus(current, nextId) {
//     current.value = current.value.replace(/[^0-9]/g, '');
//     if (current.value.length >= 4 && nextId) {
//       document.getElementById(nextId).focus();
//     }
//   }

//   return (
//     <div className="krail-paymentmethod-14">
//       <main className="krail-paymentmethodmain">
//         <div className="krail-paymentmethodmaininput">
//           <div className="krail-paymentmethodmaininput3">
//             <div className="krail-div56">이 카드를 자주쓰는 카드로 등록</div>
//             <div className="krail-div57">
//               해당 항목을 체크하시면 발행 완료 후 바로 자주쓰는 카드등록
//               화면으로 이동합니다.
//             </div>
//             <div className="krail-div58">
//               <span className="krail-txt17">
//                 <p className="krail-p81">자주쓰는</p>
//                 <p className="krail-p81">카드</p>
//               </span>
//             </div>
//             <input className="krail-paymentmethodmaininput3checkbo" type="checkbox" />
//           </div>
//           <div className="krail-paymentmethodmaininput2">
//             <div className="krail-paymentmethodmaininput2check">
//               <div className="krail-div59">개인정보 수집 및 이용 동의</div>
//               <input
//                 className="krail-paymentmethodmaininput2checkbo"
//                 type="checkbox"
//               />
              
//             </div>
//             <div className="krail-paymentmethodmaininput2card">
//               <div className="krail-installmentbutton">
//                 <div className="krail-div60">일시불</div>
//                 <img
//                   className="krail-vector-icon21"
//                   alt=""
//                   src="/appguide/Korail/vector2.svg"
//                 />
//               </div>
//               <div className="krail-birthdate">
//                 <div className="krail-div61">주민번호 앞 6자리</div>
//                 <input className="krail-birthdateinput" type="text" maxlength="6" oninput="validateNumberInput(this)"  />
//               </div>
//               <div className="krail-cardtypeselect">
//                 <div className="krail-cardtypeselect2">
//                   <div className="krail-div62">법인</div>
//                   <img
//                     className="krail-cardtypeselect2radio-icon"
//                     alt=""
//                     src="/appguide/Korail/cardtypeselect2radio.svg"
//                   />
//                 </div>
//                 <div className="krail-cardtypeselect1">
//                   <div className="krail-div63">개인</div>
//                   <img
//                     className="krail-cardtypeselect2radio-icon"
//                     alt=""
//                     src="/appguide/Korail/cardtypeselect1radio.svg"
//                   />
//                 </div>
//               </div>
//               <div className="krail-password">
//                 <div className="krail-div64">**</div>
//                 <input className="krail-passwordinput" type="text" maxlength="2" oninput="validateNumberInput(this)" />
//               </div>
//               <div className="krail-expirationdate">
//                 <div className="krail-dateyear">
//                   <div className="krail-div65">년</div>
//                   <input
//                     className="krail-dateyearinput"
//                     placeholder="YYYY"
//                     type="text" maxlength="4" oninput="validateNumberInput(this)" 
//                   />
//                 </div>
//                 <div className="krail-datemonth">
//                   <div className="krail-div64">월</div>
//                   <input
//                     className="krail-datemonthinput"
//                     placeholder="MM"
//                     type="text" maxlength="2" oninput="validateNumberInput(this)" 
//                   />
//                 </div>
//               </div>
//               <div className="krail-newcardinput">
//                 <input className="krail-newcardinput1" type="text" 
//                 maxlength="4" oninput="validateNumberInput(this)" oninput="moveFocus(this, 'input2')" id="input1" />

//                 <input className="krail-newcardinput1" type="text" 
//                 maxlength="4" oninput="validateNumberInput(this)" oninput="moveFocus(this, 'input3')" id="input2" />

//                 <input className="krail-newcardinput1" type="text" 
//                 maxlength="4" oninput="validateNumberInput(this)" oninput="moveFocus(this, 'input4')" id="input3" />

//                 <input className="krail-newcardinput1" type="text" 
//                 maxlength="4" oninput="validateNumberInput(this)" oninput="moveFocus(this, '')" id="input4" />
//                 {/* <input className="krail-newcardinput1" type="number" /> */}
//               </div>
//               <div className="krail-registeredcardbutton">
//                 <div className="krail-div67">등록된 카드가 없습니다.</div>
//                 <img
//                   className="krail-vector-icon21"
//                   alt=""
//                   src="/appguide/Korail/vector2.svg"
//                 />
//               </div>
//             </div>
//             <div className="krail-paymentmethodmaininput2text">
//               <div className="krail-div68">할부기간</div>
//               <div className="krail-div69">인증 번호</div>
//               <div className="krail-div70">카드 종류</div>
//               <div className="krail-div71">비밀번호</div>
//               <div className="krail-div72">유효기간</div>
//               <div className="krail-div73">카드번호</div>
//               <div className="krail-div74">자주쓰는 카드</div>
//             </div>
//           </div>
//           <div className="krail-paymentmethodmaininput1" onClick={onReloadButtonClick}>
//             <b className="krail-b155" >다시입력</b>
//             <img
//               className="krail-paymentmethodmaininput1reloadb-icon"
//               alt=""
//               src="/appguide/Korail/paymentmethodmaininput1reloadbutton.svg"
//             />
//           </div>
//         </div>
//         <div className="krail-paymentmethodmaininfo">
//           <div className="krail-paymentmethodmaininfo3">
//             <b className="krail-b156">신용(체크)카드</b>
//             <img
//               className="krail-paymentmethodmaininfo3button-icon"
//               alt=""
//               src="/appguide/Korail/paymentmethodmaininfo3button.svg"
//             />
//           </div>
//           <div className="krail-paymentmethodmaininfo2">
//             <div className="krail-div75">포인트 사용</div>
//             <div className="krail-ktx7">KTX 마일리지</div>
//             <div className="krail-ktx8">KTX 마일리지</div>
//             <div className="krail-div76">0 점</div>
//             <img
//               className="krail-paymentmethodmaininfo2button2-icon"
//               alt=""
//               src="/appguide/Korail/paymentmethodmaininfo2button2.svg"
//             />
//             <div className="krail-paymentmethodmaininfo2button1">
//               <div className="krail-div77">사용</div>
//             </div>
//           </div>
//           <div className="krail-paymentmethodmaininfo1">
//             <b className="krail-b157">49,900원</b>
//             <div className="krail-div78">할인 적용 전</div>
//             <div className="krail-div79">49,900원 (총 0원 할인)</div>
//             <b className="krail-b158">승차권</b>
//           </div>
//         </div>
//       </main>
//       <header className="krail-paymentmethodheader">
//         <div className="krail-paymentmethodheaderbutton">
//           <div className="krail-easypaymentbutton">
//             <b className="krail-b159">간편결제</b>
//           </div>
//           <div className="krail-cardpaymentbutton">
//             <b className="krail-b160">카드결제</b>
//           </div>
//         </div>
//         <div className="krail-paymentmethodheadertitle">
//           <b className="krail-b161">결제</b>
//           <button
//             className="krail-headerclosebutton1"
//             onClick={onHeaderCloseButtonClick}
//           >
//             <img
//               className="krail-headerclosebuttonvector-icon1"
//               alt=""
//               src="/appguide/Korail/ticketinformationheaderclosebuttonvector.svg"
//             />
//           </button>
//         </div>
//       </header>
//       <footer className="krail-paymentmethodfooter">
//         <div className="krail-paymentfooterbuttonset1">
//           <button
//             className="krail-paymentfooterbuttonissuance"
//             onClick={onPaymentFooterButtonIssuanceClick}
//           >
//             <b className="krail-b162">결제/발권</b>
//           </button>
//           <button
//             className="krail-paymentfooterbuttonprev"
//             onClick={onPaymentFooterButtonPrevClick}
//           >
//             <b className="krail-b162">이전</b>
//           </button>
//         </div>
//         <div className="krail-paymentfooterprice1">
//           <b className="krail-b164">총 1개</b>
//           <b className="krail-b165">49,900원</b>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PaymentMethod;


import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentMethod.css";

const PaymentMethod = () => {
  const navigate = useNavigate();

  const onHeaderCloseButtonClick = useCallback(() => {
    navigate("/maincontents/trainselect-09");
  }, [navigate]);

  const onPaymentFooterButtonPrevClick = useCallback(() => {
    navigate("/maincontents/payment-13");
  }, [navigate]);

  const onReloadButtonClick = useCallback(() => {
    // 페이지를 다시 로드하는 작업을 수행합니다.
    window.location.reload();
  }, []);

  const onPaymentFooterButtonIssuanceClick = useCallback(() => {
    const consentCheckbox = document.getElementById("consentCheckbox");
    const inputFields = document.querySelectorAll(".krail-newcardinput1");
    const allInputsFilled = Array.from(inputFields).every((input) => input.value !== "");
    const expirationYearInput = document.querySelector(".krail-dateyearinput");
    const expirationMonthInput = document.querySelector(".krail-datemonthinput");
    const passwordInput = document.querySelector(".krail-passwordinput");
    const authNumberInput = document.querySelector(".krail-birthdateinput");
    
    if (consentCheckbox.checked && allInputsFilled && expirationYearInput.value !== "" && expirationMonthInput.value !== "" && passwordInput.value !== "" && authNumberInput.value !== "") {
      navigate("/maincontents/my-ticket");
    } else {
      if (!consentCheckbox.checked) {
        alert("개인정보 수집 및 이용 동의에 체크해주세요.");
      } else if (!allInputsFilled|| expirationYearInput.value === "" || expirationMonthInput.value === "" || passwordInput.value === "" || authNumberInput.value === "") {
        alert("카드 정보를 모두 입력해주세요.");
      }
    }
  }, [navigate]);

  function validateNumberInput(object) {
    object.value = object.value.replace(/[^0-9]/g, '');
  }

  function moveFocus(current, nextId) {
    current.value = current.value.replace(/[^0-9]/g, '');
    if (current.value.length >= 4 && nextId) {
      document.getElementById(nextId).focus();
    }
  }

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("예매 정보가 맞는지 확인 후 \n [다음]을 눌러주세요.", "스크롤을 내려 결제할 \n 카드 정보를 입력하신 후 \n '개인정보 수집 및 이용 동의'를 \n 선택 후 [결제/발권] 버튼을 \n 눌러주세요. 잘못 입력 시 \n '다시 입력'을 눌러주세요.", "발권이 완료되었습니다! \n 환불이 필요한 경우 \n 스크롤을 내려 \n [반환하기]를 눌러주세요.")},[])

  return (
    <div className="krail-paymentmethod-14">
      <main className="krail-paymentmethodmain">
        <div className="krail-paymentmethodmaininput">
          <div className="krail-paymentmethodmaininput3">
            <div className="krail-div56">이 카드를 자주쓰는 카드로 등록</div>
            <div className="krail-div57">
              해당 항목을 체크하시면 발행 완료 후 바로 자주쓰는 카드등록
              화면으로 이동합니다.
            </div>
            <div className="krail-div58">
              <span className="krail-txt17">
                <p className="krail-p81">자주쓰는</p>
                <p className="krail-p81">카드</p>
              </span>
            </div>
            <input className="krail-paymentmethodmaininput3checkbo" type="checkbox" />
          </div>
          <div className="krail-paymentmethodmaininput2">
            <div className="krail-paymentmethodmaininput2check">
              <div className="krail-div59">개인정보 수집 및 이용 동의</div>
              <input
                id="consentCheckbox"
                className="krail-paymentmethodmaininput2checkbo"
                type="checkbox"
              />
            </div>
            <div className="krail-paymentmethodmaininput2card">
              <div className="krail-installmentbutton">
                <div className="krail-div60">일시불</div>
                <img
                  className="krail-vector-icon21"
                  alt=""
                  src="/appguide/Korail/vector2.svg"
                />
              </div>
              <div className="krail-birthdate">
                <div className="krail-div61">주민번호 앞 6자리</div>
                <input className="krail-birthdateinput" type="text" maxlength="6" onInput={(e) => validateNumberInput(e.target)} />
              </div>
              <div className="krail-cardtypeselect">
                <div className="krail-cardtypeselect2">
                  <div className="krail-div62">법인</div>
                  <img
                    className="krail-cardtypeselect2radio-icon"
                    alt=""
                    src="/appguide/Korail/cardtypeselect2radio.svg"
                  />
                </div>
                <div className="krail-cardtypeselect1">
                  <div className="krail-div63">개인</div>
                  <img
                    className="krail-cardtypeselect2radio-icon"
                    alt=""
                    src="/appguide/Korail/cardtypeselect1radio.svg"
                  />
                </div>
              </div>
              <div className="krail-password">
                <div className="krail-div64">**</div>
                <input className="krail-passwordinput" type="text" maxlength="2" onInput={(e) => validateNumberInput(e.target)} />
              </div>
              <div className="krail-expirationdate">
                <div className="krail-dateyear">
                  <div className="krail-div65">년</div>
                  <input
                    className="krail-dateyearinput"
                    placeholder="YYYY"
                    type="text" maxlength="4" onInput={(e) => validateNumberInput(e.target)}
                  />
                </div>
                <div className="krail-datemonth">
                  <div className="krail-div64">월</div>
                  <input
                    className="krail-datemonthinput"
                    placeholder="MM"
                    type="text" maxlength="2" onInput={(e) => validateNumberInput(e.target)}
                  />
                </div>
              </div>
              <div className="krail-newcardinput">
                <input className="krail-newcardinput1" type="text"
                  maxlength="4" onInput={(e) => {validateNumberInput(e.target); moveFocus(e.target, 'input2')}} id="input1" />

                <input className="krail-newcardinput1" type="text"
                  maxlength="4" onInput={(e) => {validateNumberInput(e.target); moveFocus(e.target, 'input3')}} id="input2" />

                <input className="krail-newcardinput1" type="text"
                  maxlength="4" onInput={(e) => {validateNumberInput(e.target); moveFocus(e.target, 'input4')}} id="input3" />

                <input className="krail-newcardinput1" type="text"
                  maxlength="4" onInput={(e) => {validateNumberInput(e.target); moveFocus(e.target, '')}} id="input4" />
              </div>
              <div className="krail-registeredcardbutton">
                <div className="krail-div67">등록된 카드가 없습니다.</div>
                <img
                  className="krail-vector-icon21"
                  alt=""
                  src="/appguide/Korail/vector2.svg"
                />
              </div>
            </div>
            <div className="krail-paymentmethodmaininput2text">
              <div className="krail-div68">할부기간</div>
              <div className="krail-div69">인증 번호</div>
              <div className="krail-div70">카드 종류</div>
              <div className="krail-div71">비밀번호</div>
              <div className="krail-div72">유효기간</div>
              <div className="krail-div73">카드번호</div>
              <div className="krail-div74">자주쓰는 카드</div>
            </div>
          </div>
          <div className="krail-paymentmethodmaininput1" onClick={onReloadButtonClick}>
            <b className="krail-b155">다시입력</b>
            <img
              className="krail-paymentmethodmaininput1reloadb-icon"
              alt=""
              src="/appguide/Korail/paymentmethodmaininput1reloadbutton.svg"
            />
          </div>
        </div>
        <div className="krail-paymentmethodmaininfo">
          <div className="krail-paymentmethodmaininfo3">
            <b className="krail-b156">신용(체크)카드</b>
            <img
              className="krail-paymentmethodmaininfo3button-icon"
              alt=""
              src="/appguide/Korail/paymentmethodmaininfo3button.svg"
            />
          </div>
          <div className="krail-paymentmethodmaininfo2">
            <div className="krail-div75">포인트 사용</div>
            <div className="krail-ktx7">KTX 마일리지</div>
            <div className="krail-ktx8">KTX 마일리지</div>
            <div className="krail-div76">0 점</div>
            <img
              className="krail-paymentmethodmaininfo2button2-icon"
              alt=""
              src="/appguide/Korail/paymentmethodmaininfo2button2.svg"
            />
            <div className="krail-paymentmethodmaininfo2button1">
              <div className="krail-div77">사용</div>
            </div>
          </div>
          <div className="krail-paymentmethodmaininfo1">
            <b className="krail-b157">49,900원</b>
            <div className="krail-div78">할인 적용 전</div>
            <div className="krail-div79">49,900원 (총 0원 할인)</div>
            <b className="krail-b158">승차권</b>
          </div>
        </div>
      </main>
      <header className="krail-paymentmethodheader">
        <div className="krail-paymentmethodheaderbutton">
          <div className="krail-easypaymentbutton">
            <b className="krail-b159">간편결제</b>
          </div>
          <div className="krail-cardpaymentbutton">
            <b className="krail-b160">카드결제</b>
          </div>
        </div>
        <div className="krail-paymentmethodheadertitle">
          <b className="krail-b161">결제</b>
          <button
            className="krail-headerclosebutton1"
            onClick={onHeaderCloseButtonClick}
          >
            <img
              className="krail-headerclosebuttonvector-icon1"
              alt=""
              src="/appguide/Korail/ticketinformationheaderclosebuttonvector.svg"
            />
          </button>
        </div>
      </header>
      <footer className="krail-paymentmethodfooter">
        <div className="krail-paymentfooterbuttonset1">
          <button
            className="krail-paymentfooterbuttonissuance"
            onClick={onPaymentFooterButtonIssuanceClick}
          >
            <b className="krail-b162">결제/발권</b>
          </button>
          <button
            className="krail-paymentfooterbuttonprev"
            onClick={onPaymentFooterButtonPrevClick}
          >
            <b className="krail-b162">이전</b>
          </button>
        </div>
        <div className="krail-paymentfooterprice1">
          <b className="krail-b164">총 1개</b>
          <b className="krail-b165">49,900원</b>
        </div>
      </footer>
    </div>
  );
};

export default PaymentMethod;
