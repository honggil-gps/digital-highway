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
    navigate("/maincontents/my-ticket");
  }, [navigate]);

  const onSearchButtonClick = useCallback(() => {
    navigate("/maincontents/trainschedule-08");
  }, [navigate]);

  return (
    <>
      <div className="krail-mainpage-02">
        <main className="krail-mainpagemain">
          <div className="krail-mainpageoption">
            <div className="krail-sr">인접역 표출, SR 연계 표출</div>
            <b className="krail-b222">상세 옵션</b>
            <img
              className="krail-mainpageoptionbutton-icon"
              alt=""
              src="/appguide/Korail/mainpageoptionbutton.svg"
            />
          </div>
          <div className="krail-mainpagepassengerinfo">
            <div className="krail-passengerinfocount">
              <div className="krail-passengerinforight">
                <div className="krail-passengerinforightbutton">
                  <div className="krail-rightbutton3">
                    <div className="krail-div95">0</div>
                    <img
                      className="krail-incbutton-icon"
                      alt=""
                      src="/appguide/Korail/incbutton.svg"
                    />
                    <img
                      className="krail-decbuttoninactive-icon"
                      alt=""
                      src="/appguide/Korail/decbuttoninactive.svg"
                    />
                  </div>
                  <div className="krail-rightbutton2">
                    <div className="krail-div95">0</div>
                    <img
                      className="krail-incbutton-icon"
                      alt=""
                      src="/appguide/Korail/incbutton.svg"
                    />
                    <img
                      className="krail-decbuttoninactive-icon"
                      alt=""
                      src="/appguide/Korail/decbuttoninactive.svg"
                    />
                  </div>
                  <div className="krail-rightbutton1">
                    <div className="krail-div95">0</div>
                    <img
                      className="krail-incbutton-icon"
                      alt=""
                      src="/appguide/Korail/incbutton.svg"
                    />
                    <img
                      className="krail-decbuttoninactive-icon"
                      alt=""
                      src="/appguide/Korail/decbuttoninactive.svg"
                    />
                  </div>
                </div>
                <div className="krail-passengerinforighttext">
                  <div className="krail-div98">어린이</div>
                  <div className="krail-div99">경로</div>
                  <div className="krail-div100">경증장애</div>
                </div>
              </div>
              <div className="krail-passengerinfoleft">
                <div className="krail-passengerinforightbutton">
                  <div className="krail-rightbutton3">
                    <div className="krail-div95">0</div>
                    <img
                      className="krail-incbutton-icon"
                      alt=""
                      src="/appguide/Korail/incbutton.svg"
                    />
                    <img
                      className="krail-decbuttoninactive-icon"
                      alt=""
                      src="/appguide/Korail/decbuttoninactive.svg"
                    />
                  </div>
                  <div className="krail-rightbutton2">
                    <div className="krail-div95">0</div>
                    <img
                      className="krail-incbutton-icon"
                      alt=""
                      src="/appguide/Korail/incbutton.svg"
                    />
                    <img
                      className="krail-decbuttoninactive-icon"
                      alt=""
                      src="/appguide/Korail/decbuttoninactive.svg"
                    />
                  </div>
                  <div className="krail-leftbutton1">
                    <div className="krail-div103">1</div>
                    <img
                      className="krail-incbutton-icon5"
                      alt=""
                      src="/appguide/Korail/incbutton.svg"
                    />
                    <img
                      className="krail-decbuttoninactive-icon"
                      alt=""
                      src="/appguide/Korail/decbutton.svg"
                    />
                  </div>
                </div>
                <div className="krail-passengerinforighttext">
                  <div className="krail-div98">어른</div>
                  <div className="krail-div99">유아</div>
                  <div className="krail-div100">중증장애</div>
                </div>
              </div>
            </div>
            <div className="krail-passengerinfottitle">
              <b className="krail-b223">총 1명</b>
              <img
                className="krail-passengerinfoicon"
                alt=""
                src="/appguide/Korail/passengerinfoicon.svg"
              />
              <b className="krail-b224">승객 연령 및 좌석수</b>
            </div>
          </div>
          <div className="krail-mainpageselectscroll">
            <div className="krail-mainpageselectscrollline" />
            <div className="krail-dayselectscroll">
              <div className="krail-day1">
                <b className="krail-b225">오늘</b>
                <div className="krail-dayselectbutton">
                  <b className="krail-b226">1</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">금</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">2</b>
                </div>
              </div>
              <div className="krail-day3">
                <b className="krail-b225">토</b>
                <div className="krail-dayselectbutton2">
                  <b className="krail-b226">3</b>
                </div>
              </div>
              <div className="krail-day4">
                <b className="krail-b225">일</b>
                <div className="krail-dayselectbutton2">
                  <b className="krail-b226">4</b>
                </div>
              </div>
              <div className="krail-day4">
                <b className="krail-b225">월</b>
                <div className="krail-dayselectbutton2">
                  <b className="krail-b226">5</b>
                </div>
              </div>
              <div className="krail-day4">
                <b className="krail-b225">화</b>
                <div className="krail-dayselectbutton2">
                  <b className="krail-b226">6</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">수</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">7</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">목</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">8</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">금</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">9</b>
                </div>
              </div>
              <div className="krail-day3">
                <b className="krail-b225">토</b>
                <div className="krail-dayselectbutton2">
                  <b className="krail-b226">10</b>
                </div>
              </div>
              <div className="krail-day4">
                <b className="krail-b225">일</b>
                <div className="krail-dayselectbutton2">
                  <b className="krail-b226">11</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">월</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">12</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">화</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">13</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">수</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">14</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">목</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">15</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">금</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">16</b>
                </div>
              </div>
              <div className="krail-day3">
                <b className="krail-b225">토</b>
                <div className="krail-dayselectbutton2">
                  <b className="krail-b226">17</b>
                </div>
              </div>
              <div className="krail-day4">
                <b className="krail-b225">일</b>
                <div className="krail-dayselectbutton2">
                  <b className="krail-b226">18</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">월</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">19</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">화</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">20</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">수</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">21</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">목</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">22</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">금</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">23</b>
                </div>
              </div>
              <div className="krail-day3">
                <b className="krail-b225">토</b>
                <div className="krail-dayselectbutton2">
                  <b className="krail-b226">24</b>
                </div>
              </div>
              <div className="krail-day4">
                <b className="krail-b225">일</b>
                <div className="krail-dayselectbutton2">
                  <b className="krail-b226">25</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">월</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">26</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">화</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">27</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">수</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">28</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">목</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">29</b>
                </div>
              </div>
              <div className="krail-day2">
                <b className="krail-b225">금</b>
                <div className="krail-dayselectbutton1">
                  <b className="krail-b226">30</b>
                </div>
              </div>
              <div className="krail-day3">
                <b className="krail-b225">토</b>
                <div className="krail-dayselectbutton2">
                  <b className="krail-b226">31</b>
                </div>
              </div>
            </div>
            <div className="krail-hourselectscroll">
              <div className="krail-hour00">
                <div className="krail-div107">시</div>
                <b className="krail-b287">00</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">01</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">02</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">03</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">04</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">05</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">06</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">07</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">08</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">09</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">10</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">11</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">12</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">13</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">14</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">15</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">16</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">17</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">18</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">19</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">20</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">21</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">22</b>
              </div>
              <div className="krail-hour01">
                <div className="krail-div107">시</div>
                <b className="krail-b287">23</b>
              </div>
            </div>
            <div className="krail-mainpageselectscrollbutton">
              <div className="krail-div131">달력에서 날짜 선택</div>
            </div>
          </div>
          <div className="krail-mainpagedeparturedate">
            <img
              className="krail-departuredateline-icon"
              alt=""
              src="/appguide/Korail/departuredateline.svg"
            />
            <img
              className="krail-departuredatevector-icon"
              alt=""
              src="/appguide/Korail/departuredatevector.svg"
            />
            <b className="krail-b311">{`2025년 05월 01일 (목) 00:00  `}</b>
            <b className="krail-b312">출발일</b>
          </div>
          <div className="krail-mainpagestationselection">
            <div className="krail-mainpagestationselectionline" />
            <div className="krail-mainpagestationselectionktxbut">
              <div className="krail-ktx10">KTX역 선택 지도</div>
            </div>
            <img
              className="krail-mainpagestationselectionarrow-icon"
              alt=""
              src="/appguide/Korail/mainpagestationselectionarrow.svg"
            />
            <div className="krail-arrival">
              <button
                className="krail-arrivalbutton"
                onClick={openPopupSelectStation1}
              >
                <b className="krail-b313r" onClick={openPopupSelectStation}>
                  서울
                </b>
              </button>
              <div className="krail-div132">도착</div>
            </div>
            <div className="krail-departure">
              <button
                className="krail-departurebutton"
                onClick={openPopupSelectStation3}
              >
                <b className="krail-b313" onClick={openPopupSelectStation2}>
                  부산
                </b>
              </button>
              <div className="krail-div132">출발</div>
            </div>
          </div>
        </main>
        <header className="krail-mainpageheader">
          <div className="krail-mainpagemainheaderwaybutton2">
            <b className="krail-b315">왕복</b>
          </div>
          <div className="krail-mainpagemainheaderwaybutton1">
            <img
              className="krail-krailmainheaderwaybutton1line-icon"
              alt=""
              src="/appguide/Korail/krailmainheaderwaybutton1line.svg"
            />
            <b className="krail-b315">편도</b>
          </div>
          <div
            className="krail-mainpagemainheaderttitle"
            onClick={openPopupMenubar1}
          >
            <button className="krail-menubarbutton" onClick={openPopupMenubar}>
              <div className="krail-menubarbuttonline3" />
              <div className="krail-menubarbuttonline2" />
              <div className="krail-menubarbuttonline1" />
            </button>
            <b className="krail-b317">승차권 예매</b>
          </div>
        </header>
        <div className="krail-mainpagefooter">
          <div className="krail-mainpagefooterbutton2">
            <div className="krail-footerbutton44">
              <b className="krail-b318">승차권확인</b>
              <button
                className="krail-footerbutton4image4"
                onClick={onFooterButton4ImageClick}
              />
            </div>
            <div className="krail-footerbutton34">
              <b className="krail-b319">관광상품</b>
              <img
                className="krail-footerbutton3image-icon4"
                alt=""
                src="/appguide/Korail/footerbutton3image@2x.png"
              />
            </div>
            <div className="krail-footerbutton24">
              <img
                className="krail-footerbutton2image-icon4"
                alt=""
                src="/appguide/Korail/footerbutton2image@2x.png"
              />
              <b className="krail-b319">할인ㆍ정기권</b>
            </div>
            <button className="krail-footerbutton14">
              <b className="krail-b321">승차권예매</b>
              <img
                className="krail-footerbutton1image-icon4"
                alt=""
                src="/appguide/Korail/footerbutton1image@2x.png"
              />
              <div className="krail-footerbutton1-child" />
            </button>
          </div>
          <div className="krail-mainpagefooterbutton1">
            <button className="krail-searchbutton" onClick={onSearchButtonClick}>
              <b className="krail-b322">열차 조회하기</b>
            </button>
            <div className="krail-registrationbutton">
              <b className="krail-b323">간편구매 등록</b>
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
