import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MyTicket.css";

const MyTicket = () => {
  const navigate = useNavigate();

  const onMainTicketButton2Click = useCallback(() => {
    navigate("/refund-16");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/refund-16");
  }, [navigate]);

  const onFooterButton4ImageClick = useCallback(() => {
    navigate("/my-ticket");
  }, [navigate]);

  const onFooterButton1Click = useCallback(() => {
    navigate("/mainpage-02");
  }, [navigate]);

  return (
    <div className="myticket-15">
      <main className="myticketmain">
        <div className="mainticketbuttonset">
          <button className="mainticketbutton3">
            <b className="b166">여행변경</b>
          </button>
          <button
            className="mainticketbutton2"
            onClick={onMainTicketButton2Click}
          >
            <b className="b167" onClick={onTextClick}>
              반환하기
            </b>
          </button>
          <button className="mainticketbutton1">
            <b className="b168">전달하기</b>
          </button>
        </div>
        <div className="mainticketcurrenttime">
          <div className="div80">
            <span className="txt18">
              <p className="p83">{`2025-05-01 `}</p>
              <p className="p83">09:13:45</p>
            </span>
          </div>
        </div>
        <div className="mainticketexpandbutton">
          <img
            className="vector-icon23"
            alt=""
            src="/Appguide/Korail/vector31.svg"
          />
          <div className="div81">펼쳐보기</div>
        </div>
        <div className="mainticketfeatures">
          <div className="mainticketfeatures4">
            <div className="div82">
              <span className="txt18">
                <p className="p83">승하차</p>
                <p className="p83">도우미 신청</p>
              </span>
            </div>
            <img
              className="mainticketfeatures4icon"
              alt=""
              src="/Appguide/Korail/mainticketfeatures4icon.svg"
            />
          </div>
          <div className="mainticketfeatures3">
            <div className="sms">
              <span className="sms-txt">
                <p className="p83">보호자</p>
                <p className="p83">안심SMS</p>
              </span>
            </div>
            <img
              className="mainticketfeatures3icon"
              alt=""
              src="/Appguide/Korail/mainticketfeatures3icon.svg"
            />
          </div>
          <div className="mainticketfeatures2">
            <div className="ktx9">KTX공항버스</div>
            <img
              className="mainticketfeatures2icon"
              alt=""
              src="/Appguide/Korail/mainticketfeatures2icon.svg"
            />
          </div>
          <div className="mainticketfeatures1">
            <div className="div83">철도범죄신고</div>
            <img
              className="mainticketfeatures1icon"
              alt=""
              src="/Appguide/Korail/mainticketfeatures1icon.svg"
            />
          </div>
        </div>
        <div className="maintickettrainnumber">
          <div className="div84">승차권번호</div>
          <div className="div85">82235-0501-10973-99</div>
        </div>
        <div className="mainticketseatinfo2">
          <div className="div86">일반실</div>
          <div className="div87">순방향</div>
          <div className="div88">어른</div>
          <div className="mainticketseatinfo2line2" />
          <div className="mainticketseatinfo2line1" />
        </div>
        <div className="mainticketseatinfo1">
          <div className="mainticketseatinfo4">
            <img
              className="mainticketseatinfo4image-icon"
              alt=""
              src="/Appguide/Korail/mainticketseatinfo4image@2x.png"
            />
            <div className="mainticketseatinfo3title">
              <div className="div89">운임영수증</div>
            </div>
          </div>
          <div className="mainticketseatinfo3">
            <b className="a16">3A</b>
            <div className="mainticketseatinfo3title1">
              <div className="div89">좌석번호</div>
            </div>
          </div>
          <div className="mainticketseatinfo21">
            <b className="b169">
              <span className="sms-txt">
                <span>15</span>
                <span className="span2">호차</span>
              </span>
            </b>
            <div className="mainticketseatinfo2title">
              <div className="div89">호차번호</div>
            </div>
          </div>
          <div className="mainticketseatinfo11">
            <b className="b170">
              <span className="sms-txt">
                <p className="p83">15분전에</p>
                <p className="p83">표시됩니다</p>
              </span>
            </b>
            <img
              className="mainticketseatinfo1reloadimage-icon"
              alt=""
              src="/Appguide/Korail/mainticketseatinfo1reloadimage.svg"
            />
            <div className="mainticketseatinfo2title">
              <div className="div92">타는곳번호</div>
            </div>
          </div>
        </div>
        <div className="maintickettraininfo">
          <div className="ktx-1623">KTX-산천 162</div>
          <div className="maintickettraintimebutton">
            <div className="div93">열차시각</div>
          </div>
        </div>
        <div className="mainticketinfodestination">
          <img
            className="mainticketinfodestinationarrow-icon"
            alt=""
            src="/Appguide/Korail/mainticketinfodestinationarrow.svg"
          />
          <div className="arrivaltime">
            <b className="b171">광명</b>
            <b className="b172">10:14</b>
          </div>
          <div className="departuretime">
            <b className="b171">구포</b>
            <b className="b172">12:52</b>
          </div>
        </div>
        <div className="mainticketaaddinfobutton">
          <b className="b175">부가정보</b>
          <img
            className="mainticketaaddinfobuttonvector-icon"
            alt=""
            src="/Appguide/Korail/mainticketaaddinfobuttonvector.svg"
          />
        </div>
        <div className="mainticketinfotitle">
          <b className="b176">2025년 05월 03일 (토)</b>
          <b className="b177">스마트티켓1매</b>
        </div>
      </main>
      <footer className="myticketfooter">
        <div className="myticketfooterbuttonset">
          <button className="footerbutton42">
            <b className="b178">승차권확인</b>
            <button
              className="footerbutton4image2"
              onClick={onFooterButton4ImageClick}
            />
            <div className="footerbutton4rectangle" />
          </button>
          <button className="footerbutton32">
            <b className="b179">관광상품</b>
            <img
              className="footerbutton3image-icon2"
              alt=""
              src="/Appguide/Korail/footerbutton3image@2x.png"
            />
          </button>
          <button className="footerbutton22">
            <img
              className="footerbutton2image-icon2"
              alt=""
              src="/Appguide/Korail/footerbutton2image@2x.png"
            />
            <b className="b179">할인ㆍ정기권</b>
          </button>
          <button className="footerbutton12" onClick={onFooterButton1Click}>
            <b className="b179">승차권예매</b>
            <img
              className="footerbutton1image-icon2"
              alt=""
              src="/Appguide/Korail/footerbutton1image@2x.png"
            />
          </button>
        </div>
        <div className="myticketfootertext">
          <b className="b182">
            정당 승차권은 이 문구가 왼쪽으로 흐르고 있습니다
          </b>
        </div>
      </footer>
      <header className="myticketheader">
        <div className="myticketheaderbuttonset">
          <div className="commutationticketbutton">
            <b className="b183">정기권ㆍ패스</b>
          </div>
          <div className="regularticketbutton">
            <div className="regularticketbutton-child" />
            <b className="b183">승차권</b>
            <div className="regularticketbuttonicon">
              <div className="div94">1</div>
            </div>
          </div>
        </div>
        <div className="myticketheadertitle">
          <div className="myticketheadermenubarbutton">
            <div className="headerbuttonline3" />
            <div className="headerbuttonline2" />
            <div className="headerbuttonline1" />
          </div>
          <b className="b185">승차권 확인</b>
        </div>
      </header>
    </div>
  );
};

export default MyTicket;
