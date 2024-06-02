import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MyTicket.css";

const MyTicket = () => {
  const navigate = useNavigate();

  const onMainTicketButton2Click = useCallback(() => {
    navigate("/maincontents/refund-16");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/maincontents/refund-16");
  }, [navigate]);

  const onFooterButton4ImageClick = useCallback(() => {
    navigate("/maincontents/my-ticket");
  }, [navigate]);

  const onFooterButton1Click = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("스크롤을 내려 결제할 \n 카드 정보를 입력하신 후 \n '개인정보 수집 및 이용 동의'를 \n 선택 후 [결제/발권] 버튼을 \n 눌러주세요. 잘못 입력 시 \n '다시 입력'을 눌러주세요.", "발권이 완료되었습니다! \n 환불이 필요한 경우 \n 스크롤을 내려 \n [반환하기]를 눌러주세요.", "환불할 승차권을 선택 후 \n [반환하기]를 눌러주세요.")},[])

  return (
    <div className="krail-myticket-15">
      <main className="krail-myticketmain">
        <div className="krail-mainticketbuttonset">
          <button className="krail-mainticketbutton3">
            <b className="krail-b166">여행변경</b>
          </button>
          <button
            className="krail-mainticketbutton2"
            onClick={onMainTicketButton2Click}
          >
            <b className="krail-b167" onClick={onTextClick}>
              반환하기
            </b>
          </button>
          <button className="krail-mainticketbutton1">
            <b className="krail-b168">전달하기</b>
          </button>
        </div>
        <div className="krail-mainticketcurrenttime">
          <div className="krail-div80">
            <span className="krail-txt18">
              <p className="krail-p83">{`2025-05-01 `}</p>
              <p className="krail-p83">09:13:45</p>
            </span>
          </div>
        </div>
        <div className="krail-mainticketexpandbutton">
          <img
            className="krail-vector-icon23"
            alt=""
            src="/appguide/Korail/vector31.svg"
          />
          <div className="krail-div81">펼쳐보기</div>
        </div>
        <div className="krail-mainticketfeatures">
          <div className="krail-mainticketfeatures4">
            <div className="krail-div82">
              <span className="krail-txt18">
                <p className="krail-p83">승하차</p>
                <p className="krail-p83">도우미 신청</p>
              </span>
            </div>
            <img
              className="krail-mainticketfeatures4icon"
              alt=""
              src="/appguide/Korail/mainticketfeatures4icon.svg"
            />
          </div>
          <div className="krail-mainticketfeatures3">
            <div className="krail-sms">
              <span className="krail-sms-txt">
                <p className="krail-p83">보호자</p>
                <p className="krail-p83">안심SMS</p>
              </span>
            </div>
            <img
              className="krail-mainticketfeatures3icon"
              alt=""
              src="/appguide/Korail/mainticketfeatures3icon.svg"
            />
          </div>
          <div className="krail-mainticketfeatures2">
            <div className="krail-ktx9">KTX공항버스</div>
            <img
              className="krail-mainticketfeatures2icon"
              alt=""
              src="/appguide/Korail/mainticketfeatures2icon.svg"
            />
          </div>
          <div className="krail-mainticketfeatures1">
            <div className="krail-div83">철도범죄신고</div>
            <img
              className="krail-mainticketfeatures1icon"
              alt=""
              src="/appguide/Korail/mainticketfeatures1icon.svg"
            />
          </div>
        </div>
        <div className="krail-maintickettrainnumber">
          <div className="krail-div84">승차권번호</div>
          <div className="krail-div85">82235-0501-10973-99</div>
        </div>
        <div className="krail-mainticketseatinfo2">
          <div className="krail-div86">일반실</div>
          <div className="krail-div87">순방향</div>
          <div className="krail-div88">어른</div>
          <div className="krail-mainticketseatinfo2line2" />
          <div className="krail-mainticketseatinfo2line1" />
        </div>
        <div className="krail-mainticketseatinfo1">
          <div className="krail-mainticketseatinfo4">
            <img
              className="krail-mainticketseatinfo4image-icon"
              alt=""
              src="/appguide/Korail/mainticketseatinfo4image@2x.png"
            />
            <div className="krail-mainticketseatinfo3title">
              <div className="krail-div89">운임영수증</div>
            </div>
          </div>
          <div className="krail-mainticketseatinfo3">
            <b className="krail-a16">3A</b>
            <div className="krail-mainticketseatinfo3title1">
              <div className="krail-div89">좌석번호</div>
            </div>
          </div>
          <div className="krail-mainticketseatinfo21">
            <b className="krail-b169">
              <span className="krail-sms-txt">
                <span>15</span>
                <span className="krail-span2">호차</span>
              </span>
            </b>
            <div className="krail-mainticketseatinfo2title">
              <div className="krail-div89">호차번호</div>
            </div>
          </div>
          <div className="krail-mainticketseatinfo11">
            <b className="krail-b170">
              <span className="krail-sms-txt">
                <p className="krail-p83">15분전에</p>
                <p className="krail-p83">표시됩니다</p>
              </span>
            </b>
            <img
              className="krail-mainticketseatinfo1reloadimage-icon"
              alt=""
              src="/appguide/Korail/mainticketseatinfo1reloadimage.svg"
            />
            <div className="krail-mainticketseatinfo2title">
              <div className="krail-div92">타는곳번호</div>
            </div>
          </div>
        </div>
        <div className="krail-maintickettraininfo">
          <div className="krail-ktx-1623">KTX-산천 162</div>
          <div className="krail-maintickettraintimebutton">
            <div className="krail-div93">열차시각</div>
          </div>
        </div>
        <div className="krail-mainticketinfodestination">
          <img
            className="krail-mainticketinfodestinationarrow-icon"
            alt=""
            src="/appguide/Korail/mainticketinfodestinationarrow.svg"
          />
          <div className="krail-arrivaltime">
            <b className="krail-b171">광명</b>
            <b className="krail-b172">10:14</b>
          </div>
          <div className="krail-departuretime">
            <b className="krail-b171">부산</b>
            <b className="krail-b172">12:52</b>
          </div>
        </div>
        <div className="krail-mainticketaaddinfobutton">
          <b className="krail-b175">부가정보</b>
          <img
            className="krail-mainticketaaddinfobuttonvector-icon"
            alt=""
            src="/appguide/Korail/mainticketaaddinfobuttonvector.svg"
          />
        </div>
        <div className="krail-mainticketinfotitle">
          <b className="krail-b176">2025년 05월 01일 (목)</b>
          <b className="krail-b177">스마트티켓1매</b>
        </div>
      </main>
      <footer className="krail-myticketfooter">
        <div className="krail-myticketfooterbuttonset">
          <div className="krail-footerbutton42">
            <b className="krail-b178">승차권확인</b>
            <button
              className="krail-footerbutton4image2"
              onClick={onFooterButton4ImageClick}
            />
            <div className="krail-footerbutton4rectangle" />
          </div>
          <button className="krail-footerbutton32">
            <b className="krail-b179">관광상품</b>
            <img
              className="krail-footerbutton3image-icon2"
              alt=""
              src="/appguide/Korail/footerbutton3image@2x.png"
            />
          </button>
          <button className="krail-footerbutton22">
            <img
              className="krail-footerbutton2image-icon2"
              alt=""
              src="/appguide/Korail/footerbutton2image@2x.png"
            />
            <b className="krail-b179">할인ㆍ정기권</b>
          </button>
          <button className="krail-footerbutton12" onClick={onFooterButton1Click}>
            <b className="krail-b179">승차권예매</b>
            <img
              className="krail-footerbutton1image-icon2"
              alt=""
              src="/appguide/Korail/footerbutton1image@2x.png"
            />
          </button>
        </div>
        <div className="krail-myticketfootertext">
          <b className="krail-b182">
            정당 승차권은 이 문구가 왼쪽으로 흐르고 있습니다
          </b>
        </div>
      </footer>
      <header className="krail-myticketheader">
        <div className="krail-myticketheaderbuttonset">
          <div className="krail-commutationticketbutton">
            <b className="krail-b183">정기권ㆍ패스</b>
          </div>
          <div className="krail-regularticketbutton">
            <div className="krail-regularticketbutton-child" />
            <b className="krail-b183">승차권</b>
            <div className="krail-regularticketbuttonicon">
              <div className="krail-div94">1</div>
            </div>
          </div>
        </div>
        <div className="krail-myticketheadertitle">
          <div className="krail-myticketheadermenubarbutton">
            <div className="krail-headerbuttonline3" />
            <div className="krail-headerbuttonline2" />
            <div className="krail-headerbuttonline1" />
          </div>
          <b className="krail-b185">승차권 확인</b>
        </div>
      </header>
    </div>
  );
};

export default MyTicket;
