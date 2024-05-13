import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DeviceSubPage.css";

const DeviceSubPage = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/deviceguide");
  }, [navigate]);

  return (
    <div className="devicesubpage">
      <div className="chatbot1">
        <img className="box-icon1" alt="" src="main/box.svg" />
        <div className="intro2">
          <span className="intro-txt1">
            <p className="p6">어려운 단어가 있으신가요?</p>
            <p className="p6">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="start1">
          <div className="start-item" />
          <div className="div27">시작하기</div>
        </div>
        <img className="character-icon1" alt="" src="main/character@2x.png" />
      </div>
      <div className="body1">
        <div className="tostart">
          <div className="tostart-child" />
          <div className="div28">처음으로</div>
        </div>
        <div className="caption3" />
        <div className="caption2" />
        <div className="caption1" />
        <img className="phone-icon" alt="" src="main/phone.svg" />
      </div>
      {/* 전자기기 선택 사이드바 - 스크롤이 컨텐츠 맨 밑까지 보이지 않고 살짝 끊김 */}
      <div className="choose">
        <div className="smarttv">
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/smartTV.png" />
          <div className="tv">스마트TV</div>
        </div>
        <div className="smarttv">
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/earbuds.png" />
          <div className="tv1">무선이어폰</div>
        </div>
        <div className="smarttv">
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/kiosk.png" />
          <div className="tv2">키오스크</div>
        </div>
        <div className="smarttv">
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/smartwatch.png" />
          <div className="tv1">스마트워치</div>
        </div>
        <div className="smarttv">
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/chrome.png" />
          <div className="tv4">크롬</div>
        </div>
        <div className="smarttv">
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/rectangle-63@2x.png" />
          <div className="tv2">스마트폰</div>
        </div>
      </div>
      {/* header */}
      <div className="header2">
        <div className="box4" />
        <div className="logo2">
          <div className="div29" onClick={onLogoContainerClick}>디지털지름길</div>
          <img className="image-1-icon2" alt="" src="main/image-1@2x.png" />
        </div>
        <div className="easymode2">
          <div className="rectangle-container">
            <div className="group-inner" />
            <div className="div30">내 정보</div>
          </div>
        </div>
        <div className="back2" onClick={onBackContainerClick}>
          <div className="group-inner" />
          <div className="div31">뒤로가기</div>
        </div>
      </div>
      {/* footer */}
      <div className="footer2">
        <div className="box5" />
        <div className="menu2">
          <div className="div32">이용약관</div>
          <div className="div32">오시는길</div>
          <div className="div32">제휴제안</div>
          <div className="div32">개인정보처리방침</div>
          <div className="div32">저작권 보호정책</div>
          <div className="div32">고객센터</div>
        </div>
        <div className="copyright2">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <img className="logo-icon2" alt="" src="main/logo@2x.png" />
        <div className="title2">디지털지름길</div>
      </div>
    </div>
  );
};

export default DeviceSubPage;
