import { useState, useCallback } from "react";
import PopupSelectStation from "./PopupSelectStation";
import PortalPopup from "./PortalPopup";
import PopupMenubar from "./PopupMenubar";
import PortalDrawer from "./PortalDrawer";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  const [isPopupSelectStationOpen, setPopupSelectStationOpen] = useState(false);
  const [isPopupSelectStation2Open, setPopupSelectStation2Open] =
    useState(false);
  const [isPopupMenubarOpen, setPopupMenubarOpen] = useState(false);
  const [isPopupSelectStation1Open, setPopupSelectStation1Open] =
    useState(false);
  const [isPopupSelectStation3Open, setPopupSelectStation3Open] =
    useState(false);
  const [isPopupMenubar1Open, setPopupMenubar1Open] = useState(false);
  const navigate = useNavigate();

  const openPopupSelectStation1 = useCallback(() => {
    setPopupSelectStation1Open(true);
  }, []);

  const closePopupSelectStation1 = useCallback(() => {
    setPopupSelectStation1Open(false);
  }, []);

  const openPopupSelectStation = useCallback(() => {
    setPopupSelectStationOpen(true);
  }, []);

  const closePopupSelectStation = useCallback(() => {
    setPopupSelectStationOpen(false);
  }, []);

  const openPopupSelectStation3 = useCallback(() => {
    setPopupSelectStation3Open(true);
  }, []);

  const closePopupSelectStation3 = useCallback(() => {
    setPopupSelectStation3Open(false);
  }, []);

  const openPopupSelectStation2 = useCallback(() => {
    setPopupSelectStation2Open(true);
  }, []);

  const closePopupSelectStation2 = useCallback(() => {
    setPopupSelectStation2Open(false);
  }, []);

  const openPopupMenubar1 = useCallback(() => {
    setPopupMenubar1Open(true);
  }, []);

  const closePopupMenubar1 = useCallback(() => {
    setPopupMenubar1Open(false);
  }, []);

  const openPopupMenubar = useCallback(() => {
    setPopupMenubarOpen(true);
  }, []);

  const closePopupMenubar = useCallback(() => {
    setPopupMenubarOpen(false);
  }, []);

  const onFooterButton4ImageClick = useCallback(() => {
    navigate("/my-ticket");
  }, [navigate]);

  const onSearchButtonClick = useCallback(() => {
    navigate("/trainschedule-08");
  }, [navigate]);

  return (
    <>
      <div className="mainpage-02">
        <main className="mainpagemain">
          <div className="mainpageoption">
            <div className="sr">인접역 표출, SR 연계 표출</div>
            <b className="b222">상세 옵션</b>
            <img
              className="mainpageoptionbutton-icon"
              alt=""
              src="/Appguide/Korail/mainpageoptionbutton.svg"
            />
          </div>
          <div className="mainpagepassengerinfo">
            <div className="passengerinfocount">
              <div className="passengerinforight">
                <div className="passengerinforightbutton">
                  <div className="rightbutton3">
                    <div className="div95">0</div>
                    <img
                      className="incbutton-icon"
                      alt=""
                      src="/Appguide/Korail/incbutton.svg"
                    />
                    <img
                      className="decbuttoninactive-icon"
                      alt=""
                      src="/Appguide/Korail/decbuttoninactive.svg"
                    />
                  </div>
                  <div className="rightbutton2">
                    <div className="div95">0</div>
                    <img
                      className="incbutton-icon"
                      alt=""
                      src="/Appguide/Korail/incbutton.svg"
                    />
                    <img
                      className="decbuttoninactive-icon"
                      alt=""
                      src="/Appguide/Korail/decbuttoninactive.svg"
                    />
                  </div>
                  <div className="rightbutton1">
                    <div className="div95">0</div>
                    <img
                      className="incbutton-icon"
                      alt=""
                      src="/Appguide/Korail/incbutton.svg"
                    />
                    <img
                      className="decbuttoninactive-icon"
                      alt=""
                      src="/Appguide/Korail/decbuttoninactive.svg"
                    />
                  </div>
                </div>
                <div className="passengerinforighttext">
                  <div className="div98">어린이</div>
                  <div className="div99">경로</div>
                  <div className="div100">경증장애</div>
                </div>
              </div>
              <div className="passengerinfoleft">
                <div className="passengerinforightbutton">
                  <div className="rightbutton3">
                    <div className="div95">0</div>
                    <img
                      className="incbutton-icon"
                      alt=""
                      src="/Appguide/Korail/incbutton.svg"
                    />
                    <img
                      className="decbuttoninactive-icon"
                      alt=""
                      src="/Appguide/Korail/decbuttoninactive.svg"
                    />
                  </div>
                  <div className="rightbutton2">
                    <div className="div95">0</div>
                    <img
                      className="incbutton-icon"
                      alt=""
                      src="/Appguide/Korail/incbutton.svg"
                    />
                    <img
                      className="decbuttoninactive-icon"
                      alt=""
                      src="/Appguide/Korail/decbuttoninactive.svg"
                    />
                  </div>
                  <div className="leftbutton1">
                    <div className="div103">1</div>
                    <img
                      className="incbutton-icon5"
                      alt=""
                      src="/Appguide/Korail/incbutton.svg"
                    />
                    <img
                      className="decbuttoninactive-icon"
                      alt=""
                      src="/Appguide/Korail/decbutton.svg"
                    />
                  </div>
                </div>
                <div className="passengerinforighttext">
                  <div className="div98">어른</div>
                  <div className="div99">유아</div>
                  <div className="div100">중증장애</div>
                </div>
              </div>
            </div>
            <div className="passengerinfottitle">
              <b className="b223">총 1명</b>
              <img
                className="passengerinfoicon"
                alt=""
                src="/Appguide/Korail/passengerinfoicon.svg"
              />
              <b className="b224">승객 연령 및 좌석수</b>
            </div>
          </div>
          <div className="mainpageselectscroll">
            <div className="mainpageselectscrollline" />
            <div className="dayselectscroll">
              <div className="day1">
                <b className="b225">오늘</b>
                <div className="dayselectbutton">
                  <b className="b226">1</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">금</b>
                <div className="dayselectbutton1">
                  <b className="b226">2</b>
                </div>
              </div>
              <div className="day3">
                <b className="b225">토</b>
                <div className="dayselectbutton2">
                  <b className="b226">3</b>
                </div>
              </div>
              <div className="day4">
                <b className="b225">일</b>
                <div className="dayselectbutton2">
                  <b className="b226">4</b>
                </div>
              </div>
              <div className="day4">
                <b className="b225">월</b>
                <div className="dayselectbutton2">
                  <b className="b226">5</b>
                </div>
              </div>
              <div className="day4">
                <b className="b225">화</b>
                <div className="dayselectbutton2">
                  <b className="b226">6</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">수</b>
                <div className="dayselectbutton1">
                  <b className="b226">7</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">목</b>
                <div className="dayselectbutton1">
                  <b className="b226">8</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">금</b>
                <div className="dayselectbutton1">
                  <b className="b226">9</b>
                </div>
              </div>
              <div className="day3">
                <b className="b225">토</b>
                <div className="dayselectbutton2">
                  <b className="b226">10</b>
                </div>
              </div>
              <div className="day4">
                <b className="b225">일</b>
                <div className="dayselectbutton2">
                  <b className="b226">11</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">월</b>
                <div className="dayselectbutton1">
                  <b className="b226">12</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">화</b>
                <div className="dayselectbutton1">
                  <b className="b226">13</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">수</b>
                <div className="dayselectbutton1">
                  <b className="b226">14</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">목</b>
                <div className="dayselectbutton1">
                  <b className="b226">15</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">금</b>
                <div className="dayselectbutton1">
                  <b className="b226">16</b>
                </div>
              </div>
              <div className="day3">
                <b className="b225">토</b>
                <div className="dayselectbutton2">
                  <b className="b226">17</b>
                </div>
              </div>
              <div className="day4">
                <b className="b225">일</b>
                <div className="dayselectbutton2">
                  <b className="b226">18</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">월</b>
                <div className="dayselectbutton1">
                  <b className="b226">19</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">화</b>
                <div className="dayselectbutton1">
                  <b className="b226">20</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">수</b>
                <div className="dayselectbutton1">
                  <b className="b226">21</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">목</b>
                <div className="dayselectbutton1">
                  <b className="b226">22</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">금</b>
                <div className="dayselectbutton1">
                  <b className="b226">23</b>
                </div>
              </div>
              <div className="day3">
                <b className="b225">토</b>
                <div className="dayselectbutton2">
                  <b className="b226">24</b>
                </div>
              </div>
              <div className="day4">
                <b className="b225">일</b>
                <div className="dayselectbutton2">
                  <b className="b226">25</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">월</b>
                <div className="dayselectbutton1">
                  <b className="b226">26</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">화</b>
                <div className="dayselectbutton1">
                  <b className="b226">27</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">수</b>
                <div className="dayselectbutton1">
                  <b className="b226">28</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">목</b>
                <div className="dayselectbutton1">
                  <b className="b226">29</b>
                </div>
              </div>
              <div className="day2">
                <b className="b225">금</b>
                <div className="dayselectbutton1">
                  <b className="b226">30</b>
                </div>
              </div>
              <div className="day3">
                <b className="b225">토</b>
                <div className="dayselectbutton2">
                  <b className="b226">31</b>
                </div>
              </div>
            </div>
            <div className="hourselectscroll">
              <div className="hour00">
                <div className="div107">시</div>
                <b className="b287">00</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">01</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">02</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">03</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">04</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">05</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">06</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">07</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">08</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">09</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">10</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">11</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">12</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">13</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">14</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">15</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">16</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">17</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">18</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">19</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">20</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">21</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">22</b>
              </div>
              <div className="hour01">
                <div className="div107">시</div>
                <b className="b287">23</b>
              </div>
            </div>
            <div className="mainpageselectscrollbutton">
              <div className="div131">달력에서 날짜 선택</div>
            </div>
          </div>
          <div className="mainpagedeparturedate">
            <img
              className="departuredateline-icon"
              alt=""
              src="/Appguide/Korail/departuredateline.svg"
            />
            <img
              className="departuredatevector-icon"
              alt=""
              src="/Appguide/Korail/departuredatevector.svg"
            />
            <b className="b311">{`2025년 05월 01일 (목) 00:00  `}</b>
            <b className="b312">출발일</b>
          </div>
          <div className="mainpagestationselection">
            <div className="mainpagestationselectionline" />
            <div className="mainpagestationselectionktxbut">
              <div className="ktx10">KTX역 선택 지도</div>
            </div>
            <img
              className="mainpagestationselectionarrow-icon"
              alt=""
              src="/Appguide/Korail/mainpagestationselectionarrow.svg"
            />
            <div className="arrival">
              <button
                className="arrivalbutton"
                onClick={openPopupSelectStation1}
              >
                <b className="b313" onClick={openPopupSelectStation}>
                  서울
                </b>
              </button>
              <div className="div132">도착</div>
            </div>
            <div className="departure">
              <button
                className="departurebutton"
                onClick={openPopupSelectStation3}
              >
                <b className="b313" onClick={openPopupSelectStation2}>
                  부산
                </b>
              </button>
              <div className="div132">출발</div>
            </div>
          </div>
        </main>
        <header className="mainpageheader">
          <div className="mainpagemainheaderwaybutton2">
            <b className="b315">왕복</b>
          </div>
          <div className="mainpagemainheaderwaybutton1">
            <img
              className="krailmainheaderwaybutton1line-icon"
              alt=""
              src="/Appguide/Korail/krailmainheaderwaybutton1line.svg"
            />
            <b className="b315">편도</b>
          </div>
          <button
            className="mainpagemainheaderttitle"
            onClick={openPopupMenubar1}
          >
            <button className="menubarbutton" onClick={openPopupMenubar}>
              <div className="menubarbuttonline3" />
              <div className="menubarbuttonline2" />
              <div className="menubarbuttonline1" />
            </button>
            <b className="b317">승차권 예매</b>
          </button>
        </header>
        <div className="mainpagefooter">
          <div className="mainpagefooterbutton2">
            <button className="footerbutton44">
              <b className="b318">승차권확인</b>
              <button
                className="footerbutton4image4"
                onClick={onFooterButton4ImageClick}
              />
            </button>
            <div className="footerbutton34">
              <b className="b319">관광상품</b>
              <img
                className="footerbutton3image-icon4"
                alt=""
                src="/Appguide/Korail/footerbutton3image@2x.png"
              />
            </div>
            <div className="footerbutton24">
              <img
                className="footerbutton2image-icon4"
                alt=""
                src="/Appguide/Korail/footerbutton2image@2x.png"
              />
              <b className="b319">할인ㆍ정기권</b>
            </div>
            <button className="footerbutton14">
              <b className="b321">승차권예매</b>
              <img
                className="footerbutton1image-icon4"
                alt=""
                src="/Appguide/Korail/footerbutton1image@2x.png"
              />
              <div className="footerbutton1-child" />
            </button>
          </div>
          <div className="mainpagefooterbutton1">
            <button className="searchbutton" onClick={onSearchButtonClick}>
              <b className="b322">열차 조회하기</b>
            </button>
            <div className="registrationbutton">
              <b className="b323">간편구매 등록</b>
            </div>
          </div>
        </div>
      </div>
      {isPopupSelectStation1Open && (
        <PortalDrawer
          placement="Bottom"
          onOutsideClick={closePopupSelectStation1}
        >
          <PopupSelectStation onClose={closePopupSelectStation1} />
        </PortalDrawer>
      )}
      {isPopupSelectStationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupSelectStation}
        >
          <PopupSelectStation onClose={closePopupSelectStation} />
        </PortalPopup>
      )}
      {isPopupSelectStation3Open && (
        <PortalDrawer
          placement="Bottom"
          onOutsideClick={closePopupSelectStation3}
        >
          <PopupSelectStation onClose={closePopupSelectStation3} />
        </PortalDrawer>
      )}
      {isPopupSelectStation2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupSelectStation2}
        >
          <PopupSelectStation onClose={closePopupSelectStation2} />
        </PortalPopup>
      )}
      {isPopupMenubar1Open && (
        <PortalDrawer placement="Right" onOutsideClick={closePopupMenubar1}>
          <PopupMenubar onClose={closePopupMenubar1} />
        </PortalDrawer>
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

export default MainPage;
