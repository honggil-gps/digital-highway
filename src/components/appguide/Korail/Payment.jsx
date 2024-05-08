import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();

  const onHeaderCloseButtonClick = useCallback(() => {
    navigate("/trainselect-09");
  }, [navigate]);

  const onPaymentFooterButtonNextClick = useCallback(() => {
    navigate("/paymentmethod-14");
  }, [navigate]);

  const onPaymentFooterButtonCencelClick = useCallback(() => {
    navigate("/ticketinformation-12");
  }, [navigate]);

  return (
    <div className="payment-13">
      <main className="paymentmain">
        <div className="paymentmaincontent11">
          <div className="div42">
            <span className="txt16">
              <p className="p76">
                추가로 할인 가능한 항목이 있는 경우 할인을 적용해 주세요.
              </p>
              <p className="p76">{`추가 할인은 어른/청소년 기준, 예매한 매수만큼 `}</p>
              <p className="p76">적용할 수 있습니다.</p>
              <p className="p76">&nbsp;</p>
              <p className="p76">
                경증 : 장애의 정도가 심하지 않은 장애인(구 4-6급)
              </p>
              <p className="p76">중증 : 장애의 정도가 심한 장애인(구 1-3급)</p>
            </span>
          </div>
        </div>
        <div className="paymentmaincontent10">
          <div className="div43">병역 의무복무자 할인</div>
          <div className="paymentmaincontentbutton">
            <img
              className="paymentmaincontentbuttonvector-icon"
              alt=""
              src="/Appguide/Korail/paymentmaincontentbuttonvector.svg"
            />
            <div className="paymentmaincontentbuttonline" />
          </div>
        </div>
        <div className="paymentmaincontent9">
          <div className="div43">중증 보호자 할인</div>
          <div className="paymentmaincontentbutton1">
            <div className="div45">적용대상 없음</div>
            <img
              className="paymentmaincontentbuttonvector-icon1"
              alt=""
              src="/Appguide/Korail/paymentmaincontentbuttonvector1.svg"
            />
          </div>
        </div>
        <div className="paymentmaincontent8">
          <div className="div43">국가유공자 보호자 할인</div>
          <div className="paymentmaincontentbutton2">
            <div className="div45">적용대상 없음</div>
            <img
              className="paymentmaincontentbuttonvector-icon2"
              alt=""
              src="/Appguide/Korail/paymentmaincontentbuttonvector1.svg"
            />
          </div>
        </div>
        <div className="paymentmaincontent7">
          <div className="div43">국가유공자 할인</div>
          <div className="paymentmaincontentbutton3">
            <img
              className="paymentmaincontentbuttonvector-icon3"
              alt=""
              src="/Appguide/Korail/paymentmaincontentbuttonvector.svg"
            />
            <div className="paymentmaincontentbuttonline1" />
          </div>
        </div>
        <div className="paymentmaincontent6">
          <div className="div43">지연할인증 사용</div>
          <div className="paymentmaincontentbutton4">
            <img
              className="paymentmaincontentbuttonvector-icon4"
              alt=""
              src="/Appguide/Korail/paymentmaincontentbuttonvector.svg"
            />
            <div className="paymentmaincontentbuttonline2" />
          </div>
        </div>
        <div className="paymentmaincontent5">
          <div className="div50">할인쿠폰 적용</div>
          <div className="paymentmaincontentbutton5">
            <img
              className="paymentmaincontentbuttonvector-icon4"
              alt=""
              src="/Appguide/Korail/paymentmaincontentbuttonvector2.svg"
            />
            <div className="paymentmaincontentbuttonline3" />
          </div>
        </div>
        <div className="paymentmaincontent4">
          <b className="b145">49,900원</b>
          <div className="div51">할인 적용 전</div>
          <div className="div52">49,900원 (총 0원 할인)</div>
          <b className="b146">승차권</b>
        </div>
        <div className="paymentmaincontent3">
          <div className="paymentmaincontent3button">
            <div className="div53">상세</div>
          </div>
          <div className="a15">15호차 3A</div>
        </div>
        <div className="paymentmaincontent2">
          <div className="endstation">
            <b className="b147">광명</b>
            <div className="div54">12:52</div>
          </div>
          <div className="startstation">
            <b className="b147">구포</b>
            <div className="div54">10:14</div>
          </div>
          <img
            className="paymentmaincontent2arrow-icon"
            alt=""
            src="/Appguide/Korail/paymentmaincontent2arrow.svg"
          />
        </div>
        <div className="paymentmaincontent1">
          <b className="b149">2025년 05월 03일 (목)</b>
          <div className="ktx-1622">KTX-산천 162</div>
        </div>
      </main>
      <header className="paymentheader">
        <b className="b150">결제</b>
        <button
          className="headerclosebutton"
          onClick={onHeaderCloseButtonClick}
        >
          <img
            className="headerclosebuttonvector-icon"
            alt=""
            src="/Appguide/Korail/ticketinformationheaderclosebuttonvector.svg"
          />
        </button>
      </header>
      <footer className="paymentfooter">
        <div className="paymentfooterbuttonset">
          <button
            className="paymentfooterbuttonnext"
            onClick={onPaymentFooterButtonNextClick}
          >
            <b className="b151">다음</b>
          </button>
          <button
            className="paymentfooterbuttoncencel"
            onClick={onPaymentFooterButtonCencelClick}
          >
            <b className="b151">예약취소</b>
          </button>
        </div>
        <div className="paymentfooterprice">
          <b className="b153">총 1개</b>
          <b className="b154">49,900원</b>
        </div>
      </footer>
    </div>
  );
};

export default Payment;
