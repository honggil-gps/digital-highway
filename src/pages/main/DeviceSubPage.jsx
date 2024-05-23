import { useCallback } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Appkiosc from "../../Appkiosc"
import "./DeviceSubPage.css";

const DeviceSubPage = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
    }, [navigate]);

  const onHeaderBackButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHeaderBackButtonContainer1Click = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  return (
    <div className="devicesubpage">
      <section className="chatbot1">
        <img className="box-icon1" alt="" src="main/box.svg" />
        <div className="intro2">
          <span className="intro-txt1">
            <p className="p2">어려운 단어가 있으신가요?</p>
            <p className="p2">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <button className="start1">
          <div className="start-item" />
          <div className="div17">시작하기</div>
        </button>
        <img className="character-icon1" alt="" src="main/character@2x.png" />
      </section>
      <section className="choose">
        <button className="smarttv">
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/smartTV.png" />
          <div className="tv">스마트TV</div>
        </button>
        <button className="earbuds">
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/earbuds.png" />
          <div className="tv1">무선이어폰</div>
        </button>
        <button className="kiosk">
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/kiosk.png" />
          <div className="tv2">키오스크</div>
        </button>
        <button className="smartwatch">
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/smartwatch.png" />
          <div className="tv1">스마트워치</div>
        </button>
        <button className="chrome">
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/chrome.png" />
          <div className="tv4">크롬</div>
        </button>
        <button className="smartphone">
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/rectangle-63@2x.png" />
          <div className="tv2">스마트폰</div>
        </button>
      </section>
      <header className="maincontentsheader">
        <img
          className="headertitleimage-icon2"
          alt=""
          src="main/headertitleimage@2x.png"
          onClick={onLogoContainerClick}
        />
        <div className="div18" onClick={onLogoContainerClick}>디지털지름길</div>
        <div
          className="headerbackbutton1"
          onClick={onHeaderBackButtonContainerClick}
        >
          <div className="div19">뒤로가기</div>
        </div>
        <div
          className="headerbackbutton2"
          onClick={onHeaderBackButtonContainer1Click}
        >
          <div className="div19">내 정보</div>
        </div>
      </header>
      <footer className="appguidefooter">
        <div className="copyright2">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext2">
          <div className="div21">고객센터</div>
          <div className="div22">저작권 보호정책</div>
          <div className="div23">개인정보처리방침</div>
          <div className="div24">제휴제안</div>
          <div className="div25">오시는길</div>
          <div className="div26">이용약관</div>
        </div>
        <div className="title2">디지털지름길</div>
        <img className="logo-icon2" alt="" src="main/logo@2x.png" />
      </footer>
      <main className="maincontentsbody">
        <div className="caption-post" />
        <div className="caption" />
        <div className="caption-pre" />
        <div className="phone">
          <Routes>
            <Route path="/DeviceGuide/Kiosc" element={<Appkiosc/>}/>
          </Routes>
          <iframe title="Kiosc" src="http://localhost:5173/DeviceGuide/Kiosc" width="100%" height="100%"/>
        </div>
        <button className="tostart">
          <div className="div27">처음으로</div>
        </button>
      </main>
    </div>
  );
};

export default DeviceSubPage;
