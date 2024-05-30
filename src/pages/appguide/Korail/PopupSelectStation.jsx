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

  // const onMajorStationButtonClick = useCallback(() => {
  //   navigate("/maincontents/mainpage-02");
  // }, [navigate]);

    const onMajorStationButtonClick = useCallback(() => {
    navigate("/Maincontents/MainPageChange");
  }, [navigate]);

  // const onPopupSelectStationHeaderCloseBClick = useCallback(() => {
  //   navigate("/maincontents/mainpage-02");
  // }, [navigate]);

  const onPopupSelectStationHeaderCloseBClick = useCallback(() => {
    onClose(); // 부모 컴포넌트에서 전달된 onClose 함수 호출
  }, [onClose]);

  const onPopupSelectStationHeaderCloseVIconClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  return (
    <div className="krail-popupselectstation" data-animate-on-scroll>
      <div className="krail-popupselectstationmajorstation" />
      <div className="krail-majorstationselect">
        <div className="krail-majorstationbutton1">
          <b className="krail-b35">서울</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b35">용산</b>
        </div>
        <button
          className="krail-majorstationbutton2"
          onClick={onMajorStationButtonClick}>
          <b className="krail-b37">광명</b>
        </button>
        <button 
          className="krail-majorstationbutton2"
          onClick={onMajorStationButtonClick}>
          <b className="krail-b37">영등포</b>
        </button>
        <div className="krail-majorstationbutton1">
          <b className="krail-expo">수원</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-expo">평택</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b41">천안아산</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b42">천안</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b35">오송</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b44">조치원</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b42">대전</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b42">서대전</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-expo">김천구미</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-expo">구미</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b42">경주</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b42">울산(통도사)</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b51">포항</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b51">경산</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b53">밀양</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b53">부산</b>
        </div>
        <button className="krail-majorstationbutton2">
          <b className="krail-b55">구포</b>
        </button>
        <div className="krail-majorstationbutton1">
          <b className="krail-b56">창원중앙</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b53">평창</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b53">진부(오대산)</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b59">강릉</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b59">익산</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b35">전주</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b35">광주송정</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b42">목포</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b42">순천</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-expo">청량리</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-expo">여수EXPO</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b42">동해</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b42">정동진</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b68">안동</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b68">서원주</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b70">원주</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b70">마산</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b68">행신</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b68">나주</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b74">정읍</b>
        </div>
        <div className="krail-majorstationbutton1">
          <b className="krail-b74">남원</b>
        </div>
      </div>
      <div className="krail-popupselectstationtextsearchba">
        <b className="krail-b76">
          <p className="krail-p">가</p>
          <p className="krail-p">&nbsp;</p>
          <p className="krail-p">최</p>
          <p className="krail-p">&nbsp;</p>
          <p className="krail-p">ㄱ</p>
          <p className="krail-p">&nbsp;</p>
          <p className="krail-p">ㄴ</p>
          <p className="krail-p">&nbsp;</p>
          <p className="krail-p">ㄷ</p>
          <p className="krail-p">&nbsp;</p>
          <p className="krail-p">ㄹ</p>
          <p className="krail-p">&nbsp;</p>
          <p className="krail-p">ㅁ</p>
          <p className="krail-p">&nbsp;</p>
          <p className="krail-p">ㅂ</p>
          <p className="krail-p">&nbsp;</p>
          <p className="krail-p">ㅅ</p>
          <p className="krail-p">&nbsp;</p>
          <p className="krail-p">ㅇ</p>
          <p className="krail-p">&nbsp;</p>
          <p className="krail-p">ㅈ</p>
          <p className="krail-p">&nbsp;</p>
          <p className="krail-p">ㅊ</p>
          <p className="krail-p">&nbsp;</p>
          <p className="krail-p">ㅌ</p>
          <p className="krail-p">&nbsp;</p>
          <p className="krail-p">ㅍ</p>
          <p className="krail-p">&nbsp;</p>
          <p className="krail-p">ㅎ</p>
        </b>
      </div>
      <div className="krail-majorstationtitle">
        <b className="krail-b77">주요역</b>
      </div>
      <div className="krail-popupselectstationneareststati">
        <div className="krail-neareststationtitle">
          <b className="krail-b78">가까운역</b>
        </div>
        <div className="krail-neareststationselect">
          <div className="krail-neareststationbutton">
            <b className="krail-b79">부전</b>
          </div>
          <button className="krail-neareststationbutton1">
            <b className="krail-b80">부산</b>
          </button>
        </div>
      </div>
      <div className="krail-popupselectstationheader">
        <div className="krail-popupselectstationheader" />
        <div className="krail-selectstationsearchbar">
          <img
            className="krail-selectstationsearchbarvector-icon"
            alt=""
            src="/appguide/Korail/selectstationsearchbarvector.svg"
          />
          <b className="krail-b81">역 명의 초성 또는 전체를 입력해 주세요</b>
        </div>
        <button
          className="krail-popupselectstationheadercloseb"
          onClick={onPopupSelectStationHeaderCloseBClick}
        >
          <img
            className="krail-popupselectstationheaderclosev-icon"
            alt=""
            src="/appguide/Korail/popupselectstationheaderclosevector.svg"
            onClick={onPopupSelectStationHeaderCloseVIconClick}
          />
        </button>
      </div>
    </div>
  );
});

export default PopupSelectStation;
