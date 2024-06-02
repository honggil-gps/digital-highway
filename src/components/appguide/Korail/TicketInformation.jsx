import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TicketInformation.css";

const TicketInformation = () => {
  const navigate = useNavigate();

  const onInformationMainCancelButtonClick = useCallback(() => {
    navigate("/maincontents/trainselect-09");
  }, [navigate]);

  const onTicketInformationHeaderCloseBuClick = useCallback(() => {
    navigate("/maincontents/trainselect-09");
  }, [navigate]);

  const onFooterPaymentButtonClick = useCallback(() => {
    navigate("/maincontents/payment-13");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("좌석을 지정했으니 이제 \n 예매 버튼을 눌러주세요.", "예매 정보가 맞는지 확인 후 \n [결제하기]를 눌러주세요.", "예매 정보가 맞는지 확인 후 \n [다음]을 눌러주세요.")},[])

  return (
    <div className="krail-ticketinformation-12">
      <main className="krail-ticketinformationmain">
        <div className="krail-ticketinformationmainnoticetex">
          <div className="krail-ticketinformationmainnoticetex1">
            <b className="krail-b134">
              <p className="krail-p52">
                승차권을 2매 이상 구매할 시, 홈페이지ㆍ코레일톡ㆍ역 창구를 통해
                동행자 마일리지 적립을 신청할 수 있습니다.
              </p>
              <p className="krail-p52">{`전달하기 제외승차권 `}</p>
              <p className="krail-p54">
                {" "}
                - 회원 본인만 사용 가능한 할인상품(힘내라청춘, 청소년 드림,
                정기승차권 등)
              </p>
              <p className="krail-p55"> - 좌석을 지정하지 않는 입석, 자유권 승차권</p>
            </b>
            <b className="krail-b135">
              <p className="krail-p56">ㆍ</p>
              <p className="krail-p56">&nbsp;</p>
              <p className="krail-p56">&nbsp;</p>
              <p className="krail-p55">ㆍ</p>
            </b>
          </div>
          <div className="krail-ticketinformationmainnoticetex2">
            <b className="krail-b136">
              <p className="krail-p58">
                코레일톡에서 구입한 승차권을 역창구에서 변경 시 할인이 취소 될
                수 있습니다.
              </p>
              <p className="krail-p58">
                할인 승차권의 할인율은 별도 공지없이 변경 될 수 있습니다.
              </p>
              <p className="krail-p58">
                <span>할인은 움임에만 적용하고 요금은 미적용</span>
                <span className="krail-span">
                  (특실/우등실은 운임과 요금으로 구분)
                </span>
                <span>{`되며, 최저운임 이하로 할인하지 않습니다. `}</span>
              </p>
              <p className="krail-p58">
                <span>{`승차 시 해당열차 승차권을 소지해야 하며, `}</span>
                <span className="krail-span">
                  사진이나 캡쳐한 화면은 유효한 승차권이 아닙니다.
                </span>
              </p>
              <p className="krail-p55">
                반려동물은 다른 고객에게 불편을 주지 않도록 케이스(이동장)에
                반드시 넣어주시기 바라며, 신체 일부가 밖으로 나오지 않도록
                해야합니다.
              </p>
            </b>
            <b className="krail-b137">
              <p className="krail-p56">ㆍ</p>
              <p className="krail-p56">&nbsp;</p>
              <p className="krail-p56">ㆍ</p>
              <p className="krail-p56">&nbsp;</p>
              <p className="krail-p56">ㆍ</p>
              <p className="krail-p56">&nbsp;</p>
              <p className="krail-p56">&nbsp;</p>
              <p className="krail-p56">ㆍ</p>
              <p className="krail-p56">&nbsp;</p>
              <p className="krail-p55">ㆍ</p>
            </b>
          </div>
          <div className="krail-ticketinformationmainnoticetex3">
            <b className="krail-b138">
              <span className="krail-txt14">
                <p className="krail-p58">ㆍ승차권 환불(반환) 위약금 확인하기</p>
                <p className="krail-p55">ㆍ휴대품 세부 승차기준</p>
              </span>
            </b>
            <b className="krail-b139">꼭 알아두세요!</b>
          </div>
        </div>
        <div className="krail-ticketinformationmainnoticetex4">
          <b className="krail-b140">
            <p className="krail-p56">ㆍ결제하지 않으면 예약이 취소됩니다.</p>
            <p className="krail-p56">
              ㆍ승차권을 발권받은 스마트폰에서만 확인할 수 있습니다.
            </p>
            <p className="krail-p56">
              ㆍ할인승차권 이용시에는 관련 신분증 또는 증명서를
            </p>
            <p className="krail-p73"> &nbsp; 소지하셔야 합니다.</p>
          </b>
        </div>
        <div className="krail-informationmainmyreservation">
          <div className="krail-informationmainbasketbutton">
            <div className="krail-div38">장바구니</div>
          </div>
          <button
            className="krail-informationmaincancelbutton"
            onClick={onInformationMainCancelButtonClick}
          >
            <div className="krail-div39">예약취소</div>
          </button>
          <div className="krail-informationmainmyreservationin">
            <div className="krail-div40">
              <span className="krail-txt14">
                <p className="krail-p55">결제기한: 2025년 05월 01일</p>
                <p className="krail-p55">
                  10분 이내 미결제시 승차권이 자동으로 취소됩니다.
                </p>
              </span>
            </div>
            <b className="krail-ktx-162-1014-container">
              <span className="krail-txt14">
                <p className="krail-p55">[KTX-산천 162] 부산(10:14) → 광명(12:52)</p>
                <p className="krail-p55">일반실 15호차 3A</p>
              </span>
            </b>
            <div className="krail-div41">1매</div>
            <b className="krail-b141">2025년 05월 01일 (목)</b>
          </div>
        </div>
      </main>
      <header className="krail-ticketinformationheader">
        <b className="krail-b142">승차권 정보 확인</b>
        <button
          className="krail-ticketinformationheaderclosebu"
          onClick={onTicketInformationHeaderCloseBuClick}
        >
          <img
            className="krail-ticketinformationheaderclosebu-icon"
            alt=""
            src="/appguide/Korail/ticketinformationheaderclosebuttonvector.svg"
          />
        </button>
      </header>
      <footer className="krail-ticketinformationfooter">
        <button
          className="krail-footerpaymentbutton"
          onClick={onFooterPaymentButtonClick}
        >
          <b className="krail-b143">결제하기</b>
        </button>
        <div className="krail-footerinformationbutton">
          <b className="krail-b144">부가정보</b>
        </div>
      </footer>
    </div>
  );
};

export default TicketInformation;
