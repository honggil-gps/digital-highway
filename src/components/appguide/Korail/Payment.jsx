import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();

  const onHeaderCloseButtonClick = useCallback(() => {
    navigate("/maincontents/trainselect-09");
  }, [navigate]);

  const onPaymentFooterButtonNextClick = useCallback(() => {
    navigate("/maincontents/paymentmethod-14");
  }, [navigate]);

  const onPaymentFooterButtonCencelClick = useCallback(() => {
    navigate("/maincontents/ticketinformation-12");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("예매 정보가 맞는지 확인 후 \n [결제하기]를 눌러주세요.", "예매 정보가 맞는지 확인 후 \n [다음]을 눌러주세요.", "스크롤을 내려 결제할 \n 카드 정보를 입력하신 후 \n '개인정보 수집 및 이용 동의'를 \n 선택 후 [결제/발권] 버튼을 \n 눌러주세요. 잘못 입력 시 \n '다시 입력'을 눌러주세요.")},[])

  return (
    <div className="krail-payment-13">
      <main className="krail-paymentmain">
        <div className="krail-paymentmaincontent11">
          <div className="krail-div42">
            <span className="krail-txt16">
              <p className="krail-p76">
                추가로 할인 가능한 항목이 있는 경우 할인을 적용해 주세요.
              </p>
              <p className="krail-p76">{`추가 할인은 어른/청소년 기준, 예매한 매수만큼 `}</p>
              <p className="krail-p76">적용할 수 있습니다.</p>
              <p className="krail-p76">&nbsp;</p>
              <p className="krail-p76">
                경증 : 장애의 정도가 심하지 않은 장애인(구 4-6급)
              </p>
              <p className="krail-p76">중증 : 장애의 정도가 심한 장애인(구 1-3급)</p>
            </span>
          </div>
        </div>
        <div className="krail-paymentmaincontent10">
          <div className="krail-div43">병역 의무복무자 할인</div>
          <div className="krail-paymentmaincontentbutton">
            <img
              className="krail-paymentmaincontentbuttonvector-icon"
              alt=""
              src="/appguide/Korail/paymentmaincontentbuttonvector.svg"
            />
            <div className="krail-paymentmaincontentbuttonline" />
          </div>
        </div>
        <div className="krail-paymentmaincontent9">
          <div className="krail-div43">중증 보호자 할인</div>
          <div className="krail-paymentmaincontentbutton1">
            <div className="krail-div45">적용대상 없음</div>
            <img
              className="krail-paymentmaincontentbuttonvector-icon1"
              alt=""
              src="/appguide/Korail/paymentmaincontentbuttonvector1.svg"
            />
          </div>
        </div>
        <div className="krail-paymentmaincontent8">
          <div className="krail-div43">국가유공자 보호자 할인</div>
          <div className="krail-paymentmaincontentbutton2">
            <div className="krail-div45">적용대상 없음</div>
            <img
              className="krail-paymentmaincontentbuttonvector-icon2"
              alt=""
              src="/appguide/Korail/paymentmaincontentbuttonvector1.svg"
            />
          </div>
        </div>
        <div className="krail-paymentmaincontent7">
          <div className="krail-div43">국가유공자 할인</div>
          <div className="krail-paymentmaincontentbutton3">
            <img
              className="krail-paymentmaincontentbuttonvector-icon3"
              alt=""
              src="/appguide/Korail/paymentmaincontentbuttonvector.svg"
            />
            <div className="krail-paymentmaincontentbuttonline1" />
          </div>
        </div>
        <div className="krail-paymentmaincontent6">
          <div className="krail-div43">지연할인증 사용</div>
          <div className="krail-paymentmaincontentbutton4">
            <img
              className="krail-paymentmaincontentbuttonvector-icon4"
              alt=""
              src="/appguide/Korail/paymentmaincontentbuttonvector.svg"
            />
            <div className="krail-paymentmaincontentbuttonline2" />
          </div>
        </div>
        <div className="krail-paymentmaincontent5">
          <div className="krail-div50">할인쿠폰 적용</div>
          <div className="krail-paymentmaincontentbutton5">
            <img
              className="krail-paymentmaincontentbuttonvector-icon4"
              alt=""
              src="/appguide/Korail/paymentmaincontentbuttonvector2.svg"
            />
            <div className="krail-paymentmaincontentbuttonline3" />
          </div>
        </div>
        <div className="krail-paymentmaincontent4">
          <b className="krail-b145">49,900원</b>
          <div className="krail-div51">할인 적용 전</div>
          <div className="krail-div52">49,900원 (총 0원 할인)</div>
          <b className="krail-b146">승차권</b>
        </div>
        <div className="krail-paymentmaincontent3">
          <div className="krail-paymentmaincontent3button">
            <div className="krail-div53">상세</div>
          </div>
          <div className="krail-a15">15호차 3A</div>
        </div>
        <div className="krail-paymentmaincontent2">
          <div className="krail-endstation">
            <b className="krail-b147">광명</b>
            <div className="krail-div54">12:52</div>
          </div>
          <div className="krail-startstation">
            <b className="krail-b147">부산</b>
            <div className="krail-div54">10:14</div>
          </div>
          <img
            className="krail-paymentmaincontent2arrow-icon"
            alt=""
            src="/appguide/Korail/paymentmaincontent2arrow.svg"
          />
        </div>
        <div className="krail-paymentmaincontent1">
          <b className="krail-b149">2025년 05월 01일 (목)</b>
          <div className="krail-ktx-1622">KTX-산천 162</div>
        </div>
      </main>
      <header className="krail-paymentheader">
        <b className="krail-b150">결제</b>
        <button
          className="krail-headerclosebutton"
          onClick={onHeaderCloseButtonClick}
        >
          <img
            className="krail-headerclosebuttonvector-icon"
            alt=""
            src="/appguide/Korail/ticketinformationheaderclosebuttonvector.svg"
          />
        </button>
      </header>
      <footer className="krail-paymentfooter">
        <div className="krail-paymentfooterbuttonset">
          <button
            className="krail-paymentfooterbuttonnext"
            onClick={onPaymentFooterButtonNextClick}
          >
            <b className="krail-b151">다음</b>
          </button>
          <button
            className="krail-paymentfooterbuttoncencel"
            onClick={onPaymentFooterButtonCencelClick}
          >
            <b className="krail-b151">예약취소</b>
          </button>
        </div>
        <div className="krail-paymentfooterprice">
          <b className="krail-b153">총 1개</b>
          <b className="krail-b154">49,900원</b>
        </div>
      </footer>
    </div>
  );
};

export default Payment;
