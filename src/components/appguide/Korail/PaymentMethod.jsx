import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentMethod.css";

const PaymentMethod = () => {
  const navigate = useNavigate();

  const onHeaderCloseButtonClick = useCallback(() => {
    navigate("/trainselect-09");
  }, [navigate]);

  const onPaymentFooterButtonIssuanceClick = useCallback(() => {
    navigate("/my-ticket");
  }, [navigate]);

  const onPaymentFooterButtonPrevClick = useCallback(() => {
    navigate("/payment-13");
  }, [navigate]);

  return (
    <div className="paymentmethod-14">
      <main className="paymentmethodmain">
        <div className="paymentmethodmaininput">
          <div className="paymentmethodmaininput3">
            <div className="div56">이 카드를 자주쓰는 카드로 등록</div>
            <div className="div57">
              해당 항목을 체크하시면 발행 완료 후 바로 자주쓰는 카드등록
              화면으로 이동합니다.
            </div>
            <div className="div58">
              <span className="txt17">
                <p className="p81">자주쓰는</p>
                <p className="p81">카드</p>
              </span>
            </div>
            <input className="paymentmethodmaininput3checkbo" type="checkbox" />
          </div>
          <div className="paymentmethodmaininput2">
            <div className="paymentmethodmaininput2check">
              <div className="div59">개인정보 수집 및 이용 동의</div>
              <input
                className="paymentmethodmaininput2checkbo"
                type="checkbox"
              />
            </div>
            <div className="paymentmethodmaininput2card">
              <div className="installmentbutton">
                <div className="div60">일시불</div>
                <img
                  className="vector-icon21"
                  alt=""
                  src="/Appguide/Korail/vector2.svg"
                />
              </div>
              <div className="birthdate">
                <div className="div61">주민번호 앞 6자리</div>
                <input className="birthdateinput" type="number" />
              </div>
              <div className="cardtypeselect">
                <div className="cardtypeselect2">
                  <div className="div62">법인</div>
                  <img
                    className="cardtypeselect2radio-icon"
                    alt=""
                    src="/Appguide/Korail/cardtypeselect2radio.svg"
                  />
                </div>
                <div className="cardtypeselect1">
                  <div className="div63">개인</div>
                  <img
                    className="cardtypeselect2radio-icon"
                    alt=""
                    src="/Appguide/Korail/cardtypeselect1radio.svg"
                  />
                </div>
              </div>
              <div className="password">
                <div className="div64">**</div>
                <input className="passwordinput" type="number" />
              </div>
              <div className="expirationdate">
                <div className="dateyear">
                  <div className="div65">년</div>
                  <input
                    className="dateyearinput"
                    placeholder="YYYY"
                    type="number"
                  />
                </div>
                <div className="datemonth">
                  <div className="div64">월</div>
                  <input
                    className="datemonthinput"
                    placeholder="MM"
                    type="number"
                  />
                </div>
              </div>
              <div className="newcardinput">
                <input className="newcardinput1" type="number" />
                <input className="newcardinput1" type="number" />
                <input className="newcardinput1" type="number" />
                <input className="newcardinput1" type="number" />
              </div>
              <div className="registeredcardbutton">
                <div className="div67">등록된 카드가 없습니다.</div>
                <img
                  className="vector-icon21"
                  alt=""
                  src="/Appguide/Korail/vector2.svg"
                />
              </div>
            </div>
            <div className="paymentmethodmaininput2text">
              <div className="div68">할부기간</div>
              <div className="div69">인증 번호</div>
              <div className="div70">카드 종류</div>
              <div className="div71">비밀번호</div>
              <div className="div72">유효기간</div>
              <div className="div73">카드번호</div>
              <div className="div74">자주쓰는 카드</div>
            </div>
          </div>
          <div className="paymentmethodmaininput1">
            <b className="b155">다시입력</b>
            <img
              className="paymentmethodmaininput1reloadb-icon"
              alt=""
              src="/Appguide/Korail/paymentmethodmaininput1reloadbutton.svg"
            />
          </div>
        </div>
        <div className="paymentmethodmaininfo">
          <div className="paymentmethodmaininfo3">
            <b className="b156">신용(체크)카드</b>
            <img
              className="paymentmethodmaininfo3button-icon"
              alt=""
              src="/Appguide/Korail/paymentmethodmaininfo3button.svg"
            />
          </div>
          <div className="paymentmethodmaininfo2">
            <div className="div75">포인트 사용</div>
            <div className="ktx7">KTX 마일리지</div>
            <div className="ktx8">KTX 마일리지</div>
            <div className="div76">0 점</div>
            <img
              className="paymentmethodmaininfo2button2-icon"
              alt=""
              src="/Appguide/Korail/paymentmethodmaininfo2button2.svg"
            />
            <div className="paymentmethodmaininfo2button1">
              <div className="div77">사용</div>
            </div>
          </div>
          <div className="paymentmethodmaininfo1">
            <b className="b157">49,900원</b>
            <div className="div78">할인 적용 전</div>
            <div className="div79">49,900원 (총 0원 할인)</div>
            <b className="b158">승차권</b>
          </div>
        </div>
      </main>
      <header className="paymentmethodheader">
        <div className="paymentmethodheaderbutton">
          <div className="easypaymentbutton">
            <b className="b159">간편결제</b>
          </div>
          <div className="cardpaymentbutton">
            <b className="b160">카드결제</b>
          </div>
        </div>
        <div className="paymentmethodheadertitle">
          <b className="b161">결제</b>
          <button
            className="headerclosebutton1"
            onClick={onHeaderCloseButtonClick}
          >
            <img
              className="headerclosebuttonvector-icon1"
              alt=""
              src="/Appguide/Korail/ticketinformationheaderclosebuttonvector.svg"
            />
          </button>
        </div>
      </header>
      <footer className="paymentmethodfooter">
        <div className="paymentfooterbuttonset1">
          <button
            className="paymentfooterbuttonissuance"
            onClick={onPaymentFooterButtonIssuanceClick}
          >
            <b className="b162">결제/발권</b>
          </button>
          <button
            className="paymentfooterbuttonprev"
            onClick={onPaymentFooterButtonPrevClick}
          >
            <b className="b162">이전</b>
          </button>
        </div>
        <div className="paymentfooterprice1">
          <b className="b164">총 1개</b>
          <b className="b165">49,900원</b>
        </div>
      </footer>
    </div>
  );
};

export default PaymentMethod;
