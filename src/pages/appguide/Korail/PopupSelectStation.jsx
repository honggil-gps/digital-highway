import { memo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PopupSelectStation.css";

const PopupSelectStation = memo(({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onMajorStationButtonClick = useCallback(() => {
    navigate("/mainpage-02");
  }, [navigate]);

  const onPopupSelectStationHeaderCloseBClick = useCallback(() => {
    navigate("/mainpage-02");
  }, [navigate]);

  const onPopupSelectStationHeaderCloseVIconClick = useCallback(() => {
    navigate("/mainpage-02");
  }, [navigate]);

  return (
    <div className="popupselectstation" data-animate-on-scroll>
      <div className="popupselectstationmajorstation" />
      <div className="majorstationselect">
        <div className="majorstationbutton">
          <b className="b35">서울</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b35">용산</b>
        </div>
        <button
          className="majorstationbutton2"
          onClick={onMajorStationButtonClick}
        >
          <b className="b37">광명</b>
        </button>
        <div className="majorstationbutton1">
          <b className="b38">영등포</b>
        </div>
        <div className="majorstationbutton1">
          <b className="expo">수원</b>
        </div>
        <div className="majorstationbutton1">
          <b className="expo">평택</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b41">천안아산</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b42">천안</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b35">오송</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b44">조치원</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b42">대전</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b42">서대전</b>
        </div>
        <div className="majorstationbutton1">
          <b className="expo">김천구미</b>
        </div>
        <div className="majorstationbutton1">
          <b className="expo">구미</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b42">경주</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b42">울산(통도사)</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b51">포항</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b51">경산</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b53">밀양</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b53">부산</b>
        </div>
        <button className="majorstationbutton2">
          <b className="b55">구포</b>
        </button>
        <div className="majorstationbutton1">
          <b className="b56">창원중앙</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b53">평창</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b53">진부(오대산)</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b59">강릉</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b59">익산</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b35">전주</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b35">광주송정</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b42">목포</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b42">순천</b>
        </div>
        <div className="majorstationbutton1">
          <b className="expo">청량리</b>
        </div>
        <div className="majorstationbutton1">
          <b className="expo">여수EXPO</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b42">동해</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b42">정동진</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b68">안동</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b68">서원주</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b70">원주</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b70">마산</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b68">행신</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b68">나주</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b74">정읍</b>
        </div>
        <div className="majorstationbutton1">
          <b className="b74">남원</b>
        </div>
      </div>
      <div className="popupselectstationtextsearchba">
        <b className="b76">
          <p className="p">가</p>
          <p className="p">&nbsp;</p>
          <p className="p">최</p>
          <p className="p">&nbsp;</p>
          <p className="p">ㄱ</p>
          <p className="p">&nbsp;</p>
          <p className="p">ㄴ</p>
          <p className="p">&nbsp;</p>
          <p className="p">ㄷ</p>
          <p className="p">&nbsp;</p>
          <p className="p">ㄹ</p>
          <p className="p">&nbsp;</p>
          <p className="p">ㅁ</p>
          <p className="p">&nbsp;</p>
          <p className="p">ㅂ</p>
          <p className="p">&nbsp;</p>
          <p className="p">ㅅ</p>
          <p className="p">&nbsp;</p>
          <p className="p">ㅇ</p>
          <p className="p">&nbsp;</p>
          <p className="p">ㅈ</p>
          <p className="p">&nbsp;</p>
          <p className="p">ㅊ</p>
          <p className="p">&nbsp;</p>
          <p className="p">ㅌ</p>
          <p className="p">&nbsp;</p>
          <p className="p">ㅍ</p>
          <p className="p">&nbsp;</p>
          <p className="p">ㅎ</p>
        </b>
      </div>
      <div className="majorstationtitle">
        <b className="b77">주요역</b>
      </div>
      <div className="popupselectstationneareststati">
        <div className="neareststationtitle">
          <b className="b78">가까운역</b>
        </div>
        <div className="neareststationselect">
          <div className="neareststationbutton">
            <b className="b79">사상</b>
          </div>
          <button className="neareststationbutton1">
            <b className="b80">구포</b>
          </button>
        </div>
      </div>
      <div className="popupselectstationheader">
        <div className="popupselectstationheader" />
        <div className="selectstationsearchbar">
          <img
            className="selectstationsearchbarvector-icon"
            alt=""
            src="/Appguide/Korail/selectstationsearchbarvector.svg"
          />
          <b className="b81">역 명의 초성 또는 전체를 입력해 주세요</b>
        </div>
        <button
          className="popupselectstationheadercloseb"
          onClick={onPopupSelectStationHeaderCloseBClick}
        >
          <img
            className="popupselectstationheaderclosev-icon"
            alt=""
            src="/Appguide/Korail/popupselectstationheaderclosevector.svg"
            onClick={onPopupSelectStationHeaderCloseVIconClick}
          />
        </button>
      </div>
    </div>
  );
});

export default PopupSelectStation;
